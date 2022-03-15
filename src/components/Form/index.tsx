import React, { useMemo, useCallback, FC, CSSProperties } from 'react';
import {
  useForm as useReactHookForm,
  useWatch as useOriginWatch,
  Controller,
  UseFormReturn,
} from 'react-hook-form';

import { DebouncedFunc, throttle } from 'lodash';
import { isNil, isValidArray } from '@/utils/type';

export interface FormItem {
  key: string;
  content: JSX.Element;
  label?: string;
  options?: {
    initialValue?: any;
    rules?: any;
  };
  formItemCls?: string;
  labelCls?: string;
  errorCls?: string;
}

// 其实没有实质影响， 主要是避免触发自动提交的刷新， 也提供一个页面上表单区域的标识
const Form = (props: any) => {
  const stopDefault = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return <form onSubmit={stopDefault} {...props} />;
};
// react-hook-form 再封装
export const useForm = (formItems: FormItem[], defaultValues?: any) => {
  const methods: UseFormReturn<any, any> = useReactHookForm({ defaultValues });
  const { getValues, handleSubmit } = methods;

  const formItemDoms = useMemo(() => {
    let formItemDoms: any = {};

    if (isValidArray(formItems)) {
      formItems.forEach((formItem) => {
        const key = formItem.key;

        formItemDoms[key] = (
          <FormItemController key={key} methods={methods} formItem={formItem} />
        );
      });
    }

    return formItemDoms;
  }, [formItems, methods]);

  // 检测并返回数据
  const onValidate: DebouncedFunc<
    () => Promise<{ error: Error | null; values?: any }>
  > = useCallback(
    throttle(
      () =>
        new Promise((resolve) =>
          handleSubmit(
            () => resolve({ error: null, values: getValues() }),
            (error) => resolve({ error }),
          )(),
        ),
      300,
    ),
    [getValues, handleSubmit],
  );

  return { formItemDoms, onValidate, ...methods };
};

// react-hook-form 的 controller 用来承载第三方的输入组件
const FormItemController = ({
  methods,
  formItem,
}: {
  methods: UseFormReturn<any, any>;
  formItem: FormItem;
}) => {
  // 默认值
  const { initialValue, rules = {} } = formItem?.options || {};

  // 检测规则
  const controlRules = useMemo(() => {
    return Object.assign(
      {},
      rules,
      rules?.required && {
        required: {
          value: true,
          message: `${formItem?.label || '此项'} 是必填的`,
        },
      },
    );
  }, [rules, formItem?.label]);

  return (
    <Controller
      name={formItem?.key}
      control={methods?.control}
      rules={controlRules}
      defaultValue={initialValue}
      render={({ field, fieldState }) => (
        <FormItemRenderer
          field={field}
          fieldState={fieldState}
          methods={methods}
          formItem={formItem}
        />
      )}
    />
  );
};

export const useWatch = useOriginWatch;

export default Form;

/**
 * Renderer
 */
const FormItemRenderer = ({
  field: { onChange, onBlur, value, name, ref },
  fieldState, // { invalid, isTouched, isDirty, error }
  methods: { trigger, watch, control },
  formItem: {
    key,
    label,
    // 表单组件
    content,
    options = {},
    // 控制样式
    formItemCls = '',
    labelCls = '',
    errorCls = '',
  },
}: any) => {
  const {
    rules,
    // 控制表单检测时机
    validateAfterChange = true,
    validateAfterBlur = false,
  } = options;

  // 错误信息
  const errMsg = useMemo(() => fieldState?.error?.message, [fieldState]);

  const props = useMemo(
    () =>
      Object.assign({}, content?.props, {
        value,
        // fieldState,
        // @ts-ignore
        onChange: (...args) => {
          if (content.props.disabled) return;
          // 触发 controller 的 onChange,
          onChange(...args);
          // 触发输入检测
          if (validateAfterChange) trigger(key);
        },

        // @ts-ignore
        onBlur: (...args) => {
          if (content.props.disabled) return;
          // 触发 controller 的 onBlur,
          onBlur(...args);
          // 触发输入检测
          if (validateAfterBlur) trigger(key);
        },
      }),
    [
      content,
      value,
      fieldState,
      trigger,
      validateAfterChange,
      validateAfterBlur,
    ],
  );

  return (
    <div key={key} ref={ref}>
      <div className={'flex ' + formItemCls}>
        {/* label */}
        <Label className={'p-1 ' + labelCls} rules={rules}>
          {label}
        </Label>

        {/* 表单组件 */}
        {/* {React.cloneElement(content, props, ref)} */}
        {React.cloneElement(content, props)}
      </div>

      {/* 错误信息 */}
      <ErrorMsg className={'p-1 ' + errorCls}>{errMsg}</ErrorMsg>
    </div>
  );
};

/**
 * Label
 */
export const Label: FC<{ className?: string; rules: any }> = ({
  children,
  rules,
  className = '',
}) => {
  if (isNil(children)) return null;

  return (
    <label className={`text-sm text-gray-400 ` + className}>
      {/* 必填标识 */}
      {rules?.required && <span className="m-2 text-red-400">*</span>}
      {/* label */}
      {children}:
    </label>
  );
};

/**
 * ErrorMsg
 */
const ErrorMsg: FC<{ className?: string }> = ({ children, className = '' }) => {
  if (isNil(children)) return null;
  return <p className={'text-sm text-red-400 ' + className}>{children}</p>;
};

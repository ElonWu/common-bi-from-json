import React, { FC, useMemo, useState } from 'react';

import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import ko_KR from '@douyinfe/semi-ui/lib/es/locale/source/ko_KR';
// import zh_TW from '@douyinfe/semi-ui/lib/es/locale/source/zh_TW';
// import vi_VN from '@douyinfe/semi-ui/lib/es/locale/source/vi_VN';

import zh_CN_Customize from '@/locale/zh_CN';
import en_US_Customize from '@/locale/en_US';
import ja_JP_Customize from '@/locale/ja_JP';
import ko_KR_Customize from '@/locale/ko_KR';

import { LocaleProvider, Select } from '@douyinfe/semi-ui';
import useIntl from '@/store/intl';
import { IconGlobe } from '@douyinfe/semi-icons';

export const LocaleTypes = [
  { label: '简体中文', value: 'zh_CN', locale: zh_CN },
  { label: 'ENGLISH', value: 'en_US', locale: en_US },
  { label: '日文', value: 'ja_JP', locale: ja_JP },
  { label: '韩文', value: 'ko_KR', locale: ko_KR },

  // { label: '繁体中文', value: 'zh_TW', locale: zh_TW },
  // { label: '泰文', value: 'vi_VN', locale: vi_VN },
];

export const CustomizeLocaleTypes = [
  { label: '简体中文', value: 'zh_CN', locale: zh_CN_Customize },
  { label: 'ENGLISH', value: 'en_US', locale: en_US_Customize },
  { label: '日文', value: 'ja_JP', locale: ja_JP_Customize },
  { label: '韩文', value: 'ko_KR', locale: ko_KR_Customize },

  // { label: '繁体中文', value: 'zh_TW', locale: zh_TW },
  // { label: '泰文', value: 'vi_VN', locale: vi_VN },
];

// 在locale中传入相应的语言包即可
const GlobalLocale: FC<{}> = ({ children }) => {
  const { value: localeType } = useIntl();

  const locale = useMemo(() => {
    return LocaleTypes.find((lang) => lang.value === localeType)?.locale;
  }, [localeType]);

  return (
    <LocaleProvider locale={locale}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {children}
    </LocaleProvider>
  );
};

export const LocaleSelect = () => {
  const { value: localeType, setValue: setLocaleType } = useIntl();

  return (
    <Select
      prefix={<IconGlobe />}
      style={{ width: 128 }}
      optionList={LocaleTypes.map(({ label, value }) => ({ label, value }))}
      value={localeType}
      onChange={(value) => {
        if (value) setLocaleType(value as string);
      }}
    />
  );
};

export const useCustomizeLocale = () => {
  const { value: localeType } = useIntl();

  const locale = useMemo(() => {
    return CustomizeLocaleTypes.find((lang) => lang.value === localeType)
      ?.locale;
  }, [localeType]);

  return locale;
};

export default GlobalLocale;

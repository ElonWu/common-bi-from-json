// 字符串
export function isString(value: any): boolean {
  return typeof value === 'string';
}

// 非空字符串
export function isValidString(value: any): boolean {
  return typeof value === 'string' && value !== '';
}

// 数组类型
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

// 非空数组
export function isValidArray(value: any): boolean {
  return Array.isArray(value) && value.length > 0;
}

// 是 undefined 或者 null
export function isNil(value: any): boolean {
  return Boolean((value ?? true) === true && value !== true);
}

// 不是 undefined 或者 null
export function notNil(value: any): boolean {
  return !isNil(value);
}

// 函数
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

// 函数
export function validFunction(value: any) {
  const defultFunction = () => null;
  return isFunction(value) ? value : defultFunction;
}

export function isJSON(value: any): boolean {
  return typeof value === 'string';
}

export const EmptyObject = {};

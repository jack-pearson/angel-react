/*
 * @Author: jack-pearson
 * @Date: 2021-08-30 19:59:26
 * @LastEditTime: 2021-11-03 14:53:56
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/config/index.ts
 * @Description:
 */

export const prefixCls: string = 'angel';
export const getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string = (
  suffixCls,
  customizePrefixCls = prefixCls,
) => `${customizePrefixCls}-${suffixCls}`;

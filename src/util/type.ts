/*
 * @Author: jack-pearson
 * @Date: 2021-08-23 19:31:16
 * @LastEditTime: 2021-08-23 19:32:15
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/util/type.ts
 * @Description:
 */
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

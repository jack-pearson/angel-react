/*
 * @Author: jack-pearson
 * @Date: 2021-08-23 19:27:38
 * @LastEditTime: 2021-08-23 19:31:06
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/util/devWarning.ts
 * @Description:
 */
const warn = (valid: boolean, component: string, message: string): void => {
  valid && console.warn(`[ant: ${component}] ${message}`);
};
export default warn;

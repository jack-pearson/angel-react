/*
 * @Author: jack-pearson
 * @Date: 2021-08-23 19:27:38
 * @LastEditTime: 2021-09-02 17:09:49
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/util/warning.ts
 * @Description:
 */
const warn = (valid: boolean, component: string, message: string): void => {
  if (valid) {
    console.warn(`[angel-react: ${component}] ${message}`);
  }
};
export default warn;

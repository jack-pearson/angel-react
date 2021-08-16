/*
 * @Author: angel
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-08-16 20:39:46
 * @LastEditors: angel
 * @FilePath: /angel-ui/.storybook/preview.js
 * @Description:
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

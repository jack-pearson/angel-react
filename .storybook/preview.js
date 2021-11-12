/*
 * @Author: jack-pearson
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-08-25 12:01:57
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/.storybook/preview.js
 * @Description:
 */
import '../src/styles/index.scss';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

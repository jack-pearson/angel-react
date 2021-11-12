/*
 * @Author: jack-pearson
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-08-25 12:01:40
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/.storybook/main.js
 * @Description:
 */
module.exports = {
  stories: ['./introduce.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
};

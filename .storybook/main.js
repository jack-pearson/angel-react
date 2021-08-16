/*
 * @Author: angel
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-08-16 21:07:57
 * @LastEditors: angel
 * @FilePath: /angel-ui/.storybook/main.js
 * @Description:
 */
module.exports = {
  stories: ['./introduce.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};

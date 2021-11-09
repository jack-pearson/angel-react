/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-11-09 17:05:15
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Grid/grid.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid from './index';
import { IGridProps } from './grid';
export default {
  title: 'Grid',
  component: Grid,
} as Meta;
const Template: Story = (args: IGridProps) => <Grid {...args}></Grid>;
const gridItem = Array(24)
  .fill(1)
  .map((item, index) => <Grid.Item key={index}>{index + 1}</Grid.Item>);
export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
  colGap: 20,
  children: gridItem,
  colStyle: {
    color: 'red',
    textAlign: 'center',
  },
};

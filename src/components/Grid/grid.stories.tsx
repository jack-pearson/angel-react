/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-11-05 17:27:14
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Grid/grid.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Grid from './index';
import { IGridProps } from './grid';
export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: IGridProps) => (
  <Grid {...args} colStyle={{ color: 'red' }}>
    <Grid.Item colEnd={3} colStart={1} style={{ color: '#000' }}>
      1
    </Grid.Item>
    <Grid.Item colEnd={2} colStart={1}>
      2
    </Grid.Item>
    <Grid.Item colEnd={4} colStart={3}>
      3
    </Grid.Item>
    <Grid.Item colEnd={4} colStart={1}>
      4
    </Grid.Item>
  </Grid>
);
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  colGap: 20,
  cols: ['1fr', '1fr', '1fr', '1fr'],
};

// export const TestGrid = Template.bind({});
// const TestChildren = <div>123</div>;
// TestGrid.args = {
//   colGap: 20,
//   children: TestChildren,
//   cols: ['1fr', '1fr', '1fr', '1fr'],
// };

/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-11-03 16:08:48
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Card/card.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, ICardProps } from './card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: ICardProps) => <Card {...args} />;

export const DefaultCard = Template.bind({});
const a = <a href="http://www.baidu.com">更多</a>;
DefaultCard.args = {
  title: 'Card title',
  children: '123',
  extra: a,
};

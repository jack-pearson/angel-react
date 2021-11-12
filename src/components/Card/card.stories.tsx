/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-11-09 14:14:15
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/components/Card/card.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card, ICardProps } from './card';
import Icon from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: ICardProps) => <Card {...args} />;

export const DefaultCard = Template.bind({});
const a = <a href="http://www.baidu.com">更多</a>;
const cover = (
  <img alt="example" src="http://5b0988e595225.cdn.sohucs.com/images/20190118/35c70cf236a64cf6b6d6c5320da12504.jpeg" />
);
const actions = [
  ['fab', '500px'],
  ['fab', '500px'],
  ['fab', '500px'],
].map((item, index) => (
  <Icon key={index} icon={item as IconProp} style={{ fontSize: '20px' }}>
    {item}
  </Icon>
));
DefaultCard.args = {
  title: 'Card title',
  children: '123',
  extra: a,
  cover,
  actions,
};

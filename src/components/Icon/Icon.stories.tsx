/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-09-01 11:23:50
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/components/Icon/Icon.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './icon';

export default {
  title: 'Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  icon: ['fab', '500px'],
};

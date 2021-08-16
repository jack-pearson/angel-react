/*
 * @Author: angel
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-08-16 19:16:32
 * @LastEditors: angel
 * @FilePath: /angel-ui/src/components/Icon/Icon.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { Icon } from './icon';

export default {
  title: 'Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  icon: 'ad',
};

/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-09-03 16:34:30
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/components/Button/button.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, IButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    htmlType: {
      table: {
        // 控制这个属性再文档中显示与否
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    color: {
      defaultValue: 'primary',
      control: { type: 'select' },
    },
    type: {
      defaultValue: 'default',
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'middle',
      control: { type: 'select' },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: false,
      },
      defaultValue: null,
      description: '此属性不能通过当前页来编辑',
      control: { type: 'none' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: '测试按钮',
};

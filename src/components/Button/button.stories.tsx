/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-08-27 18:13:10
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/button.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { IButtonProps } from './button';

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
  },
} as Meta;

// const Template: ComponentStory<typeof Button> = (args: IButtonProps) => {
//   return <Button {...args} />;
// };
export const DefaultButton: Story<IButtonProps> = args => {
  return <Button {...args} />;
};

// export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: '测试按钮',
};

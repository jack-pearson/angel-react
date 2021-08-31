/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-08-31 14:36:52
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/button.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
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
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => <Button {...args} />;

export const DefaultButton = Template.bind({});
export const RoundButton = Template.bind({});
DefaultButton.args = {
  children: '测试按钮',
};
RoundButton.args = {
  children: '123',
};

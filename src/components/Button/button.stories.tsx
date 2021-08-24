/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-08-23 20:06:31
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/Button.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

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

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {};

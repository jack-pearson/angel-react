/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 17:38:24
 * @LastEditTime: 2021-08-24 13:35:29
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Icon/Icon.stories.tsx
 * @Description: props look https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Icon } from './icon';

library.add(fas, fab, far);

export default {
  title: 'Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  icon: ['fab', '500px'],
};

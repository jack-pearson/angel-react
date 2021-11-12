/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 16:22:24
 * @LastEditTime: 2021-11-09 14:26:46
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/components/Icon/icon.tsx
 * @Description:  https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

export interface IconProps extends FontAwesomeIconProps {
  /** icon  可以是 ['fab', '500px'] 也可以是 'ad' (默认是 soild 格式)*/
  icon: IconProp;
  /** svg 的 class */
  className?: string;
  /** 是否旋转 */
  spin?: boolean;
  /** 颜色 */
  color?: string;
}

/**
 * icon 组件
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'angel-react'
 * ~~~
 *
 * ### 描述
 * icon 用的是 fontawesome,此文档中没有列出来具体属性.需要自行去查看
 *
 * - https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react 参数文档
 * - https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands,regular,solid&m=free 所有的 icon 都在这里面了.
 * - icon参数可以是 ['fab', '500px']  也可以是 'ad' (本质也是前面这种格式, 只不过 **fas** 被省略了.默认是 **solid**)
 *    1. brands: fab
 *    2. regular:far
 *    3. solid: fas
 * - size 属性,官方的是用  "xs"| "lg"| "sm"| "1x"| "2x"| "3x"| "4x"| "5x"| "6x"| "7x"| "8x"| "9x"| "10x 这种, 但是可以直接设置 style 中的 fontSize, 这样可以更灵活.
 */
export const Icon: FC<IconProps> = props => {
  const { className, icon, ...restProps } = props;
  const classes = classNames('icon', className);
  return <FontAwesomeIcon icon={icon} data-testid="test-icon" className={classes} {...restProps} />;
};
export default Icon;

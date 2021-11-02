/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 16:22:24
 * @LastEditTime: 2021-11-02 17:17:53
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Icon/icon.tsx
 * @Description:  https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
 * import { Icon } from 'angel-ui'
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
 */
export const Icon: FC<IconProps> = props => {
  const { className, icon, ...restProps } = props;
  const classes = classNames('icon', className);
  return <FontAwesomeIcon icon={icon} data-testid="test-icon" className={classes} {...restProps} />;
};
export default Icon;

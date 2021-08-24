/*
 * @Author: jack-pearson
 * @Date: 2021-08-13 16:22:24
 * @LastEditTime: 2021-08-19 20:24:16
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

export const Icon: FC<IconProps> = props => {
  const { className, icon, ...restProps } = props;
  const classes = classNames('icon', className);
  return <FontAwesomeIcon icon={icon} data-testid="test-icon" className={classes} {...restProps} />;
};

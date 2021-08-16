/*
 * @Author: angel
 * @Date: 2021-08-13 16:22:24
 * @LastEditTime: 2021-08-16 19:17:29
 * @LastEditors: angel
 * @FilePath: /angel-ui/src/components/icon/icon.tsx
 * @Description:  https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends FontAwesomeIconProps {
  /** svg 的 class */
  className?: string;
  /** 是否旋转 */
  spin?: boolean;
  /** 颜色 */
  color?: string;
}

export const Icon: FC<IconProps> = props => {
  const { className, ...restProps } = props;
  // icon-primary
  const classes = classNames('icon', className);
  return <FontAwesomeIcon data-testid="test-icon" className={classes} {...restProps} />;
};

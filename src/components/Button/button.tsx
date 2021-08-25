/*
 * @Author: jack-pearson
 * @Date: 2021-08-19 20:24:49
 * @LastEditTime: 2021-08-25 11:57:04
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/button.tsx
 * @Description:
 */
import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { tuple } from '../../util/type';

const ButtonSizes = tuple('large', 'small');
export type ButtonSize = typeof ButtonSizes[number];
const ButtonTypes = tuple('link', 'dashed', 'text');
export type ButtonType = typeof ButtonTypes[number];
export type ButtonShape = 'circle' | 'round';
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
interface IBaseButtonProps {
  className?: string;
  /** 按钮的类型 */
  type?: ButtonType;
  children?: React.ReactNode;
  /** 大小 */
  size?: ButtonSize;
  /** 是否增加边框 */
  border?: boolean;
  /** 是否增加阴影 */
  shadow?: boolean;
  /** 设置按钮形状 */
  shape?: ButtonShape;
  /** 类型为 link 的时候的链接 */
  href?: string;
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
} & IBaseButtonProps &
  Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
type AnchorButtonProps = IBaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type IButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'angel-ui'
 * ~~~
 */

export const Button: FC<IButtonProps> = ({ size, type, htmlType = 'button', className }) => {
  const classes = classNames('angel-btn', className, {
    [`angel-btn-${size}`]: size,
    [`angel-btn-${type}`]: type,
  });
  return (
    <button className={classes} type={htmlType}>
      321
    </button>
  );
};

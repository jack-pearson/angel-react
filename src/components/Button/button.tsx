/*
 * @Author: jack-pearson
 * @Date: 2021-08-19 20:24:49
 * @LastEditTime: 2021-08-31 19:56:18
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/button.tsx
 * @Description:
 */
import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { getPrefixCls } from '../../config';
import { tuple } from '../../util/type';

const ButtonSizes = tuple('large', 'small');
export type ButtonSize = typeof ButtonSizes[number];
const ButtonTypes = tuple('link', 'primary', 'dashed', 'text');
export type ButtonType = typeof ButtonTypes[number];
export type ButtonShape = 'circle' | 'round';
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
interface IBaseButtonProps {
  className?: string;
  /** 按钮的类型 */
  type?: ButtonType | any;
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
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 是否可禁用 */
  disabled?: boolean;
}

type NativeButtonProps = { htmlType?: ButtonHTMLType } & IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
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
function formatSize(size: IBaseButtonProps['size']) {
  switch (size) {
    case 'large':
      return 'lg';
    case 'small':
      return 'sm';
    default:
      break;
  }
}

const BaseButton: React.ForwardRefRenderFunction<HTMLElement, IButtonProps> = (
  {
    size,
    type = 'primary',
    shape,
    htmlType = 'button',
    border = true,
    className,
    children,
    ...restProps
  }: IButtonProps,
  ref,
) => {
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const btnSize = formatSize(size);
  const prefixCls = getPrefixCls('btn');
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnSize}`]: btnSize,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-no-border`]: !border,
  });
  return (
    <button className={classes} type={htmlType} {...restProps} ref={buttonRef}>
      {children}
    </button>
  );
};

export const Button = React.forwardRef<HTMLElement, IButtonProps>(BaseButton);

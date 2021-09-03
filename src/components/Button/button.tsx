/*
 * @Author: jack-pearson
 * @Date: 2021-08-19 20:24:49
 * @LastEditTime: 2021-09-03 19:09:35
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Button/button.tsx
 * @Description:
 */
import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { getPrefixCls } from '../../config';
import { tuple } from '../../util/type';
import warn from '../../util/warning';

const ButtonSizes = tuple('large', 'middle', 'small');
export type ButtonSize = typeof ButtonSizes[number];
const ButtonTypes = tuple('link', 'default', 'dashed', 'text');
export type ButtonType = typeof ButtonTypes[number];
const ButtonColors = tuple('primary', 'danger', 'warning', 'success', 'info');
export type ButtonColor = typeof ButtonColors[number];
export type ButtonShape = 'circle' | 'round';
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
interface IBaseButtonProps {
  className?: string;
  /** 按钮的类型 */
  type?: ButtonType;
  /** color */
  color?: ButtonColor;
  children?: React.ReactNode;
  /** 大小 */
  size?: ButtonSize;
  /** 设置按钮形状,round: 为两边椭圆, circle: 为 icon 专用 */
  shape?: ButtonShape;
  /** 类型为 link 的时候的链接 */
  href?: string;
  /** 设置按钮的图标组件(暂时未做) */
  icon?: React.ReactNode;
  /** 是否可禁用 */
  disabled?: boolean;
}

type NativeButtonProps = { htmlType?: ButtonHTMLType; onClick?: React.MouseEventHandler<HTMLElement> } & Omit<
  ButtonHTMLAttributes<HTMLElement>,
  'type' | 'color' | 'disabled' | 'onClick'
> &
  IBaseButtonProps;
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
      return 'md';
  }
}

const BaseButton: React.ForwardRefRenderFunction<HTMLElement, IButtonProps> = (
  {
    size = 'middle',
    type = 'default',
    color = 'primary',
    shape,
    htmlType = 'button',
    className,
    children,
    disabled = false,
    onClick,
    icon,
    href,
    ...restProps
  }: IButtonProps,
  ref,
) => {
  warn(type === 'link' && !href, 'Button', '`link` 需要 href 属性');
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const btnSize = formatSize(size);
  const prefixCls = getPrefixCls('btn');
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnSize}`]: btnSize !== 'md',
    [`${prefixCls}-${type}`]: type !== 'default',
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${color}`]: color,
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };
  if (type === 'link' && href) {
    return (
      // @ts-ignore：忽略 a 标签上没有 disabled 属性的问题
      <a className={classes} href={href} disabled={disabled} ref={buttonRef} onClick={handleClick} {...restProps}>
        {icon && <span className="angelicon">{icon}</span>}
        {children && <span>{children}</span>}
      </a>
    );
  }
  return (
    <button className={classes} type={htmlType} disabled={disabled} ref={buttonRef} {...restProps}>
      {icon && <span className="angelicon">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export const Button = React.forwardRef<HTMLElement, IButtonProps>(BaseButton);
Button.displayName = 'button';

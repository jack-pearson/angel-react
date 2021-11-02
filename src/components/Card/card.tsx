/*
 * @Author: jack-pearson
 * @Date: 2021-10-21 16:36:57
 * @LastEditTime: 2021-11-02 18:44:52
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Card/card.tsx
 * @Description:
 */
import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../config';

export interface ICardProps {
  className?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  border?: boolean;
}
const prefixCls = getPrefixCls('card');
export const BaseCard: React.ForwardRefRenderFunction<HTMLElement, ICardProps> = props => {
  const { className, title, extra, children, border = true, ...restProps } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-border`]: border,
  });
  let head: React.ReactNode;
  if (title || extra) {
    head = (
      <div className={`${prefixCls}-head`}>
        <div className={`${prefixCls}-head-wrapper`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      </div>
    );
  }
  const body = <div className={`${prefixCls}-body`}>{children}</div>;
  return (
    <div className={classes} {...restProps}>
      {head}
      {body}
    </div>
  );
};
export const Card = React.forwardRef<HTMLElement, ICardProps>(BaseCard);

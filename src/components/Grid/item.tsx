/*
 * @Author: jack-pearson
 * @Date: 2021-11-05 15:19:37
 * @LastEditTime: 2021-11-05 18:34:05
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Grid/item.tsx
 * @Description:
 */
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../config';

export interface IItemProps {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}
const prefixCls = getPrefixCls('grid-item');
export const Item: React.FC<IItemProps> = props => {
  const { className, children, style, colStart, colEnd, rowStart, rowEnd } = props;
  const classes = classNames(prefixCls, className);
  return (
    <div
      className={classes}
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
Item.displayName = 'GridItem';
export default Item;

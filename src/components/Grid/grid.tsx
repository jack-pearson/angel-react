/*
 * @Author: jack-pearson
 * @Date: 2021-11-03 16:40:02
 * @LastEditTime: 2021-11-05 18:36:00
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Grid/grid.tsx
 * @Description:
 */
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../config';
import { IItemProps } from './item';

export interface IGridProps {
  className?: string;
  children?: React.ReactNode[] | React.ReactNode;
  rows?: string[];
  cols?: string[];
  areas?: CSSProperties;
  rowGap?: any;
  colGap?: any;
  style?: CSSProperties;
  colStyle?: CSSProperties;
}
const prefixCls = getPrefixCls('grid');
export const Grid = React.forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const {
    className,
    children,
    cols = Array(24)
      .fill(1)
      .map(i => '1fr'),
    rows,
    colGap,
    rowGap,
    style,
    colStyle,
  } = props;
  const classes = classNames(prefixCls, className);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IItemProps>;
      const { displayName } = childElement.type;
      const { style: childStyle } = childElement.props;
      if (displayName === 'GridItem') {
        return React.cloneElement(childElement, {
          style: childStyle ?? colStyle,
        });
      } else {
        console.warn('Warning: Grid has a child which is not a GridItem component');
      }
    });
  };
  return (
    <div
      className={classes}
      ref={ref}
      style={{
        gridTemplateColumns: cols ? cols.join(' ') : '',
        gridTemplateRows: rows ? rows.join(' ') : '',
        columnGap: colGap,
        rowGap: rowGap,
        ...style,
      }}
    >
      {renderChildren()}
    </div>
  );
});

export default Grid;

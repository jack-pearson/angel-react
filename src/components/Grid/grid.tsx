/*
 * @Author: jack-pearson
 * @Date: 2021-11-03 16:40:02
 * @LastEditTime: 2021-11-09 14:41:36
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
  /** 只能是GirdItem 组件, 数组类型  */
  children?: React.ReactNode[];
  /** gridTemplateRows 属性 */
  rows?: string[];
  /** gridTemplateColumns 属性 默认值为 24 等分, 1-25 */
  cols?: string[];
  /** rowGap 属性 */
  rowGap?: any;
  /** colGap 属性 */
  colGap?: any;
  style?: CSSProperties;
  /** 设置 GridItem 的 style  */
  colStyle?: CSSProperties;
}
const prefixCls = getPrefixCls('grid');
/**
 * Grid 组件
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Grid } from 'angel-ui'
 * ~~~
 *
 * ### 描述
 * Grid 用的是 css 中的 grid 布局.默认 24 等分, 通过 1-25 来控制每一项 GridItem 的站位.
 *
 * colStyle 属性是给所有的 GridItem 设置样式.如果单个 GridItem 设置了 style 属性, 则会覆盖 colStyle 的样式.
 */
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

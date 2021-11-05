/*
 * @Author: jack-pearson
 * @Date: 2021-11-03 16:57:06
 * @LastEditTime: 2021-11-05 17:00:01
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Grid/index.tsx
 * @Description:
 */
import { FC, ForwardRefExoticComponent, RefAttributes } from 'react';
import { Grid, IGridProps } from './grid';
import { Item, IItemProps } from './item';
Grid.displayName = 'grid';
export type GridType = ForwardRefExoticComponent<IGridProps & RefAttributes<HTMLDivElement>> & {
  Item: FC<IItemProps>;
};
const TransGrid = Grid as GridType;
TransGrid.Item = Item;
export default TransGrid;

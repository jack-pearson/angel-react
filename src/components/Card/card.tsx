/*
 * @Author: jack-pearson
 * @Date: 2021-10-21 16:36:57
 * @LastEditTime: 2021-11-09 10:25:40
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/components/Card/card.tsx
 * @Description:
 */
import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../config';
import Grid from '../Grid';

export interface ICardProps {
  className?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  border?: boolean;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
  loading?: boolean;
}
const prefixCls = getPrefixCls('card');
const getAction = (actions: React.ReactNode[]) => {
  if (!actions || !actions.length) {
    return null;
  }
  const actionList = actions.map((action, index) => {
    return (
      <li key={index}>
        <span>{action}</span>
      </li>
    );
  });

  return actionList;
};
export const Card: React.FC<ICardProps> = props => {
  const {
    className,
    title,
    extra,
    children,
    border = true,
    headStyle,
    bodyStyle,
    loading,
    cover,
    actions,
    ...restProps
  } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-border`]: border,
  });
  let head: React.ReactNode;
  if (title || extra) {
    head = (
      <div className={`${prefixCls}-head`} style={headStyle}>
        <div className={`${prefixCls}-head-wrapper`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-head-extra`}>{extra}</div>}
        </div>
      </div>
    );
  }
  const loadingNode = (
    <div className={`${prefixCls}-loading`}>
      <Grid
        colStyle={{
          background:
            'linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2))',
          height: '14px',
        }}
        rowGap={'8px'}
      >
        <Grid.Item colStart={1} colEnd={20}></Grid.Item>
        <Grid.Item colStart={1} colEnd={9}></Grid.Item>
        <Grid.Item colStart={10} colEnd={24}></Grid.Item>
        <Grid.Item colStart={1} colEnd={7}></Grid.Item>
        <Grid.Item colStart={8} colEnd={25}></Grid.Item>
        <Grid.Item colStart={1} colEnd={14}></Grid.Item>
        <Grid.Item colStart={15} colEnd={23}></Grid.Item>
        <Grid.Item colStart={1} colEnd={5}></Grid.Item>
        <Grid.Item colStart={6} colEnd={9}></Grid.Item>
        <Grid.Item colStart={10} colEnd={24}></Grid.Item>
      </Grid>
    </div>
  );
  const body = (
    <div className={`${prefixCls}-body`} style={bodyStyle}>
      {loading ? loadingNode : children}
    </div>
  );

  const actionDom = actions && <ul className={`${prefixCls}-actions`}>{getAction(actions)}</ul>;
  const coverDom = cover ? <div className={`${prefixCls}-cover`}>{cover}</div> : null;

  return (
    <div className={classes} {...restProps}>
      {head}
      {coverDom}
      {body}
      {actionDom}
    </div>
  );
};

/*
 * @Author: angel
 * @Date: 2021-08-13 16:22:24
 * @LastEditTime: 2021-08-16 10:25:19
 * @LastEditors: angel
 * @FilePath: /angel-ui/src/components/icon/icon.tsx
 * @Description:
 */
import React, { FC } from "react";
import classNames from "classnames";
// import "./_style.scss";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type testProps = "small" | "medium" | "large";

export interface Props {
  /**是否禁用 Input */
  className?: string;
  /**设置 Button 的类型 */
  test?: testProps;
  /** 是否旋转 */
  spin?: boolean;
}

export type IconProps = Props & FontAwesomeIconProps;

export const Icon = ({
  className,
  test = "small",
  ...restProps
}: IconProps) => {
  // icon-primary
  const classes = classNames("icon", className);
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

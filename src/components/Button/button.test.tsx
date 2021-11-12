/*
 * @Author: jack-pearson
 * @Date: 2021-09-06 13:41:55
 * @LastEditTime: 2021-09-06 15:10:48
 * @LastEditors: jack-pearson
 * @FilePath: /angel-react/src/components/Button/button.test.tsx
 * @Description: 测试 button
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';
import { IButtonProps } from './button';
const defaultProps: IButtonProps = {
  onClick: jest.fn(),
};
const moreProps: IButtonProps = {
  color: 'warning',
  type: 'link',
  href: 'http://www.baidu.com',
  size: 'large',
};

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>button</Button>);
    const element = wrapper.getByRole('button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('angel-btn angel-btn-primary');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    render(<Button {...moreProps}>link</Button>);
    const element = document.querySelector('.angel-btn-link') as HTMLAnchorElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('angel-btn angel-btn-lg angel-btn-link angel-btn-warning');
    // @ts-ignore：忽略 a 标签上没有 disabled 属性的问题
    expect(element.disabled).toBeFalsy();
    expect(element.href).toEqual('http://www.baidu.com/');
  });
});

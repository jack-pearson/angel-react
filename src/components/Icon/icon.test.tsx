/*
 * @Author: angel
 * @Date: 2021-08-16 15:55:46
 * @LastEditTime: 2021-08-16 19:15:45
 * @LastEditors: angel
 * @FilePath: /angel-ui/src/components/Icon/icon.test.tsx
 * @Description: test Icon component
 */
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { Icon } from './icon';

describe('test Icon component', () => {
  it('Test whether the Icon component is className correctly', () => {
    const wrapper = render(<Icon icon="ad" size="8x" className="angel"></Icon>);
    const element = wrapper.getByTestId('test-icon');
    expect(element).toHaveClass('angel');
  });
  it('Test whether the Icon component is attribute correctly', () => {
    const wrapper = render(<Icon icon="ad" size="8x" className="angel"></Icon>);
    const element = wrapper.getByTestId('test-icon');
    expect(element.getAttribute('data-icon')).toEqual('ad');
  });
});

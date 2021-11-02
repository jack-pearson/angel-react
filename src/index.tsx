/*
 * @Author: jack-pearson
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-11-02 18:04:33
 * @LastEditors: jack-pearson
 * @FilePath: /angel-ui/src/index.tsx
 * @Description:
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

export { default as Icon } from './components/Icon';
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';

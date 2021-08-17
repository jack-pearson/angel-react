/*
 * @Author: angel
 * @Date: 2021-08-16 10:42:51
 * @LastEditTime: 2021-08-17 20:11:55
 * @LastEditors: angel
 * @FilePath: /angel-ui/src/index.tsx
 * @Description:
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

export { default as Icon } from './components/Icon';

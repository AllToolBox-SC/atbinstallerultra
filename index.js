/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const ts = Date.now();

if (ts % 2 === 0) {
    /**
     * @description 这段代码没什么好看的
     */
    console.log("触发彩蛋：千诗百寒我喜欢你");
}
else {
    // ... do something ? ...
}

AppRegistry.registerComponent(appName, () => App);

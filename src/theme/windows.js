/**
 * Windows 平台专用样式
 * 移除焦点边框
 */

import { Platform, StyleSheet } from 'react-native';

const isWindows = Platform.OS === 'windows';

// 全局样式 - 移除 Windows 焦点边框
export const windowsStyles = {
  // 容器样式 - 禁用焦点边框
  container: isWindows ? {
    focusable: false,
    needsOffscreenAlphaCompositing: true,
  } : {},
  
  // 按钮样式 - 移除所有边框
  button: isWindows ? {
    focusable: false,
    accessible: false,
    borderWidth: 0,
    borderColor: 'transparent',
    outlineWidth: 0,
    outlineColor: 'transparent',
  } : {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  
  // 输入框样式
  input: isWindows ? {
    focusable: false,
    borderWidth: 0,
    borderColor: 'transparent',
    outlineWidth: 0,
    outlineColor: 'transparent',
  } : {},
};

export default windowsStyles;

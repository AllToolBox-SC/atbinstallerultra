/**
 * 全局配置
 * 禁用 React Native Windows 的焦点边框
 */

import { Platform } from 'react-native';

// 在 Windows 平台上禁用焦点视觉反馈
export const disableFocusVisual = Platform.OS === 'windows';

// 通用 props 用于禁用焦点边框
export const noFocusProps = Platform.OS === 'windows' 
  ? { 
      focusable: false,
      disabled: false,
    }
  : {};

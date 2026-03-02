/**
 * 自定义 Button 组件
 * 移除 Windows 平台的白色焦点边框
 */

import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { buttonTheme, globalStyles } from '../theme';

const isWindows = Platform.OS === 'windows';

export default function Button(props) {
  const { style, theme, ...rest } = props;

  // 合并样式和主题
  const mergedStyle = [
    globalStyles.buttonNoOutline,
    style,
  ];

  const mergedTheme = {
    ...buttonTheme,
    ...theme,
  };

  // Windows 平台禁用 focusable
  const platformProps = isWindows ? {
    focusable: false,
    tabIndex: -1,
  } : {};

  return (
    <PaperButton
      {...rest}
      {...platformProps}
      style={mergedStyle}
      theme={mergedTheme}
    />
  );
}

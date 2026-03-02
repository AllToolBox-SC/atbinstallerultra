/**
 * 自定义 Button 组件
 * 移除白色焦点边框
 */

import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { buttonTheme, globalStyles } from '../theme';

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

  return (
    <PaperButton
      {...rest}
      style={mergedStyle}
      theme={mergedTheme}
    />
  );
}

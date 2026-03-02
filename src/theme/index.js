/**
 * 全局主题配置
 * 移除所有组件的白色边框/焦点边框
 */

import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { Platform, StyleSheet } from 'react-native';

// 检测 Windows 平台
const isWindows = Platform.OS === 'windows';

// 全局样式 - 移除 Web 平台的 outline
export const globalStyles = StyleSheet.create({
  noOutline: {
    ...(Platform.OS === 'web' && {
      outlineStyle: 'none',
      outlineWidth: 0,
      outlineColor: 'transparent',
    }),
  },
  // 按钮样式 - 移除所有边框和阴影
  buttonNoOutline: {
    borderWidth: 0,
    borderColor: 'transparent',
    outlineWidth: 0,
    outlineColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
  // 通用无焦点边框样式
  noFocusBorder: {
    borderWidth: 0,
    borderColor: 'transparent',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
});

// 自定义 Light 主题 - 移除所有 outline 边框
export const CustomLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // 设置所有 outline 相关颜色为透明
    outline: 'transparent',
    outlineVariant: 'transparent',
    // Windows 焦点边框颜色
    focusRing: 'transparent',
    focusRingColor: 'transparent',
    // Button 相关颜色
    primary: MD3LightTheme.colors.primary,
    onPrimary: MD3LightTheme.colors.onPrimary,
    primaryContainer: MD3LightTheme.colors.primaryContainer,
    onPrimaryContainer: MD3LightTheme.colors.onPrimaryContainer,
    secondary: MD3LightTheme.colors.secondary,
    onSecondary: MD3LightTheme.colors.onSecondary,
    secondaryContainer: MD3LightTheme.colors.secondaryContainer,
    onSecondaryContainer: MD3LightTheme.colors.onSecondaryContainer,
    tertiary: MD3LightTheme.colors.tertiary,
    onTertiary: MD3LightTheme.colors.onTertiary,
    tertiaryContainer: MD3LightTheme.colors.tertiaryContainer,
    onTertiaryContainer: MD3LightTheme.colors.onTertiaryContainer,
    error: MD3LightTheme.colors.error,
    onError: MD3LightTheme.colors.onError,
    errorContainer: MD3LightTheme.colors.errorContainer,
    onErrorContainer: MD3LightTheme.colors.onErrorContainer,
    background: MD3LightTheme.colors.background,
    onBackground: MD3LightTheme.colors.onBackground,
    surface: MD3LightTheme.colors.surface,
    onSurface: MD3LightTheme.colors.onSurface,
    surfaceVariant: MD3LightTheme.colors.surfaceVariant,
    onSurfaceVariant: MD3LightTheme.colors.onSurfaceVariant,
    surfaceTint: 'transparent',
    inverseSurface: MD3LightTheme.colors.inverseSurface,
    inverseOnSurface: MD3LightTheme.colors.inverseOnSurface,
    inversePrimary: MD3LightTheme.colors.inversePrimary,
    shadow: MD3LightTheme.colors.shadow,
    scrim: MD3LightTheme.colors.scrim,
  },
  roundness: 8,
};

// 自定义 Dark 主题 - 移除所有 outline 边框
export const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // 设置所有 outline 相关颜色为透明
    outline: 'transparent',
    outlineVariant: 'transparent',
    // Windows 焦点边框颜色
    focusRing: 'transparent',
    focusRingColor: 'transparent',
    // Button 相关颜色
    primary: MD3DarkTheme.colors.primary,
    onPrimary: MD3DarkTheme.colors.onPrimary,
    primaryContainer: MD3DarkTheme.colors.primaryContainer,
    onPrimaryContainer: MD3DarkTheme.colors.onPrimaryContainer,
    secondary: MD3DarkTheme.colors.secondary,
    onSecondary: MD3DarkTheme.colors.onSecondary,
    secondaryContainer: MD3DarkTheme.colors.secondaryContainer,
    onSecondaryContainer: MD3DarkTheme.colors.onSecondaryContainer,
    tertiary: MD3DarkTheme.colors.tertiary,
    onTertiary: MD3DarkTheme.colors.onTertiary,
    tertiaryContainer: MD3DarkTheme.colors.tertiaryContainer,
    onTertiaryContainer: MD3DarkTheme.colors.onTertiaryContainer,
    error: MD3DarkTheme.colors.error,
    onError: MD3DarkTheme.colors.onError,
    errorContainer: MD3DarkTheme.colors.errorContainer,
    onErrorContainer: MD3DarkTheme.colors.onErrorContainer,
    background: MD3DarkTheme.colors.background,
    onBackground: MD3DarkTheme.colors.onBackground,
    surface: MD3DarkTheme.colors.surface,
    onSurface: MD3DarkTheme.colors.onSurface,
    surfaceVariant: MD3DarkTheme.colors.surfaceVariant,
    onSurfaceVariant: MD3DarkTheme.colors.onSurfaceVariant,
    surfaceTint: 'transparent',
    inverseSurface: MD3DarkTheme.colors.inverseSurface,
    inverseOnSurface: MD3DarkTheme.colors.inverseOnSurface,
    inversePrimary: MD3DarkTheme.colors.inversePrimary,
    shadow: MD3DarkTheme.colors.shadow,
    scrim: MD3DarkTheme.colors.scrim,
  },
  roundness: 8,
};

// 全局 TextInput 默认配置
export const textInputTheme = {
  colors: {
    primary: 'transparent',      // 焦点时边框颜色
    underlineColor: 'transparent',  // 非焦点时下划线颜色
    outlineColor: 'transparent',    // 非焦点时边框颜色
    activeUnderlineColor: 'transparent', // 焦点时下划线颜色
    activeOutlineColor: 'transparent',   // 焦点时边框颜色
  },
};

// 全局 Button 默认配置 - 移除白色边框
export const buttonTheme = {
  colors: {
    primary: 'transparent',      // 边框颜色
    outline: 'transparent',       // outlined 模式边框颜色
    surfaceVariant: 'transparent', // 表面颜色
    onSurfaceVariant: 'transparent', // 表面上的文字颜色
  },
  roundness: 8,
  // Windows 平台专用配置
  ...(isWindows && {
    disableFocusRing: true,
  }),
};

// Windows 平台 Button 专用主题
export const windowsButtonTheme = {
  ...buttonTheme,
  style: {
    borderWidth: 0,
    borderColor: 'transparent',
    // Windows 焦点边框
    focusRingColor: 'transparent',
  },
};

/**
 * Jest 测试环境配置
 * Mock 原生模块以避免测试错误
 */

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }) => children,
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const View = require('react-native').View;
  const React = require('react');
  
  const SafeAreaConsumer = ({ children }) => {
    if (typeof children === 'function') {
      return children({ top: 0, right: 0, bottom: 0, left: 0 });
    }
    return children || null;
  };
  
  // SafeAreaInsetsContext for react-native-paper
  const SafeAreaInsetsContext = React.createContext({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaConsumer: SafeAreaConsumer,
    SafeAreaInsetsContext: SafeAreaInsetsContext,
    useSafeAreaInsets: () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }),
    initialWindowMetrics: {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    },
  };
});

// Mock @react-navigation/native
jest.mock('@react-navigation/native', () => {
  const React = require('react');
  const View = require('react-native').View;
  
  return {
    ...jest.requireActual('@react-navigation/native'),
    NavigationContainer: ({ children }) => <View>{children}</View>,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    useFocusEffect: (callback) => callback(),
  };
});

// Mock @react-navigation/stack
jest.mock('@react-navigation/stack', () => {
  const React = require('react');
  const View = require('react-native').View;
  
  return {
    createStackNavigator: () => ({
      Navigator: ({ children }) => <View>{children}</View>,
      Screen: ({ children }) => <View>{children}</View>,
    }),
  };
});

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons', () => {
  const React = require('react');
  const Text = require('react-native').Text;
  return {
    createIconSet: () => Text,
    createIconSetFromFontello: () => Text,
  };
});

// Mock react-native-paper 的图标
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  const React = require('react');
  const Text = require('react-native').Text;
  return ({ name, ...props }) => <Text {...props}>{name}</Text>;
});

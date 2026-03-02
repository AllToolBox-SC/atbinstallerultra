/**
 * React Native Material 3 Template
 * 使用 react-native-paper 实现 Material Design 3
 * 使用 @react-navigation/stack (不需要 react-native-screens)
 */

import 'react-native-gesture-handler';
import { StatusBar, useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { CustomDarkTheme, CustomLightTheme } from './src/theme';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

  // 简单的 Navigation 主题适配
  const LightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: CustomLightTheme.colors.background,
      border: CustomLightTheme.colors.outline,
      text: CustomLightTheme.colors.onSurface,
      primary: CustomLightTheme.colors.primary,
      notification: CustomLightTheme.colors.primary,
    },
  };

  const DarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      background: CustomDarkTheme.colors.background,
      border: CustomDarkTheme.colors.outline,
      text: CustomDarkTheme.colors.onSurface,
      primary: CustomDarkTheme.colors.primary,
      notification: CustomDarkTheme.colors.primary,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primaryContainer,
            },
            headerTintColor: theme.colors.onPrimaryContainer,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Material 3 模板' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

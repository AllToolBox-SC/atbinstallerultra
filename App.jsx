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

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  // 简单的 Navigation 主题适配
  const LightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: MD3LightTheme.colors.background,
      border: MD3LightTheme.colors.outline,
      text: MD3LightTheme.colors.onSurface,
      primary: MD3LightTheme.colors.primary,
      notification: MD3LightTheme.colors.primary,
    },
  };

  const DarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      background: MD3DarkTheme.colors.background,
      border: MD3DarkTheme.colors.outline,
      text: MD3DarkTheme.colors.onSurface,
      primary: MD3DarkTheme.colors.primary,
      notification: MD3DarkTheme.colors.primary,
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

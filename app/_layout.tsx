import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ThemeProvider } from '@consensys/ds3'
import ExpoConstants from 'expo-constants';
import ThemedDrawer from '@/layout/ThemedDrawer';
import 'react-native-reanimated';
import "../global.css";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
      <ThemedDrawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      </ThemedDrawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

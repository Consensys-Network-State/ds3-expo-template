import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { ThemeProvider, useThemeColors, ModeToggle, ThemeSwitcher, Button, Text } from '@consensys/ds3'
import { PortalHost } from '@rn-primitives/portal';
import ExpoConstants from 'expo-constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

function ThemedDrawer() {
  const colors = useThemeColors();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.neutral1,
          borderBottomWidth: 1,
          borderBottomColor: colors.neutral6,
        },
        headerTintColor: colors.neutral12,
        drawerStyle: {
          backgroundColor: colors.neutral1,
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
        headerRight: () => (
          <View style={{ flexDirection: 'row', gap: 8, marginRight: 16, alignItems: 'center' }}>
            <ModeToggle />
            <ThemeSwitcher />
            <Button className="bg-primary-6" onPress={() => window.open('https://docs.expo.dev', '_blank')}>
              <Text>Docs</Text>
            </Button>
          </View>
        ),
      }}>
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
    </Drawer>
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
      <ThemedDrawer />
      <StatusBar style="auto" />
      <PortalHost />
    </ThemeProvider>
  );
}

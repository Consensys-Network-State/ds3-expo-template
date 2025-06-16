import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { ThemeProvider, useThemeColors } from '@consensys/ds3'
import { PortalHost } from '@rn-primitives/portal';
import ExpoConstants from 'expo-constants';

import { useColorScheme } from '@/hooks/useColorScheme';

function ThemedStack({ children }: { children: React.ReactNode }) {
  const colors = useThemeColors();

  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: colors.neutral1
      }
    }}>
      {children}
    </Stack>
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
      <ThemedStack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </ThemedStack>
      <StatusBar style="auto" />
      <PortalHost />
    </ThemeProvider>
  );
}

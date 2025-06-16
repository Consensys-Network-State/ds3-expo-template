import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { ThemeProvider, useThemeColors, ModeToggle, ThemeSwitcher, Button, Text, openLink } from '@consensys/ds3'
import { PortalHost } from '@rn-primitives/portal';
import ExpoConstants from 'expo-constants';
import { View } from 'react-native';
import { ExternalLink } from 'lucide-react-native';

function ThemedDrawer() {
  const colors = useThemeColors();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.neutral1,
          borderBottomWidth: 1,
          borderBottomColor: colors.neutral5,
        },
        headerTintColor: colors.neutral12,
        headerTitleAlign: 'left',
        drawerStyle: {
          backgroundColor: colors.neutral1,
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
        headerRight: () => (
          <View style={{ flexDirection: 'row', gap: 8, marginRight: 16, alignItems: 'center' }}>
            <ModeToggle />
            <ThemeSwitcher />
            <Button color="primary" onPress={() => openLink('https://github.com/Consensys-Network-State/ds3')}>
              <Button.Icon icon={ExternalLink} />
              <Button.Text>Docs</Button.Text>
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

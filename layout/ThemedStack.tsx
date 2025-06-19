import { useThemeColors } from '@consensys/ds3'
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import ThemeControl from '@/layout/ThemeControl';

interface ThemedStackProps {
  screenOptions?: Partial<NativeStackNavigationOptions>;
  children: React.ReactNode;
}

export default function ThemedStack({ screenOptions, children }: ThemedStackProps) {
  const colors = useThemeColors();

  const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: StyleSheet.create({
      header: {
        backgroundColor: colors.neutral1,
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral5,
      }
    }).header,
    headerTintColor: colors.neutral12,
    headerTitleAlign: 'left',
    contentStyle: {
      backgroundColor: colors.neutral1,
    },
    headerRight: () => (<ThemeControl />),
  };

  return (
    <Stack
      screenOptions={{
        ...defaultScreenOptions,
        ...screenOptions,
      }}
    >
      {children}
    </Stack>
  );
}
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useThemeColors } from '@consensys/ds3';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

interface ThemedTabsProps {
  screenOptions?: Partial<BottomTabNavigationOptions>;
  children: React.ReactNode;
}

export default function ThemedTabs({ screenOptions, children }: ThemedTabsProps) {
  const colors = useThemeColors();

  const defaultScreenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: colors.primary11,
    tabBarInactiveTintColor: colors.neutral11,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: colors.neutral1,
      borderTopColor: colors.neutral5,
      borderTopWidth: 1,
      ...Platform.select({
        ios: {
          position: 'absolute',
        },
        default: {},
      }),
    },
  };

  return (
    <Tabs
      screenOptions={{
        ...defaultScreenOptions,
        ...screenOptions,
      }}
    >
      {children}
    </Tabs>
  );
}

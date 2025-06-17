import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '@consensys/ds3';

export default function TabBarBackground() {
  const colors = useThemeColors();
  
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: colors.neutral1 }
      ]}
    />
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
} 
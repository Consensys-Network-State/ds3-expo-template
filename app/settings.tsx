import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeToggle, ThemeSwitcher } from '@consensys/ds3';

export default function SettingsScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <ThemedText type="title">Settings</ThemedText>
      
      <View style={{ marginTop: 24, gap: 16 }}>
        <ThemedText type="subtitle">Appearance</ThemedText>
        
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <ThemedText>Mode:</ThemedText>
          <ThemeToggle />
        </View>

        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <ThemedText>Theme:</ThemedText>
          <ThemeSwitcher />
        </View>
      </View>
    </ThemedView>
  );
} 
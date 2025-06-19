import React from 'react';
import { ThemedTabs } from '@/components/ThemedTabs';
import { Icon } from '@consensys/ds3';
import { Code, Home } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <ThemedTabs>
      <ThemedTabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon icon={Home} stroke={color} className="w-20 h-20" />,
        }}
      />
      <ThemedTabs.Screen
        name="+not-found"
        options={{
          title: '404',
          tabBarIcon: ({ color }) => <Icon icon={Code} stroke={color} className="w-20 h-20" />,
        }}
      />
    </ThemedTabs>
  );
}

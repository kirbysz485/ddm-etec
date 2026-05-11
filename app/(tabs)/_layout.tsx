import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Eteec',
          tabBarIcon: ({ color }) => ( <AntDesign name="bank" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="primeiro"
        options={{
          title: 'Primeiro',
        tabBarIcon: ({ color }) => ( <AntDesign name="aliwangwang" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="segundo"
        options={{
          title: 'Segundo',
        tabBarIcon: ({ color }) => ( <AntDesign name="alipay-circle" size={24} color={color} />)
        }}
      />
        <Tabs.Screen
        name="terceiro"
        options={{
          title: 'Terceiro',
        tabBarIcon: ({ color }) => ( <AntDesign name="crown" size={24} color={color} />)
        }}
      />
    </Tabs>
  );
}

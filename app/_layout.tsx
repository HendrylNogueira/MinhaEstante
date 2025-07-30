import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'MinhaEstante' }}
      />
      <Stack.Screen
        name="cadastro"
        options={{ title: 'MinhaEstante' }}
      />
      <Stack.Screen
        name="contato"
        options={{title: 'MinhaEstante'}}
      />
    </Stack>
  );
}

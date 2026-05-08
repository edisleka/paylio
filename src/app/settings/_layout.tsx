import { Stack } from 'expo-router'

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='billing-history' />
      <Stack.Screen name='payment-method' />
      <Stack.Screen name='personal-info' />
      <Stack.Screen name='security' />
      <Stack.Screen name='subscription' />
    </Stack>
  )
}

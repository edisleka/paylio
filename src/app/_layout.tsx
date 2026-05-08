import '@/root/global.css'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const InitialLayout = () => {
  return (
    <View className='flex-1 bg-background'>
      <StatusBar style='dark' />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='details/[id]' />
        <Stack.Screen name='settings' />
        <Stack.Screen name='notification/[id]' />
        <Stack.Screen name='checkout' />
        <Stack.Screen name='history' />
        <Stack.Screen name='notifications' />
        <Stack.Screen name='profile' />
        <Stack.Screen name='success' />
        <Stack.Screen name='upcoming' />
        <Stack.Screen name='index' />
        <Stack.Screen name='splash' />
      </Stack>
    </View>
  )
}

export default function RootLayout() {
  return <InitialLayout />
}

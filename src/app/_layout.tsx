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
        <Stack.Screen name='index' />
        <Stack.Screen name='splash' />
      </Stack>
    </View>
  )
}

export default function RootLayout() {
  return <InitialLayout />
}

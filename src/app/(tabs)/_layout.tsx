import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'

// Wrapping global tabbar routing override smoothly
const CustomTabBar = ({ navigation, state }: BottomTabBarProps) => {
  return (
    <View>
      <Text>CustomTabBar</Text>
    </View>
  )
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name='home' options={{ title: 'Home' }} />
      <Tabs.Screen name='dashboard' options={{ title: 'Dashboard' }} />
      <Tabs.Screen name='insights' options={{ title: 'Insights' }} />
      <Tabs.Screen name='subscriptions' options={{ title: 'Subscriptions' }} />
    </Tabs>
  )
}

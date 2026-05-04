import {
  BlurTargetProvider,
  CustomTabBar,
  TAB_SCREENS,
} from '@/components/tab-bar'
import { BlurTargetView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { useRef } from 'react'
import { StyleSheet, View } from 'react-native'

export default function TabsLayout() {
  const blurTargetRef = useRef<View | null>(null)

  return (
    <BlurTargetProvider value={blurTargetRef}>
      <BlurTargetView ref={blurTargetRef} style={styles.fill}>
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          {TAB_SCREENS.map((screen) => (
            <Tabs.Screen
              key={screen.name}
              name={screen.name}
              options={{ title: screen.title }}
            />
          ))}
        </Tabs>
      </BlurTargetView>
    </BlurTargetProvider>
  )
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
})

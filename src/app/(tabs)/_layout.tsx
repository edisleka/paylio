import { COLORS } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurTargetView, BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { RefObject, useEffect, useRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

type IconName = React.ComponentProps<typeof Feather>['name']

const ICON_MAP: Record<string, IconName> = {
  home: 'home',
  dashboard: 'briefcase',
  insights: 'bar-chart-2',
  subscriptions: 'settings',
}

// Extracted sliding pill block guaranteeing precise absolute bounding perfectly
function SlidingIndicator({
  state,
  tabBarWidth,
  activeIndex,
}: {
  state: any
  tabBarWidth: number
  activeIndex: SharedValue<number>
}) {
  const tabWidth = tabBarWidth / state.routes.length

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // Slide natively targeting precise center of bounding box effectively securely
        { translateX: activeIndex.value * tabWidth + tabWidth / 2 - 24 },
      ],
    }
  })

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: 8, // Adjust purely for standard global horizontal constraints naturally
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: COLORS.primary,
        },
        animatedIndicatorStyle,
      ]}
    />
  )
}

// Extracted individual Item map mapping bounce physics accurately
function TabItem({
  iconName,
  isFocused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
  tabWidth,
}: {
  iconName: IconName
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
  accessibilityLabel?: string
  testID?: string
  tabWidth: number
}) {
  const iconScale = useSharedValue(isFocused ? 1.2 : 1)
  const translateY = useSharedValue(isFocused ? -3 : 0)

  useEffect(() => {
    if (isFocused) {
      iconScale.value = withTiming(1.3, {
        duration: 250,
        easing: Easing.out(Easing.ease),
      })
      translateY.value = withTiming(-2, {
        duration: 250,
        easing: Easing.out(Easing.ease),
      })
    } else {
      iconScale.value = withTiming(1, {
        duration: 250,
        easing: Easing.out(Easing.ease),
      })
      translateY.value = withTiming(0, {
        duration: 250,
        easing: Easing.out(Easing.ease),
      })
    }
  }, [isFocused])

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }, { translateY: translateY.value }],
    }
  })

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole='tab'
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      // android_ripple={{ color: 'rgba(255, 255, 255, 0.1)' }}
      style={{
        width: tabWidth,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.View style={animatedIconStyle}>
        <Feather
          size={24}
          name={iconName}
          color={isFocused ? COLORS.white : 'rgba(255, 255, 255, 0.45)'}
        />
      </Animated.View>
    </Pressable>
  )
}

// Wrapping global tabbar routing override smoothly
const CustomTabBar = ({
  navigation,
  state,
  descriptors,
  insets,
  blurTargetRef,
}: BottomTabBarProps & {
  blurTargetRef: RefObject<View | null>
}) => {
  const [tabBarWidth, setTabBarWidth] = useState(0)
  const activeIndex = useSharedValue(state.index)

  useEffect(() => {
    activeIndex.value = withTiming(state.index, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    })
  }, [state.index])

  return (
    <BlurView
      intensity={85}
      tint='dark'
      blurTarget={blurTargetRef}
      blurMethod='dimezisBlurView'
      onLayout={({ nativeEvent }) => setTabBarWidth(nativeEvent.layout.width)}
      style={{
        position: 'absolute',
        bottom: Math.max(insets.bottom, 24),
        left: 20,
        right: 20,
        borderRadius: 40,
        height: 64,
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.35,
        shadowRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        overflow: 'hidden', // Required for border radius masking properly over blur filters cleanly
      }}
    >
      {tabBarWidth > 0 && (
        <SlidingIndicator
          state={state}
          tabBarWidth={tabBarWidth - 16} // Subtract left+right pad cleanly
          activeIndex={activeIndex}
        />
      )}

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        const iconName = ICON_MAP[route.name] || 'settings'
        const innerWidth =
          tabBarWidth > 0 ? (tabBarWidth - 16) / state.routes.length : 0

        return (
          <TabItem
            key={route.key}
            iconName={iconName}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            tabWidth={innerWidth}
          />
        )
      })}
    </BlurView>
  )
}

export default function TabsLayout() {
  const blurTargetRef = useRef<View | null>(null)

  return (
    <BlurTargetView ref={blurTargetRef} style={{ flex: 1 }}>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <CustomTabBar {...props} blurTargetRef={blurTargetRef} />
        )}
      >
        <Tabs.Screen name='home' options={{ title: 'Home' }} />
        <Tabs.Screen name='dashboard' options={{ title: 'Dashboard' }} />
        <Tabs.Screen name='insights' options={{ title: 'Insights' }} />
        <Tabs.Screen name='subscription' options={{ title: 'Subscription' }} />
      </Tabs>
    </BlurTargetView>
  )
}

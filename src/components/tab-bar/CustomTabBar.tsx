import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { SlidingIndicator } from './SlidingIndicator'
import { TabBarBackground } from './TabBarBackground'
import { TabItem } from './TabItem'
import { getIconForRoute } from './config'
import {
  INDICATOR_ANIMATION_DURATION,
  TAB_BAR_HORIZONTAL_MARGIN,
  TAB_BAR_PADDING_X,
} from './constants'

const PADDING_X_TOTAL = TAB_BAR_PADDING_X * 2

export function CustomTabBar({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  const { width: windowWidth } = useWindowDimensions()
  const [tabBarWidth, setTabBarWidth] = useState(
    Math.max(0, windowWidth - TAB_BAR_HORIZONTAL_MARGIN * 2),
  )

  const activeIndex = useSharedValue(state.index)

  useEffect(() => {
    activeIndex.value = withTiming(state.index, {
      duration: INDICATOR_ANIMATION_DURATION,
      easing: Easing.out(Easing.cubic),
    })
  }, [activeIndex, state.index])

  const innerWidth = Math.max(0, tabBarWidth - PADDING_X_TOTAL)
  const tabWidth = innerWidth / state.routes.length

  return (
    <TabBarBackground bottomInset={insets.bottom} onWidth={setTabBarWidth}>
      <SlidingIndicator
        state={state}
        innerWidth={innerWidth}
        activeIndex={activeIndex}
      />

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

        return (
          <TabItem
            key={route.key}
            iconName={getIconForRoute(route.name)}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            tabWidth={tabWidth}
          />
        )
      })}
    </TabBarBackground>
  )
}

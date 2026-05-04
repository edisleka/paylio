import { COLORS } from '@/constants/theme'
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Animated, {
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { INDICATOR_SIZE, TAB_BAR_PADDING_X } from './constants'

interface SlidingIndicatorProps {
  state: BottomTabBarProps['state']
  innerWidth: number
  activeIndex: SharedValue<number>
}

export function SlidingIndicator({
  state,
  innerWidth,
  activeIndex,
}: SlidingIndicatorProps) {
  const tabWidth = innerWidth / state.routes.length

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          activeIndex.value * tabWidth + tabWidth / 2 - INDICATOR_SIZE / 2,
      },
    ],
  }))

  return <Animated.View style={[styles.indicator, animatedStyle]} />
}

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: TAB_BAR_PADDING_X,
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    backgroundColor: COLORS.primary,
  },
})

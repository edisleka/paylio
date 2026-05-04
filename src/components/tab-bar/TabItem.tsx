import { COLORS } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'

import {
  FOCUSED_SCALE,
  FOCUSED_TRANSLATE_Y,
  ICON_ANIMATION_DURATION,
  ICON_INACTIVE_COLOR,
  ICON_SIZE,
  TAB_BAR_HEIGHT,
  UNFOCUSED_SCALE,
  UNFOCUSED_TRANSLATE_Y,
} from './constants'
import type { IconName } from './config'

interface TabItemProps {
  iconName: IconName
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
  accessibilityLabel?: string
  testID?: string
  tabWidth: number
}

export function TabItem({
  iconName,
  isFocused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
  tabWidth,
}: TabItemProps) {
  const iconScale = useDerivedValue(() =>
    withTiming(isFocused ? FOCUSED_SCALE : UNFOCUSED_SCALE, {
      duration: ICON_ANIMATION_DURATION,
      easing: Easing.out(Easing.ease),
    }),
  )

  const translateY = useDerivedValue(() =>
    withTiming(isFocused ? FOCUSED_TRANSLATE_Y : UNFOCUSED_TRANSLATE_Y, {
      duration: ICON_ANIMATION_DURATION,
      easing: Easing.out(Easing.ease),
    }),
  )

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }, { translateY: translateY.value }],
  }))

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole='tab'
      accessibilityState={{ selected: isFocused }}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.pressable, { width: tabWidth }]}
    >
      <Animated.View style={animatedIconStyle}>
        <Feather
          size={ICON_SIZE}
          name={iconName}
          color={isFocused ? COLORS.white : ICON_INACTIVE_COLOR}
        />
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    height: TAB_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

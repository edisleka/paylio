import { BlurView } from 'expo-blur'
import { type ReactNode } from 'react'
import { type LayoutChangeEvent, StyleSheet } from 'react-native'

import { useBlurTarget } from './BlurTargetContext'
import {
  BLUR_INTENSITY,
  BLUR_METHOD,
  BLUR_TINT,
  SHADOW_COLOR,
  SHADOW_OFFSET,
  SHADOW_OPACITY,
  SHADOW_RADIUS,
  TAB_BAR_BORDER_RADIUS,
  TAB_BAR_BOTTOM_OFFSET,
  TAB_BAR_ELEVATION,
  TAB_BAR_HEIGHT,
  TAB_BAR_HORIZONTAL_MARGIN,
  TAB_BAR_PADDING_X,
} from './constants'

interface TabBarBackgroundProps {
  bottomInset: number
  onWidth: (width: number) => void
  children: ReactNode
}

export function TabBarBackground({
  bottomInset,
  onWidth,
  children,
}: TabBarBackgroundProps) {
  const blurTargetRef = useBlurTarget()

  const handleLayout = (event: LayoutChangeEvent) => {
    onWidth(event.nativeEvent.layout.width)
  }

  return (
    <BlurView
      intensity={BLUR_INTENSITY}
      tint={BLUR_TINT}
      blurTarget={blurTargetRef}
      blurMethod={BLUR_METHOD}
      onLayout={handleLayout}
      style={[
        styles.bar,
        { bottom: Math.max(bottomInset, TAB_BAR_BOTTOM_OFFSET) },
      ]}
    >
      {children}
    </BlurView>
  )
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: TAB_BAR_HORIZONTAL_MARGIN,
    right: TAB_BAR_HORIZONTAL_MARGIN,
    height: TAB_BAR_HEIGHT,
    borderRadius: TAB_BAR_BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: TAB_BAR_PADDING_X,
    elevation: TAB_BAR_ELEVATION,
    shadowColor: SHADOW_COLOR,
    shadowOffset: SHADOW_OFFSET,
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
    overflow: 'hidden',
  },
})

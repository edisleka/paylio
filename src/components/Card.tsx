import React from 'react'
import { View, ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'

export interface CardProps extends ViewProps {
  className?: string
}

export const Card = ({ className = '', style, ...props }: CardProps) => {
  return (
    <View
      className={`bg-card rounded-2xl p-6 shadow-sm shadow-black/5 border border-borderLight ${className}`}
      style={style}
      {...props}
    />
  )
}

export const AnimatedCard = Animated.createAnimatedComponent(Card)

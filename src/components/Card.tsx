import React from 'react'
import { View, ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'

export interface CardProps extends ViewProps {
  className?: string
}

export const Card = React.forwardRef<View, CardProps>(
  ({ className = '', style, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={`bg-card rounded-2xl p-6 shadow-sm shadow-black/5 border border-borderLight ${className}`}
        style={style}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export const AnimatedCard = Animated.createAnimatedComponent(Card)

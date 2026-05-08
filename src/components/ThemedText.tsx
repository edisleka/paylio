import React from 'react'
import { Text, TextProps } from 'react-native'

export type ThemedTextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'bodySmall'
  | 'caption'

export interface ThemedTextProps extends TextProps {
  variant?: ThemedTextVariant
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'brand'
}

export const ThemedText = ({
  variant = 'body',
  color = 'primary',
  className = '',
  style,
  ...props
}: ThemedTextProps) => {
  // Define base styles for different variants using exact tailwind classes where possible
  // Fallback to React Native styles for dynamic theme colors if needed (though global.css should handle it if class names match)
  const getVariantStyles = () => {
    switch (variant) {
      case 'heading1':
        return 'text-3xl font-bold tracking-tight'
      case 'heading2':
        return 'text-2xl font-bold tracking-tight'
      case 'heading3':
        return 'text-xl font-bold'
      case 'title':
        return 'text-lg font-bold leading-tight'
      case 'subtitle':
        return 'text-base font-semibold'
      case 'body':
        return 'text-base font-normal'
      case 'bodySmall':
        return 'text-sm font-normal'
      case 'caption':
        return 'text-xs font-medium'
      default:
        return 'text-base'
    }
  }

  // Map to the theme variables from our NativeWind setup
  // "text-text" is primary, "text-textSecondary" is secondary, etc.
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'text-text' // defined in global.css as --theme-text
      case 'secondary':
        return 'text-textSecondary' // --theme-text-secondary
      case 'tertiary':
        return 'text-textTertiary' // --theme-text-tertiary
      case 'muted':
        return 'text-textMuted' // --theme-text-muted
      case 'brand':
        return 'text-primary' // The brand primary color
      default:
        return 'text-text'
    }
  }

  const combinedClassName =
    `${getVariantStyles()} ${getColorClasses()} ${className}`.trim()

  // We can pass a style override if needed, but classes should handle NativeWind variables well
  return <Text className={combinedClassName} style={[style]} {...props} />
}

export default ThemedText

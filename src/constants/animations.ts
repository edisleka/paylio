import {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated'

// Apple-like swift, elegant spring physics
const SPRING_CONFIG = {
  damping: 14,
  stiffness: 140,
  mass: 0.8,
}

export const ANIMATION = {
  fadeInDown: (delay: number = 0) =>
    FadeInDown.delay(delay)
      .springify()
      .damping(SPRING_CONFIG.damping)
      .stiffness(SPRING_CONFIG.stiffness)
      .mass(SPRING_CONFIG.mass),

  fadeInUp: (delay: number = 0) =>
    FadeInUp.delay(delay)
      .springify()
      .damping(SPRING_CONFIG.damping)
      .stiffness(SPRING_CONFIG.stiffness)
      .mass(SPRING_CONFIG.mass),

  fadeInRight: (delay: number = 0) =>
    FadeInRight.delay(delay)
      .springify()
      .damping(SPRING_CONFIG.damping)
      .stiffness(SPRING_CONFIG.stiffness)
      .mass(SPRING_CONFIG.mass),

  fadeIn: (delay: number = 0, duration: number = 400) =>
    // Standard fade without spring translation, duration is valid here!
    FadeIn.delay(delay).duration(duration),
}

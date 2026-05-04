import { createContext, useContext, type RefObject } from 'react'
import { type View } from 'react-native'

type BlurTargetRef = RefObject<View | null>

const BlurTargetContext = createContext<BlurTargetRef | null>(null)

export const BlurTargetProvider = BlurTargetContext.Provider

export function useBlurTarget(): BlurTargetRef {
  const ref = useContext(BlurTargetContext)
  if (!ref) {
    throw new Error(
      'useBlurTarget must be used inside a <BlurTargetProvider>. ' +
        'Wrap the tab bar tree with BlurTargetProvider and a BlurTargetView.',
    )
  }
  return ref
}

import NotificationBell from '@/components/NotificationBell'
import ThemedText from '@/components/ThemedText'
import { COLORS } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

interface CommonHeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  avatarUri?: string
  showAvatar?: boolean
  showNotification?: boolean
}

const CommonHeader = ({
  title,
  showBack = true,
  onBack,
  avatarUri = 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  showAvatar = true,
  showNotification = true,
}: CommonHeaderProps) => {
  const router = useRouter()
  const handleBack = () => (onBack ? onBack() : router?.back())
  return (
    <Animated.View
      entering={FadeIn.duration(400)}
      className='flex-row items-center justify-between px-6 py-1 z-50 bg-background'
    >
      {/* Left - Back button & Title */}
      <View className='flex-row items-center gap-3'>
        {showBack && (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityLabel='Go back'
            accessibilityHint='Navigates to the previous screen'
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            activeOpacity={0.7}
            onPress={handleBack}
            className='-ml-2 p-2'
          >
            <View className='w-10 h-10 rounded-full items-center justify-center border border-border bg-card'>
              <MaterialIcons
                name='arrow-back-ios'
                size={18}
                color={COLORS.textSecondary}
                style={{ marginLeft: 6 }}
              />
            </View>
          </TouchableOpacity>
        )}
        <ThemedText variant='heading3' color='secondary'>
          {title}
        </ThemedText>
      </View>
      {/* Right - Notification or Avatar */}
      <View className='flex-row items-center'>
        {showNotification ? (
          <NotificationBell />
        ) : showAvatar ? (
          <TouchableOpacity activeOpacity={0.85}>
            <View className='w-10 h-10 rounded-full overflow-hidden border border-border'>
              <Image
                source={{ uri: avatarUri }}
                className='w-full h-full'
                resizeMode='cover'
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View className='w-10 h-10' />
        )}
      </View>
    </Animated.View>
  )
}

export default CommonHeader

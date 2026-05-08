import { COLORS } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { usePathname, useRouter } from 'expo-router'
import { Image, Pressable, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import Logo from './Logo'
import NotificationBell from './NotificationBell'
import ThemedText from './ThemedText'

interface HomeHeaderProps {
  name?: string
  greeting?: string
  avatarUri?: string
  onAvatarPress?: () => void
}

export default function HomeHeader({
  name = 'Paylio',
  greeting = 'Welcome back,',
  avatarUri = 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  onAvatarPress,
}: HomeHeaderProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Animated.View
      entering={FadeIn.duration(850)}
      className='flex-row items-center justify-between px-5 py-1 z-50 bg-background'
    >
      {/* left side */}
      <Pressable
        className='flex-row items-center gap-3'
        onPress={onAvatarPress}
      >
        <View className='w-12 h-12 rounded-full overflow-hidden items-center justify-center bg-card border-border'>
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className='w-full h-full'
              resizeMode='cover'
            />
          ) : (
            <Logo size={28} />
          )}
        </View>
        <View>
          <ThemedText variant='caption' color='tertiary'>
            {greeting}
          </ThemedText>
          <ThemedText variant='heading2' color='secondary'>
            {name}
          </ThemedText>
        </View>
      </Pressable>
      {/* Right side */}
      <View className='flex-row items-center gap-2'>
        <NotificationBell />
        {pathname !== '/settings' && (
          <Pressable
            onPress={() => router.push('/profile')}
            className='w-10 h-10 items-center justify-center shadow-sm'
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 24,
              shadowColor: 'rgba(0,0,0,0.05)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <MaterialIcons name='person' size={22} color={COLORS.primary} />
          </Pressable>
        )}
      </View>
    </Animated.View>
  )
}

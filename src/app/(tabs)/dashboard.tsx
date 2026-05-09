import { Card } from '@/components/Card'
import HomeHeader from '@/components/HomeHeader'
import { ThemedText } from '@/components/ThemedText'
import { COLORS } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import type { ComponentProps } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNFSafeAreaView)

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name']

interface UpcomingItem {
  title: string
  subtitle: string
  price: string
  date: string
  iconName: MaterialIconName
  cardBgColor: string
  iconBgClass: string
  iconColor: string
}

interface SubscriptionItem {
  title: string
  subtitle: string
  price: string
  lastPaid: string
  iconName: MaterialIconName
}

const UPCOMING_ITEMS: readonly UpcomingItem[] = [
  {
    title: 'Notion AI',
    subtitle: 'Personal Pro Plan',
    price: '$10.00',
    date: 'JUL 12',
    iconName: 'edit-note',
    cardBgColor: COLORS.white,
    iconBgClass: 'bg-cardTertiary',
    iconColor: COLORS.textSecondary,
  },
  {
    title: 'Dropbox',
    subtitle: 'Family Storage',
    price: '$19.99',
    date: 'JUL 15',
    iconName: 'cloud',
    cardBgColor: COLORS.successBackground,
    iconBgClass: 'bg-successBackground',
    iconColor: COLORS.successDark,
  },
  {
    title: 'Figma',
    subtitle: 'Organization',
    price: '$45.00',
    date: 'JUL 18',
    iconName: 'token',
    cardBgColor: COLORS.insightIconBg1,
    iconBgClass: 'bg-dashTokenBg',
    iconColor: COLORS.dashTokenText,
  },
]

const SUBSCRIPTIONS: readonly SubscriptionItem[] = [
  {
    title: 'Spotify Premium',
    subtitle: 'Individual • Monthly',
    price: '$9.99',
    lastPaid: 'Last paid Jun 24',
    iconName: 'music-note',
  },
  {
    title: 'Netflix',
    subtitle: '4K UHD • Monthly',
    price: '$22.99',
    lastPaid: 'Last paid Jun 20',
    iconName: 'movie',
  },
  {
    title: 'Equinox Gym',
    subtitle: 'All Club Access • Monthly',
    price: '$285.00',
    lastPaid: 'Last paid Jun 15',
    iconName: 'fitness-center',
  },
]

function UpcomingCard({
  title,
  subtitle,
  price,
  date,
  iconName,
  cardBgColor,
  iconBgClass,
  iconColor,
}: UpcomingItem) {
  return (
    <Card className='w-64 rounded-xl p-6' style={{ backgroundColor: cardBgColor }}>
      <View className='flex-row justify-between items-start mb-8'>
        <View
          className={`w-12 h-12 ${iconBgClass} rounded-md items-center justify-center`}
        >
          <MaterialIcons name={iconName} size={28} color={iconColor} />
        </View>
        <View className='bg-borderSecondary px-2 py-1 rounded-full'>
          <ThemedText
            variant='caption'
            color='tertiary'
            className='text-[10px] font-bold'
          >
            {date}
          </ThemedText>
        </View>
      </View>
      <View className='gap-1'>
        <ThemedText
          variant='title'
          color='secondary'
          className='font-semibold text-lg'
        >
          {title}
        </ThemedText>
        <ThemedText variant='caption' color='tertiary'>
          {subtitle}
        </ThemedText>
      </View>
      <View className='mt-4 flex-row justify-between items-center'>
        <ThemedText variant='body' color='secondary' className='font-bold'>
          {price}
        </ThemedText>
        <MaterialIcons
          name='arrow-forward-ios'
          size={16}
          color={COLORS.primaryLight}
        />
      </View>
    </Card>
  )
}

function SubscriptionListItem({
  title,
  subtitle,
  price,
  lastPaid,
  iconName,
}: SubscriptionItem) {
  return (
    <Card
      className='rounded-xl p-5 flex-row items-center justify-between shadow-sm'
      style={{
        backgroundColor: '#ffffff',
        borderColor: COLORS.borderLight,
        shadowColor: 'rgba(0,0,0,0.05)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 2,
      }}
    >
      <View className='flex-row items-center gap-4'>
        <View
          className='w-14 h-14 rounded-full flex items-center justify-center'
          style={{ backgroundColor: `${COLORS.primary}15` }}
        >
          <MaterialIcons name={iconName} size={26} color={COLORS.primary} />
        </View>
        <View>
          <ThemedText
            variant='bodySmall'
            color='secondary'
            className='font-semibold'
          >
            {title}
          </ThemedText>
          <ThemedText variant='caption' color='tertiary'>
            {subtitle}
          </ThemedText>
        </View>
      </View>
      <View className='items-end'>
        <ThemedText variant='body' color='secondary' className='font-bold'>
          {price}
        </ThemedText>
        <ThemedText
          variant='caption'
          color='tertiary'
          className='text-[10px]'
        >
          {lastPaid}
        </ThemedText>
      </View>
    </Card>
  )
}

export default function Dashboard() {
  const router = useRouter()
  return (
    <SafeAreaView
      edges={['top']}
      className='flex-1'
      style={{ backgroundColor: COLORS.background }}
    >
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        <View className='px-6 gap-10 mt-4'>
          {/* Summary Card */}
          <Card
            className='p-8 items-center relative overflow-hidden'
            style={{
              backgroundColor: COLORS.white,
              shadowColor: 'rgba(0,0,0,0.05)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 8,
              borderWidth: 0,
            }}
          >
            <View
              className='absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 opacity-10 rounded-full'
              style={{ backgroundColor: COLORS.primaryLight }}
            />
            <ThemedText
              variant='caption'
              color='tertiary'
              className='tracking-wide uppercase mb-2'
            >
              TOTAL MONTHLY SPEND
            </ThemedText>
            <View className='flex-row items-start'>
              <ThemedText variant='heading3' className='mt-2 text-dashTextDk'>
                $
              </ThemedText>
              <ThemedText
                variant='heading1'
                color='secondary'
                className='text-5xl'
              >
                1,248
              </ThemedText>
              <ThemedText variant='heading3' color='secondary' className='mt-2'>
                .50
              </ThemedText>
            </View>
            <View className='mt-6 flex-row gap-3'>
              <View className='px-4 py-2 bg-successBackground rounded-full flex-row items-center gap-2'>
                <MaterialIcons
                  name='trending-down'
                  size={16}
                  color={COLORS.successDark}
                />
                <ThemedText
                  variant='caption'
                  className='font-semibold text-successDark'
                >
                  4.2% lower than June
                </ThemedText>
              </View>
            </View>
          </Card>
          {/* Subscription Horizontal Section */}
          <View className='gap-6'>
            <View className='flex-row justify-between items-end'>
              <ThemedText variant='heading3' color='secondary'>
                Upcoming
              </ThemedText>
              <TouchableOpacity
                accessibilityRole='button'
                accessibilityLabel='See all upcoming subscriptions'
                accessibilityHint='Opens the Upcoming screen'
                onPress={() => router.push('/upcoming')}
              >
                <ThemedText
                  variant='bodySmall'
                  color='brand'
                  className='font-semibold'
                >
                  See all
                </ThemedText>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className='overflow-hidden'
              contentContainerStyle={{ gap: 16 }}
            >
              {UPCOMING_ITEMS.map((item) => (
                <UpcomingCard key={item.title} {...item} />
              ))}
            </ScrollView>
          </View>
          {/* Alll Subscriptions List */}
          <View className='gap-6 pb-8'>
            <ThemedText variant='heading3' color='secondary'>
              All Subscriptions
            </ThemedText>
            <View className='gap-4'>
              {SUBSCRIPTIONS.map((item) => (
                <SubscriptionListItem key={item.title} {...item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

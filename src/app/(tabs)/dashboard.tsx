import { Card } from '@/components/Card'
import HomeHeader from '@/components/HomeHeader'
import { ThemedText } from '@/components/ThemedText'
import { COLORS } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNFSafeAreaView)
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
              <TouchableOpacity onPress={() => router.push('/upcoming')}>
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
              {/* Card 1: Notion */}
              <Card
                className='w-64 rounded-xl p-6'
                style={{ backgroundColor: COLORS.white }}
              >
                <View className='flex-row justify-between items-start mb-8'>
                  <View className='w-12 h-12 bg-cardTertiary rounded-md items-center justify-center'>
                    <MaterialIcons
                      name='edit-note'
                      size={28}
                      color={COLORS.textSecondary}
                    />
                  </View>
                  <View className='bg-borderSecondary px-2 py-1 rounded-full'>
                    <ThemedText
                      variant='caption'
                      color='tertiary'
                      className='text-[10px] font-bold'
                    >
                      JUL 12
                    </ThemedText>
                  </View>
                </View>
                <View className='gap-1'>
                  <ThemedText
                    variant='title'
                    color='secondary'
                    className='font-semibold text-lg'
                  >
                    Notion AI
                  </ThemedText>
                  <ThemedText variant='caption' color='tertiary'>
                    Personal Pro Plan
                  </ThemedText>
                </View>
                <View className='mt-4 flex-row justify-between items-center'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $10.00
                  </ThemedText>
                  <MaterialIcons
                    name='arrow-forward-ios'
                    size={16}
                    color={COLORS.primaryLight}
                  />
                </View>
              </Card>
              {/* Card 2: Dropbox */}
              <Card
                className='w-64 rounded-xl p-6'
                style={{ backgroundColor: COLORS.successBackground }}
              >
                <View className='flex-row justify-between items-start mb-8'>
                  <View className='w-12 h-12 bg-successBackground rounded-md items-center justify-center'>
                    <MaterialIcons
                      name='cloud'
                      size={28}
                      color={COLORS.successDark}
                    />
                  </View>
                  <View className='bg-borderSecondary px-2 py-1 rounded-full'>
                    <ThemedText
                      variant='caption'
                      color='tertiary'
                      className='text-[10px] font-bold'
                    >
                      JUL 15
                    </ThemedText>
                  </View>
                </View>
                <View className='gap-1'>
                  <ThemedText
                    variant='title'
                    color='secondary'
                    className='font-semibold text-lg'
                  >
                    Dropbox
                  </ThemedText>
                  <ThemedText variant='caption' color='tertiary'>
                    Family Storage
                  </ThemedText>
                </View>
                <View className='mt-4 flex-row justify-between items-center'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $19.99
                  </ThemedText>
                  <MaterialIcons
                    name='arrow-forward-ios'
                    size={16}
                    color={COLORS.primaryLight}
                  />
                </View>
              </Card>

              {/* Card 3: Figma */}
              <Card
                className='w-64 rounded-xl p-6'
                style={{ backgroundColor: COLORS.insightIconBg1 }}
              >
                <View className='flex-row justify-between items-start mb-8'>
                  <View className='w-12 h-12 bg-dashTokenBg rounded-md items-center justify-center'>
                    <MaterialIcons
                      name='token'
                      size={28}
                      color={COLORS.dashTokenText}
                    />
                  </View>
                  <View className='bg-borderSecondary px-2 py-1 rounded-full'>
                    <ThemedText
                      variant='caption'
                      color='tertiary'
                      className='text-[10px] font-bold'
                    >
                      JUL 18
                    </ThemedText>
                  </View>
                </View>
                <View className='gap-1'>
                  <ThemedText
                    variant='title'
                    color='secondary'
                    className='font-semibold text-lg'
                  >
                    Figma
                  </ThemedText>
                  <ThemedText variant='caption' color='tertiary'>
                    Organization
                  </ThemedText>
                </View>
                <View className='mt-4 flex-row justify-between items-center'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $45.00
                  </ThemedText>
                  <MaterialIcons
                    name='arrow-forward-ios'
                    size={16}
                    color={COLORS.primaryLight}
                  />
                </View>
              </Card>
            </ScrollView>
          </View>
          {/* Alll Subscriptions List */}
          <View className='gap-6 pb-8'>
            <ThemedText variant='heading3' color='secondary'>
              All Subscriptions
            </ThemedText>
            <View className='gap-4'>
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
                    <MaterialIcons
                      name='music-note'
                      size={26}
                      color={COLORS.primary}
                    />
                  </View>
                  <View>
                    <ThemedText
                      variant='bodySmall'
                      color='secondary'
                      className='font-semibold'
                    >
                      Spotify Premium
                    </ThemedText>
                    <ThemedText variant='caption' color='tertiary'>
                      Individual • Monthly
                    </ThemedText>
                  </View>
                </View>
                <View className='items-end'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $9.99
                  </ThemedText>
                  <ThemedText
                    variant='caption'
                    color='tertiary'
                    className='text-[10px]'
                  >
                    Last paid Jun 24
                  </ThemedText>
                </View>
              </Card>

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
                    <MaterialIcons
                      name='movie'
                      size={26}
                      color={COLORS.primary}
                    />
                  </View>
                  <View>
                    <ThemedText
                      variant='bodySmall'
                      color='secondary'
                      className='font-semibold'
                    >
                      Netflix
                    </ThemedText>
                    <ThemedText variant='caption' color='tertiary'>
                      4K UHD • Monthly
                    </ThemedText>
                  </View>
                </View>
                <View className='items-end'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $22.99
                  </ThemedText>
                  <ThemedText
                    variant='caption'
                    color='tertiary'
                    className='text-[10px]'
                  >
                    Last paid Jun 20
                  </ThemedText>
                </View>
              </Card>

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
                    <MaterialIcons
                      name='fitness-center'
                      size={26}
                      color={COLORS.primary}
                    />
                  </View>
                  <View>
                    <ThemedText
                      variant='bodySmall'
                      color='secondary'
                      className='font-semibold'
                    >
                      Equinox Gym
                    </ThemedText>
                    <ThemedText variant='caption' color='tertiary'>
                      All Club Access • Monthly
                    </ThemedText>
                  </View>
                </View>
                <View className='items-end'>
                  <ThemedText
                    variant='body'
                    color='secondary'
                    className='font-bold'
                  >
                    $285.00
                  </ThemedText>
                  <ThemedText
                    variant='caption'
                    color='tertiary'
                    className='text-[10px]'
                  >
                    Last paid Jun 15
                  </ThemedText>
                </View>
              </Card>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

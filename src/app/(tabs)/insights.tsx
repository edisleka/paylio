import { AnimatedCard } from '@/components/Card'
import HomeHeader from '@/components/HomeHeader'
import ThemedText from '@/components/ThemedText'
import { ANIMATION } from '@/constants/animations'
import { COLORS } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const InsightsScreen = () => {
  const router = useRouter()

  const chartData = [
    { day: 'Mon', value: 35, height: 'h-32', color: 'bg-text' },
    { day: 'Tue', value: 31, height: 'h-28', color: 'bg-text' },
    { day: 'Wed', value: 23, height: 'h-20', color: 'bg-text' },
    {
      day: 'Thr',
      value: 40,
      height: 'h-40',
      color: 'bg-primary',
      active: true,
    },
    { day: 'Fri', value: 34, height: 'h-32', color: 'bg-text' },
    { day: 'Sat', value: 21, height: 'h-20', color: 'bg-text' },
    { day: 'Sun', value: 24, height: 'h-24', color: 'bg-text' },
  ]
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
        <View className='px-6 mt-4 gap-6'>
          <View className='flex-row items-center justify-between'>
            <ThemedText variant='heading3' className='text-text'>
              Upcoming
            </ThemedText>
            <TouchableOpacity
              className='px-4 py-1.5 rounded-full border border-borderLight bg-cardSecondary'
              onPress={() => router.push('/upcoming')}
            >
              <ThemedText
                variant='bodySmall'
                className='text-textSecondary font-semibold'
              >
                View all
              </ThemedText>
            </TouchableOpacity>
          </View>
          {/* Bar Chart Card */}
          <AnimatedCard
            entering={ANIMATION.fadeInDown(100)}
            style={{
              backgroundColor: COLORS.insightBg,
              borderColor: COLORS.insightBorder,
            }}
          >
            <View className='relative h-52 justify-end mt-2'>
              {/* Background grid lines (Abosulte positioned) */}
              <View className='absolute inset-0 justify-between pb-8'>
                {[45, 35, 25, 5, 0].map((val, idx) => (
                  <View key={idx} className='flex-row items-center'>
                    <ThemedText
                      variant='caption'
                      className='text-[10px] text-insightTextMuted w-6 font-medium'
                    >
                      {val}
                    </ThemedText>
                    <View className='flex-1 border-t obrder-dashed border-insightDashed ml-2' />
                  </View>
                ))}
              </View>
              {/* Bars Row */}
              <View className='flex-row justify-between items-end pl-8'>
                {chartData.map((item, index) => (
                  <View key={index} className='items-center relative'>
                    {/* Active Tooltip */}
                    {item?.active && (
                      <View className='absolute -top-9 items-center z-10 w-12'>
                        <View className='bg-text px-2 py-1 rounded-md shadow-sm items-center justify-center'>
                          <ThemedText
                            variant='caption'
                            className='text-background font-bold text-[10px]'
                          >
                            ${item.value}
                          </ThemedText>
                        </View>
                        {/* Triangle pointing down */}
                        <View
                          className='w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text'
                          style={{ marginTop: -1 }}
                        />
                      </View>
                    )}
                    {/* The Bar */}
                    <View
                      className={`${item.height} w-3.5 rounded-full ${item.color}`}
                    />
                    <ThemedText
                      variant='caption'
                      className='text-insightTextMuted text-[10px] font-medium mt-3'
                    >
                      {item?.day}
                    </ThemedText>
                  </View>
                ))}
              </View>
            </View>
          </AnimatedCard>

          {/* Expenses Card */}
          <AnimatedCard
            entering={ANIMATION.fadeInDown(200)}
            className='p-5 flex-row justify-between items-center'
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.insightBorderAccent,
              shadowColor: 'rgba(0,0,0,0.05)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 8,
              borderWidth: 0,
            }}
          >
            <View>
              <ThemedText
                variant='title'
                className='font-bold text-text text-lg'
              >
                Expenses
              </ThemedText>
              <ThemedText
                variant='caption'
                className='text-textTertiary font-medium text-xs mt-1'
              >
                March 2026
              </ThemedText>
            </View>
            <View className='items-end'>
              <ThemedText
                variant='title'
                className='font-bold text-text text-lg'
              >
                -$424.63
              </ThemedText>
              <ThemedText
                variant='caption'
                className='text-textTertiary font-medium text-xs mt-1'
              >
                +12%
              </ThemedText>
            </View>
          </AnimatedCard>
          {/* History Section */}
          <View className='mt-2 gap-4'>
            <View className='flex-row items-center justify-between mb-2'>
              <ThemedText
                variant='heading3'
                className='font-bold text-xl text-text'
              >
                History
              </ThemedText>
              <TouchableOpacity
                className='px-4 py-1.5 rounded-full border border-borderLight bg-cardSecondary'
                onPress={() => router.push('/history')}
              >
                <ThemedText
                  variant='caption'
                  className='text-textSecondary font-semibold'
                >
                  View all
                </ThemedText>
              </TouchableOpacity>
            </View>

            {/* History Cards */}
            <AnimatedCard
              entering={ANIMATION.fadeInDown(300)}
              className='p-5 flex-row items-center justify-between shadow-sm mb-1'
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
                  className='w-14 h-14 rounded-full items-center justify-center'
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Feather name='sun' size={26} color={COLORS.primary} />
                </View>
                <View>
                  <ThemedText
                    variant='bodySmall'
                    color='secondary'
                    className='font-semibold text-lg'
                  >
                    Claude
                  </ThemedText>
                  <ThemedText
                    variant='caption'
                    color='tertiary'
                    className='font-medium text-xs mt-0.5'
                  >
                    June 25, 12:00
                  </ThemedText>
                </View>
              </View>
              <View className='items-end'>
                <ThemedText
                  variant='body'
                  color='secondary'
                  className='font-bold text-lg'
                >
                  $9.84
                </ThemedText>
                <ThemedText
                  variant='caption'
                  color='tertiary'
                  className='font-medium text-xs mt-0.5'
                >
                  per month
                </ThemedText>
              </View>
            </AnimatedCard>

            <AnimatedCard
              entering={ANIMATION.fadeInDown(400)}
              className='p-5 flex-row items-center justify-between shadow-sm'
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
                  className='w-14 h-14 rounded-full items-center justify-center'
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Feather name='aperture' size={26} color={COLORS.primary} />
                </View>
                <View>
                  <ThemedText
                    variant='bodySmall'
                    color='secondary'
                    className='font-semibold text-lg'
                  >
                    Canva
                  </ThemedText>
                  <ThemedText
                    variant='caption'
                    color='tertiary'
                    className='font-medium text-xs mt-0.5'
                  >
                    June 30, 16:00
                  </ThemedText>
                </View>
              </View>
              <View className='items-end'>
                <ThemedText
                  variant='body'
                  color='secondary'
                  className='font-bold text-lg'
                >
                  $43.89
                </ThemedText>
                <ThemedText
                  variant='caption'
                  color='tertiary'
                  className='font-medium text-xs mt-0.5'
                >
                  per month
                </ThemedText>
              </View>
            </AnimatedCard>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default InsightsScreen

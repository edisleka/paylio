import { AnimatedCard } from '@/components/Card'
import HomeHeader from '@/components/HomeHeader'
import ThemedText from '@/components/ThemedText'
import { ANIMATION } from '@/constants/animations'
import { COLORS } from '@/constants/theme'
import { AI_SUBSCRIPTIONS, STREAMING_SUBSCRIPTIONS } from '@/services/dummyData'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { useState } from 'react'
import {
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated from 'react-native-reanimated'

import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'
const SafeAreaView = styled(RNFSafeAreaView)

type Subscription = (typeof AI_SUBSCRIPTIONS)[number]

export default function Home() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<'AI' | 'Streaming'>('AI')

  const currentSubscriptions =
    activeCategory === 'AI' ? AI_SUBSCRIPTIONS : STREAMING_SUBSCRIPTIONS

  const ListHeader = () => {
    return (
      <View className='px-6 gap-8 mt-2'>
        {/* Main balance container */}
        <Animated.View
          entering={ANIMATION.fadeInDown(100)}
          className='p-6 rounded-[28px] shadow-sm relative overflow-hidden'
          style={{ backgroundColor: COLORS.textNav }}
        >
          {/* Decorative background */}
          <View className='absolute -right-16 -top-16 w-56 h-56 rounded-full border-24px border-white/5' />
          <View
            className='absolute -left-12 -bottom-12 w-48 h-48 rounded-full'
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          />
          <View
            className='absolute right-8 -bottom-6 w-32 h-32 rounded-full blur-xl'
            style={{ backgroundColor: COLORS.primary, opacity: 0.15 }}
          />
          {/* Top Header Row */}
          <View className='flex-row justify-between items-center mb-5'>
            <View className='flex-row items-center gap-2.5'>
              <View className='w-8 h-8 rounded-full bg-white/20 items-center justify-center'>
                <Feather name='pie-chart' size={14} color={COLORS.white} />
              </View>
              <ThemedText className='text-white/70 font-semibold text-xs tracking-widest uppercase'>
                Available Budget
              </ThemedText>
            </View>
            <View className='bg-white/15 px-3 py-1.5 rounded-full border border-white/10'>
              <ThemedText className='text-white font-bold text-[10px] tracking-widest'>
                USD
              </ThemedText>
            </View>
          </View>
          {/* Main Balance Row */}
          <View className='mb-6'>
            <View className='flex-row items-center'>
              <ThemedText className='text-white/80 text-5xl font-extrabold tracking-tight mr-1'>
                $
              </ThemedText>
              <ThemedText className='text-white text-5xl font-extrabold tracking-tight'>
                1,248.53
              </ThemedText>
            </View>
            <View className='flex-row items-center gap-2 mt-2'>
              <View className='flex-row items-center bg-successBackground/20 px-2 py-0.5 rounded-md gap-1'>
                <Feather
                  name='trending-up'
                  size={12}
                  color={COLORS.successBackground}
                />
                <ThemedText className='text-white font-bold text-xs'>
                  +11.4%
                </ThemedText>
              </View>
              <ThemedText className='text-white/80 text-xs font-medium'>
                vs last month
              </ThemedText>
            </View>
          </View>
          {/* Bottom Stats Row */}
          <View className='flex-row pt-5 border-t border-white/10 items-center'>
            <View className='flex-1'>
              <ThemedText className='text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1.5'>
                Monthly Spend
              </ThemedText>
              <ThemedText className='text-white font-bold text-[17px]'>
                $840.00
              </ThemedText>
            </View>
            <View className='h-10 w-px bg-white/10 mx-5' />
            <View className='flex-1'>
              <View className='flex-row items-center justify-between'>
                <View>
                  <ThemedText className='text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1.5'>
                    Safe to spend
                  </ThemedText>
                  <ThemedText
                    className='text-white font-bold text-[17px]'
                    style={{ color: COLORS.successBackground }}
                  >
                    $408.53
                  </ThemedText>
                </View>
                <View className='w-8 h-8 rounded-full bg-white/10 items-center justify-center'>
                  <Feather name='arrow-right' size={14} color={COLORS.white} />
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
        {/* Upcoming Expenses Section */}
        <View className='gap-4'>
          <View className='flex-row justify-between items-center'>
            <ThemedText variant='heading3' color='primary'>
              Upcoming
            </ThemedText>
            <Pressable
              onPress={() => router.push('/upcoming')}
              className='py-1.5 px-4 rounded-full border border-primary/20'
            >
              <ThemedText className='font-semibold' variant='caption'>
                View All
              </ThemedText>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            className='overflow-visible'
            contentContainerStyle={{ gap: 12 }}
            showsHorizontalScrollIndicator={false}
          >
            {/* Notion Card */}
            <AnimatedCard
              entering={ANIMATION.fadeInRight(200)}
              className='w-44 p-5 rounded-[20px] gap-4'
              style={{ backgroundColor: COLORS.white }}
            >
              <View className='flex-row items-start justify-between'>
                <View className='h-12 w-12 rounded-xl bg-cardSecondary items-center justify-center'>
                  <Feather name='box' size={22} color={COLORS.text} />
                </View>
                <View className='items-end'>
                  <ThemedText
                    className='font-bold'
                    variant='body'
                    color='primary'
                  >
                    $20.00
                  </ThemedText>
                  <ThemedText
                    className='font-medium'
                    variant='caption'
                    color='muted'
                  >
                    12 days left
                  </ThemedText>
                </View>
              </View>
              <ThemedText className='font-bold text-[15px]'>
                Notion Team
              </ThemedText>
            </AnimatedCard>
            {/* Dropbox Card */}
            <AnimatedCard
              entering={ANIMATION.fadeInRight(300)}
              className='w-[160px] p-5 rounded-[20px] gap-4'
              style={{ backgroundColor: COLORS.successBackground }}
            >
              <View className='flex-row items-start justify-between'>
                <View className='w-12 h-12 rounded-xl bg-cardSecondary items-center justify-center'>
                  <Feather name='layers' size={22} color={COLORS.text} />
                </View>
                <View className='items-end'>
                  <ThemedText
                    className='font-bold'
                    variant='body'
                    color='primary'
                  >
                    $10.00
                  </ThemedText>
                  <ThemedText
                    className='font-medium'
                    variant='caption'
                    color='muted'
                  >
                    32 days left
                  </ThemedText>
                </View>
              </View>
              <ThemedText className='font-bold text-[15px]' color='primary'>
                Dropbox
              </ThemedText>
            </AnimatedCard>
            {/* Netflix Card */}
            <AnimatedCard
              entering={ANIMATION.fadeInRight(400)}
              className='w-[160px] p-5 rounded-[20px] gap-4'
              style={{ backgroundColor: COLORS.warningBackground }}
            >
              <View className='flex-row items-start justify-between'>
                <View className='w-12 h-12 rounded-xl bg-cardSecondary items-center justify-center'>
                  <Feather name='youtube' size={22} color={COLORS.text} />
                </View>
                <View className='items-end'>
                  <ThemedText
                    className='font-bold'
                    variant='body'
                    color='primary'
                  >
                    $15.99
                  </ThemedText>
                  <ThemedText
                    className='font-medium'
                    variant='caption'
                    color='muted'
                  >
                    40 days left
                  </ThemedText>
                </View>
              </View>
              <ThemedText className='font-bold text-[15px]' color='primary'>
                Netflix
              </ThemedText>
            </AnimatedCard>
          </ScrollView>
        </View>
        {/* Category Segmentation */}
        <Animated.View
          entering={ANIMATION.fadeInDown(500)}
          className='flex-row items-center p-1.5 rounded-2xl'
          style={{
            backgroundColor: COLORS.card,
            borderWidth: 1,
            borderColor: COLORS.border,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveCategory('AI')}
            className='flex-1 py-3 items-center rounded-xl'
            style={{
              backgroundColor:
                activeCategory === 'AI' ? COLORS.text : 'transparent',
            }}
          >
            <ThemedText
              className='font-bold text-sm'
              style={{
                color:
                  activeCategory === 'AI'
                    ? COLORS.background
                    : COLORS.textMuted,
              }}
            >
              AI Hub
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveCategory('Streaming')}
            className='flex-1 py-3 items-center rounded-xl'
            style={{
              backgroundColor:
                activeCategory === 'Streaming' ? COLORS.text : 'transparent',
            }}
          >
            <ThemedText
              className='font-bold text-sm'
              style={{
                color:
                  activeCategory === 'Streaming'
                    ? COLORS.background
                    : COLORS.textMuted,
              }}
            >
              Streaming
            </ThemedText>
          </TouchableOpacity>
        </Animated.View>
        {/* Section Header */}
        <View className='flex-row justify-between items-center'>
          <ThemedText variant='heading3'>{activeCategory} Plans</ThemedText>
          <TouchableOpacity
            onPress={() => router.push('/subscription')}
            className='px-4 py-1.5 border border-borderLight rounded-full bg-white/20'
          >
            <ThemedText>View all</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderItem = ({
    item: sub,
    index,
  }: {
    item: Subscription
    index: number
  }) => {
    return (
      <Animated.View
        entering={ANIMATION.fadeInDown(300 + index * 100)}
        className='px-6'
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push(`/details/${sub.id}`)}
          className='flex-row items-center justify-between p-4 rounded-2xl'
          style={{ backgroundColor: sub.bg || sub.color }}
        >
          <View className='flex-row items-center gap-4'>
            <View className='w-14 h-14 bg-white/40 rounded-xl items-center justify-center shadow-sm'>
              {sub?.Logo ? (
                <sub.Logo size={28} />
              ) : (
                <Feather size={26} name={sub.icon as any} color={COLORS.text} />
              )}
            </View>
            <View>
              <ThemedText
                variant='title'
                className='leading-tight'
                color='primary'
                numberOfLines={1}
              >
                {sub.name === 'OpenAI ChatGPT Plus' ||
                sub.name === 'OpenAI ChatGPT'
                  ? 'Open AI'
                  : sub.name}
              </ThemedText>
              <ThemedText
                className='text-[11px] font-medium text-text/60'
                color='primary'
              >
                {new Date(sub.nextBillingDate).toLocaleDateString(undefined, {
                  month: 'long',
                  day: 'numeric',
                })}
                ,{' '}
                {new Date(sub.nextBillingDate).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </ThemedText>
            </View>
          </View>
          <View className='items-end gap-0.5 mt-1'>
            <ThemedText
              variant='title'
              className='leading-tight'
              color='primary'
            >
              ${sub.price.toFixed(2)}
            </ThemedText>
            <ThemedText
              className='text-[11px] font-medium text-text/60'
              color='primary'
            >
              per month
            </ThemedText>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView
      edges={['top']}
      className='flex-1 '
      style={{ backgroundColor: COLORS.background }}
    >
      <HomeHeader />
      <FlatList
        data={currentSubscriptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: 180, gap: 16 }}
        ItemSeparatorComponent={() => <View className='h-3' />}
      />
    </SafeAreaView>
  )
}

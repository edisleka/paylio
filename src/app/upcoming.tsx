import CommonHeader from '@/components/CommonHeader'
import ThemedText from '@/components/ThemedText'
import { ANIMATION } from '@/constants/animations'
import { COLORS } from '@/constants/theme'
import { AI_SUBSCRIPTIONS, STREAMING_SUBSCRIPTIONS } from '@/services/dummyData'
import { Subscription } from '@/types/dummyData.types'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { useMemo, useState } from 'react'
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNFSafeAreaView)

type Timeframe = 'all' | 'week' | 'month' | 'later'

interface UpcomingSubscription extends Subscription {
  daysLeft: number
}

const FILTERS: { id: Timeframe; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'week', label: 'This Week' },
  { id: 'month', label: 'This Month' },
  { id: 'later', label: 'Later' },
]

const startOfDay = (d: Date) => {
  const copy = new Date(d)
  copy.setHours(0, 0, 0, 0)
  return copy
}

const parseBillingDate = (value: string) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  return new Date(value)
}

const formatBillingDate = (iso: string) =>
  parseBillingDate(iso).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

const getDayLabel = (days: number) => {
  if (days < 0) return 'Overdue'
  if (days === 0) return 'Today'
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

const getAccent = (days: number) => {
  if (days <= 3)
    return { bg: '#FEE2E2', fg: COLORS.errorDark, label: 'Due soon' }
  if (days <= 14)
    return { bg: COLORS.warningBackground, fg: '#92400E', label: 'Upcoming' }
  return {
    bg: COLORS.successBackground,
    fg: COLORS.successDark,
    label: 'Scheduled',
  }
}

export default function Upcoming() {
  const router = useRouter()
  const [timeframe, setTimeframe] = useState<Timeframe>('all')

  const today = useMemo(() => startOfDay(new Date()), [])

  const upcoming: UpcomingSubscription[] = useMemo(() => {
    const all = [...AI_SUBSCRIPTIONS, ...STREAMING_SUBSCRIPTIONS]
    return all
      .filter((s) => s.status !== 'cancelled')
      .map((s) => {
        const billing = startOfDay(parseBillingDate(s.nextBillingDate))
        const diffMs = billing.getTime() - today.getTime()
        const daysLeft = Math.round(diffMs / (1000 * 60 * 60 * 24))
        return { ...s, daysLeft }
      })
      .filter((s) => s.daysLeft >= 0)
      .sort((a, b) => a.daysLeft - b.daysLeft)
  }, [today])

  const filtered = useMemo(() => {
    switch (timeframe) {
      case 'week':
        return upcoming.filter((s) => s.daysLeft <= 7)
      case 'month':
        return upcoming.filter((s) => s.daysLeft <= 30)
      case 'later':
        return upcoming.filter((s) => s.daysLeft > 30)
      default:
        return upcoming
    }
  }, [upcoming, timeframe])

  const stats = useMemo(() => {
    const monthSubs = upcoming.filter((s) => s.daysLeft <= 30)
    const monthTotal = monthSubs.reduce((sum, s) => sum + s.price, 0)
    const next = upcoming[0]
    return {
      monthTotal,
      monthCount: monthSubs.length,
      nextSub: next,
    }
  }, [upcoming])

  const ListHeader = () => (
    <View className='px-6 pt-2 gap-6'>
      {/* Hero summary card */}
      <Animated.View
        entering={ANIMATION.fadeInDown(60)}
        className='p-6 rounded-[28px] overflow-hidden relative'
        style={{ backgroundColor: COLORS.textNav }}
      >
        <View className='absolute -right-20 -top-20 w-60 h-60 rounded-full border-[24px] border-white/5' />
        <View
          className='absolute -left-12 -bottom-14 w-48 h-48 rounded-full'
          style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
        />
        <View
          className='absolute right-6 -bottom-4 w-32 h-32 rounded-full blur-xl'
          style={{ backgroundColor: COLORS.primary, opacity: 0.18 }}
        />

        <View className='flex-row items-center justify-between mb-5'>
          <View className='flex-row items-center gap-2.5'>
            <View className='w-8 h-8 rounded-full bg-white/15 items-center justify-center'>
              <Feather name='calendar' size={14} color={COLORS.white} />
            </View>
            <ThemedText className='text-white/70 font-semibold text-xs tracking-widest uppercase'>
              Due Within 30 Days
            </ThemedText>
          </View>
          <View className='bg-white/15 px-3 py-1.5 rounded-full border border-white/10'>
            <ThemedText className='text-white font-bold text-[10px] tracking-widest'>
              {stats.monthCount} ITEMS
            </ThemedText>
          </View>
        </View>

        <View className='flex-row items-end mb-6'>
          <ThemedText className='text-white/80 text-5xl font-extrabold tracking-tight mr-1'>
            $
          </ThemedText>
          <ThemedText className='text-white text-5xl font-extrabold tracking-tight'>
            {stats.monthTotal.toFixed(2)}
          </ThemedText>
        </View>

        {stats.nextSub && (
          <View className='flex-row items-center pt-5 border-t border-white/10'>
            <View className='w-10 h-10 rounded-xl bg-white/15 items-center justify-center mr-3'>
              {stats.nextSub.Logo ? (
                <stats.nextSub.Logo size={22} />
              ) : (
                <Feather name='zap' size={18} color={COLORS.white} />
              )}
            </View>
            <View className='flex-1'>
              <ThemedText className='text-white/50 text-[10px] uppercase font-bold tracking-widest mb-0.5'>
                Next Up
              </ThemedText>
              <ThemedText className='text-white font-bold text-[15px]'>
                {stats.nextSub.name}
              </ThemedText>
            </View>
            <View className='items-end'>
              <ThemedText
                className='font-bold text-[15px]'
                style={{ color: COLORS.successBackground }}
              >
                ${stats.nextSub.price.toFixed(2)}
              </ThemedText>
              <ThemedText className='text-white/60 text-[11px] font-medium'>
                {getDayLabel(stats.nextSub.daysLeft)}
              </ThemedText>
            </View>
          </View>
        )}
      </Animated.View>

      {/* Filter chips */}
      <Animated.View
        entering={ANIMATION.fadeInDown(120)}
        className='flex-row gap-2'
      >
        {FILTERS.map((f) => {
          const active = timeframe === f.id
          return (
            <TouchableOpacity
              key={f.id}
              onPress={() => setTimeframe(f.id)}
              activeOpacity={0.85}
              className='flex-1 py-2.5 rounded-full items-center'
              style={{
                backgroundColor: active ? COLORS.text : COLORS.card,
                borderWidth: 1,
                borderColor: active ? COLORS.text : COLORS.border,
              }}
            >
              <ThemedText
                className='font-semibold text-xs'
                style={{
                  color: active ? COLORS.background : COLORS.textMuted,
                }}
              >
                {f.label}
              </ThemedText>
            </TouchableOpacity>
          )
        })}
      </Animated.View>

      {/* Section header */}
      <View className='flex-row items-center justify-between mt-1'>
        <ThemedText variant='heading3' color='primary'>
          Schedule
        </ThemedText>
        <ThemedText variant='caption' color='muted'>
          {filtered.length} {filtered.length === 1 ? 'payment' : 'payments'}
        </ThemedText>
      </View>
    </View>
  )

  const renderItem = ({
    item,
    index,
  }: {
    item: UpcomingSubscription
    index: number
  }) => {
    const accent = getAccent(item.daysLeft)
    return (
      <Animated.View
        entering={ANIMATION.fadeInDown(180 + index * 60)}
        className='px-6'
      >
        <Pressable
          onPress={() => router.push(`/details/${item.id}`)}
          className='flex-row items-center p-4 rounded-2xl border'
          style={{
            backgroundColor: COLORS.card,
            borderColor: COLORS.borderLight,
          }}
        >
          {/* Logo */}
          <View
            className='w-14 h-14 rounded-2xl items-center justify-center mr-4'
            style={{ backgroundColor: item.color }}
          >
            {item.Logo ? (
              <item.Logo size={28} />
            ) : (
              <Feather name={item.icon as any} size={24} color={COLORS.text} />
            )}
          </View>

          {/* Middle */}
          <View className='flex-1 mr-3'>
            <ThemedText
              variant='title'
              numberOfLines={1}
              className='leading-tight'
            >
              {item.name}
            </ThemedText>
            <View className='flex-row items-center mt-1 gap-1.5'>
              <Feather name='calendar' size={11} color={COLORS.textMuted} />
              <ThemedText variant='caption' color='muted'>
                {formatBillingDate(item.nextBillingDate)}
              </ThemedText>
            </View>
            <View
              className='self-start mt-2 px-2 py-0.5 rounded-md'
              style={{ backgroundColor: accent.bg }}
            >
              <ThemedText
                className='text-[10px] font-bold tracking-wide'
                style={{ color: accent.fg }}
              >
                {getDayLabel(item.daysLeft).toUpperCase()}
              </ThemedText>
            </View>
          </View>

          {/* Right */}
          <View className='items-end'>
            <ThemedText variant='title' className='leading-tight'>
              ${item.price.toFixed(2)}
            </ThemedText>
            <ThemedText variant='caption' color='muted' className='mt-0.5'>
              per {item.billingCycle === 'yearly' ? 'year' : 'month'}
            </ThemedText>
          </View>
        </Pressable>
      </Animated.View>
    )
  }

  const EmptyState = () => (
    <Animated.View
      entering={ANIMATION.fadeIn(200)}
      className='items-center justify-center px-10 py-16'
    >
      <View
        className='w-20 h-20 rounded-full items-center justify-center mb-5'
        style={{ backgroundColor: COLORS.cardSecondary }}
      >
        <Feather name='inbox' size={32} color={COLORS.textMuted} />
      </View>
      <ThemedText variant='heading3' className='mb-1.5'>
        Nothing scheduled
      </ThemedText>
      <ThemedText
        variant='bodySmall'
        color='muted'
        className='text-center leading-5'
      >
        No subscriptions are due in this window. Check back later or pick a
        different timeframe.
      </ThemedText>
    </Animated.View>
  )

  return (
    <SafeAreaView
      edges={['top']}
      className='flex-1'
      style={{ backgroundColor: COLORS.background }}
    >
      <CommonHeader
        title='Upcoming'
        showNotification={false}
        showAvatar={false}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={EmptyState}
        ItemSeparatorComponent={() => <View className='h-3' />}
        contentContainerStyle={{ paddingBottom: 120, gap: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

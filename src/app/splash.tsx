import Logo from '@/components/Logo'
import { COLORS } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function SplashScreen() {
  const router = useRouter()
  const insets = useSafeAreaInsets()

  // Animation refs
  const orb1Scale = useRef(new Animated.Value(0.6)).current
  const orb2Scale = useRef(new Animated.Value(0.4)).current
  const orb3Scale = useRef(new Animated.Value(0.5)).current
  const logoAnim = useRef(new Animated.Value(0)).current
  const headingAnim = useRef(new Animated.Value(0)).current
  const subAnim = useRef(new Animated.Value(0)).current
  const ctaAnim = useRef(new Animated.Value(0)).current
  const pillAnim = useRef(new Animated.Value(0)).current

  // Shared translateY for entrance items
  const logoY = useRef(new Animated.Value(28)).current
  const headingY = useRef(new Animated.Value(28)).current
  const subY = useRef(new Animated.Value(20)).current
  const ctaY = useRef(new Animated.Value(32)).current
  const pillY = useRef(new Animated.Value(16)).current

  // Floating animation for orbs
  const float1 = useRef(new Animated.Value(0)).current
  const float2 = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Orb entrance
    Animated.parallel([
      Animated.spring(orb1Scale, {
        toValue: 1,
        damping: 18,
        stiffness: 60,
        useNativeDriver: true,
      }),
      Animated.spring(orb2Scale, {
        toValue: 1,
        damping: 20,
        stiffness: 50,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.spring(orb3Scale, {
        toValue: 1,
        damping: 22,
        stiffness: 45,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start()

    // Staggered content entrance
    const stagger = (
      anim: Animated.Value,
      yAnim: Animated.Value,
      delay: number,
    ) =>
      Animated.parallel([
        Animated.timing(anim, {
          toValue: 1,
          duration: 550,
          delay,
          useNativeDriver: true,
        }),
        Animated.spring(yAnim, {
          toValue: 0,
          damping: 22,
          stiffness: 80,
          delay,
          useNativeDriver: true,
        }),
      ])

    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        stagger(logoAnim, logoY, 0),
        stagger(headingAnim, headingY, 120),
        stagger(subAnim, subY, 240),
        stagger(pillAnim, pillY, 300),
        stagger(ctaAnim, ctaY, 380),
      ]),
    ]).start()

    // Continuous floating loops
    const loop = (val: Animated.Value, dist: number, dur: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(val, {
            toValue: dist,
            duration: dur,
            useNativeDriver: true,
          }),
          Animated.timing(val, {
            toValue: -dist,
            duration: dur,
            useNativeDriver: true,
          }),
        ]),
      ).start()

    loop(float1, 14, 3200)
    loop(float2, 10, 2600)
  }, [])

  const ctaPressed = useRef(new Animated.Value(1)).current

  const handlePressIn = () =>
    Animated.spring(ctaPressed, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 40,
    }).start()

  const handlePressOut = () =>
    Animated.spring(ctaPressed, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
    }).start()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle='dark-content' />
      {/* Background Orbs */}
      {/* Top -Right larger orb */}
      <Animated.View
        style={{
          position: 'absolute',
          top: -width * 0.28,
          right: -width * 0.22,
          width: width * 0.9,
          height: width * 0.9,
          borderRadius: width * 0.45,
          backgroundColor: COLORS.primary,
          opacity: 0.1,
          transform: [{ scale: orb1Scale }, { translateY: float1 }],
        }}
      />
      {/* Middle-left mid orb */}
      <Animated.View
        style={{
          position: 'absolute',
          top: height * 0.28,
          left: -width * 0.35,
          width: width * 0.75,
          height: width * 0.75,
          borderRadius: width * 0.375,
          backgroundColor: COLORS.primaryLight,
          opacity: 0.15,
          transform: [{ scale: orb2Scale }, { translateY: float2 }],
        }}
      />
      {/* Bottom-right small orb */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: height * 0.12,
          right: -width * 0.18,
          width: width * 0.55,
          height: width * 0.55,
          borderRadius: width * 0.275,
          backgroundColor: COLORS.primaryLight,
          opacity: 0.1,
          transform: [{ scale: orb3Scale }],
        }}
      />
      {/* Inner ring (decorative) */}
      <Animated.View
        style={{
          position: 'absolute',
          top: -width * 0.05,
          right: -width * 0.05,
          width: width * 0.65,
          height: width * 0.65,
          borderRadius: width * 0.325,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.03)',
          transform: [{ scale: orb1Scale }],
        }}
      />
      {/* Main Content */}
      <View
        className='flex-1 items-center justify-center px-7'
        style={{
          paddingTop: insets.top + 48,
          paddingBottom: insets.bottom + 32,
        }}
      >
        {/* Logo Mark */}
        <Animated.View
          style={{
            transform: [{ translateY: logoY }],
            opacity: logoAnim,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 86,
              height: 86,
              borderRadius: 24,
              backgroundColor: COLORS.card,
              borderWidth: 1,
              borderColor: COLORS.borderLight,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              ...Platform.select({
                ios: {
                  shadowColor: COLORS.primary,
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.12,
                  shadowRadius: 20,
                },
                android: {
                  elevation: 4,
                },
              }),
            }}
          >
            <Logo size={46} />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '800',
              color: COLORS.primary,
              letterSpacing: 4,
              textTransform: 'uppercase',
              opacity: 0.9,
            }}
          >
            PAYLIO
          </Text>
        </Animated.View>
        {/* Headline block */}
        <View style={{ alignItems: 'center', gap: 16, marginTop: 24 }}>
          <Animated.Text
            style={{
              color: COLORS.text,
              fontSize: 42,
              fontWeight: '800',
              letterSpacing: -1.2,
              textAlign: 'center',
              lineHeight: 50,
              opacity: headingAnim,
              transform: [{ translateY: headingY }],
            }}
          >
            Gain Financial{'\n'}Clarity
          </Animated.Text>
          <Animated.Text
            style={{
              color: COLORS.textTertiary,
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: 24,
              opacity: subAnim,
              transform: [{ translateY: subY }],
              maxWidth: 280,
            }}
          >
            Track, analyze, and cancel subscriptions — all in one place.
          </Animated.Text>
          {/* Feature Pills */}
          <Animated.View
            style={{
              flexDirection: 'row',
              gap: 10,
              marginTop: 12,
              opacity: pillAnim,
              transform: [{ translateY: pillY }],
            }}
          >
            {['Smart Alerts', 'Spend Insights', 'Easy Cancel'].map((label) => (
              <View
                key={label}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 100,
                  backgroundColor: `${COLORS.primary}15`,
                  borderWidth: 1,
                  borderColor: `${COLORS.primary}20`,
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 11,
                    fontWeight: '700',
                  }}
                >
                  {label}
                </Text>
              </View>
            ))}
          </Animated.View>
        </View>
        {/* CTA Block */}
        <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            gap: 16,
            opacity: ctaAnim,
            transform: [{ translateY: ctaY }],
            marginTop: 30,
          }}
        >
          <Animated.View
            style={{ width: '100%', transform: [{ scale: ctaPressed }] }}
          >
            <Pressable
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => router.push('/(tabs)/home')}
              style={{
                width: '100%',
                paddingVertical: 18,
                borderRadius: 18,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                ...Platform.select({
                  ios: {
                    shadowColor: COLORS.primary,
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.4,
                    shadowRadius: 16,
                  },
                  android: { elevation: 6 },
                }),
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 17,
                  fontWeight: '800',
                  letterSpacing: 0.2,
                }}
              >
                Get Started
              </Text>
              <MaterialIcons
                name='arrow-forward'
                size={20}
                color={COLORS.white}
              />
            </Pressable>
          </Animated.View>
          {/* Divider with "or" */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              width: '80%',
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.borderLight,
              }}
            />
            <Text
              style={{
                color: COLORS.textTertiary,
                fontSize: 12,
                fontWeight: '500',
              }}
            >
              or
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.borderLight,
              }}
            />
          </View>
          <Pressable onPress={() => router.push('/(auth)/sign-in')}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Sign in to existing account
            </Text>
          </Pressable>
          <Text
            style={{
              color: COLORS.textTertiary,
              fontSize: 11,
              fontWeight: '500',
              letterSpacing: 0.5,
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            By continuing you agree to our Terms & Privacy Policy
          </Text>
        </Animated.View>
      </View>
      {/* Bottom home indicator area */}
      <View style={{ position: 'absolute', bottom: 8, alignSelf: 'center' }}>
        <View
          style={{
            width: 134,
            height: 5,
            borderRadius: 3,
            backgroundColor: COLORS.borderAuth,
          }}
        />
      </View>
    </View>
  )
}

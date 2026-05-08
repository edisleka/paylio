import HomeHeader from '@/components/HomeHeader'
import { COLORS } from '@/constants/theme'
import { styled } from 'nativewind'
import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'
const SafeAreaView = styled(RNFSafeAreaView)

export default function Home() {
  return (
    <SafeAreaView
      edges={['top']}
      className='flex-1 '
      style={{ backgroundColor: COLORS.background }}
    >
      <HomeHeader />
    </SafeAreaView>
  )
}

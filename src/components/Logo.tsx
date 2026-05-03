import { GlobalLogoProps } from '@/types/dummyData.types'
import { Image, StyleSheet, View } from 'react-native'

const Logo = ({ size = 32, color, variant = 'primary' }: GlobalLogoProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})

export default Logo

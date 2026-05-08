import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function ItemDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>()

  return (
    <View>
      <Text>{id ? `Details for ${id}` : 'Details'}</Text>
    </View>
  )
}


import { Text, View, StyleSheet, } from 'react-native';
export function Home ({navigation}) {
  return (
  <View style={styles.TOP}>
      <Text style={{fontStyle:'italic',fontSize:50,fontWeight:500}}>
        DNK
      </Text>
</View>
  )
}

const styles = StyleSheet.create({
  TOP:{
    paddingTop:50,
    
  }

})
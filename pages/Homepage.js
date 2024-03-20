import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

export function Home ({navigation}) {
  return (
<SafeAreaView>
  
<View style={styles.TOP}>
      <Text style={{fontStyle:'italic',fontSize:50,fontWeight:500}}>
        DNK
      </Text>
<View style={styles.no}>
      <Text>
        $0.00
      </Text>
</View>
</View>

<ImageBackground source={{uri:"https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg"}}>
<View style={styles.firstText}>
    <Text style={{textAlign:'center',fontWeight:500,fontSize:50,color:'white'}}>
        Redefine Your Shopping Experience 
    </Text>
    <Text style={{textAlign:'center',fontWeight:500,fontSize:50,color:'white'}}>
        With Wulu.
    </Text>
</View>

<View style={styles.secondText}>
  <Text style={{textAlign:'center',fontWeight:500,fontSize:30,color:'white'}}>
    Where Convenience Meets Quality.
  </Text>
</View>

  <TouchableOpacity>
  <View style={styles.fistButton}>
    <Text style={{alignSelf:'center',color:'white',marginTop:20}}>
      SHOP NOW
    </Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity>
  <View style={styles.secondButton}>
    <Text style={{alignSelf:'center',color:'white',marginTop:20}}>
      FIND MORE
    </Text>
  </View>
  </TouchableOpacity>

  </ImageBackground>

</SafeAreaView>
)}

const styles = StyleSheet.create({
  TOP:{
    paddingTop:50, 
    flexDirection:'row',
    gap:300  
  },
  no:{
    paddingTop:25
  },
  firstText:{
    marginTop:50,
    alignSelf:'center'
  },
  secondText:{
      marginTop:30,
      alignSelf:'center'
  },
  fistButton:{
    alignSelf:'center',
    marginTop:50,
    width:'90%',
    height:60,
    backgroundColor:'black',
  },
  secondButton:{
    alignSelf:'center',
    marginTop:20,
    width:'90%',
    height:60,
    backgroundColor:'black',
  },
})
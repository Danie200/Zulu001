import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground,Image,FlatList,ScrollView} from 'react-native';
import React from 'react';
import { list } from '../images.js/homePageJpg';



export function Home ({navigation}) {
  return (
    
<SafeAreaView>

<ImageBackground style={styles.firstjpg} source={{uri:"https://www.wulu.net.ng/wp-content/uploads/2019/12/home-new-bg-free-img.jpg"}}>
  
<View style={styles.TOP}>
      <Text style={{fontStyle:'italic',fontSize:50,fontWeight:'500',color:'white'}}>
        DNK
      </Text>
<View style={styles.no}>
      <Text>
        $0.00
      </Text>
</View>
</View>


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
      <Text style={{alignSelf:'center',color:'black',marginTop:20}}>
        SHOP NOW
      </Text>
    </View>
</TouchableOpacity>

  <TouchableOpacity>
  <View style={styles.secondButton}>
    <Text style={{alignSelf:'center',color:'white',marginTop:20,fontWeight:'bold'}}>
      FIND MORE
    </Text>
  </View>
  </TouchableOpacity>
</ImageBackground>

<View style={{}}>
<FlatList
 horizontal={true}
 data={list}
 renderItem={({item}) => (<View>
  <Image source={{uri:item.imageUrl}} style={{height:30, width:200,}}/>
 </View> )}
 ItemSeparatorComponent={<View style={{width:110}}/>}
 showsHorizontalScrollIndicator={false}
  />
  </View>
 

</SafeAreaView>

)}

const styles = StyleSheet.create({
  TOP:{
    marginTop:50, 
    flexDirection:'row',
    gap:300  
  },
  no:{
    marginTop:25
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
    marginTop:40,
    width:'90%',
    height:60,
    backgroundColor:'white',
  },
  secondButton:{
    alignSelf:'center',
    borderWidth:2,
    marginTop:20,
    width:'90%',
    height:60,
    borderColor:'white'
  },
  firstjpg:{
    height:'87%',
  }
})
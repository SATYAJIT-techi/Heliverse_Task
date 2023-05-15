import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
  } from 'react-native';
  import React, { useEffect } from 'react';
  import moment from "moment";
  
  
  const App = ({navigation}) => {

    
    // let Time = '04:59:59'

  
    const [time,setTime]=React.useState(59);
    useEffect(()=>{
      let time  = 59
    setInterval(() => {
  
      // let temp=time
      setTime(time-1)
      
      time=time-1;
      
    }, 1000);
    setTimeout(()=>{
      navigation.navigate('Second Screen')
    },3000)
    },[])
    
  
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/award_bg.png')}
          style={styles.imageBackground}>
  
            <View style={{position:'absolute',top:Dimensions.get("window").height*0.1,alignItems:'center'  }}>
              <ImageBackground source={require('../assets/castingLogo.png')} style={{height:120,width:Dimensions.get("window").width*0.26,justifyContent:'center',alignItems:'center'}}>
                <Text style={{ marginTop:20 ,transform:[{rotate:'-10deg'}]}}>{"04:59:"+time}</Text>
              </ImageBackground>
  
              <Text style={{ fontSize:40 ,transform:[{rotate:'-10deg'}]}}>CASTING CALL</Text>
  
  
            </View>
            <View style={styles.resultRIn}>
              <Text style={{color:'yellow', fontSize:40}}>The Result R in !</Text>
            </View>
          <ImageBackground
            source={require('../assets/awardPlatform.png')}
            style={styles.platformImage}></ImageBackground>
          <Image
            source={require('../assets/girlClap.png')}
            style={styles.girlImage}
          />
        </ImageBackground>
      </View>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    resultRIn:{
      height:Dimensions.get('window').height / 6,
      width:Dimensions.get('window').width ,
      // justifyContent:'center',
      alignItems:'center',
      // backgroundColor:'red',
      marginBottom:Dimensions.get('window').height /8,
  
    },
    platformImage: {
      position: 'absolute',
      bottom: 0,
      height: Dimensions.get('window').height / 4,
      width: "100%",
    },
    girlImage: {
      height: Dimensions.get('window').height / 2.6,
      position: 'absolute',
      bottom: Dimensions.get('window').height / 5.5,
      width: Dimensions.get('window').width / 3,
    },
  });
  
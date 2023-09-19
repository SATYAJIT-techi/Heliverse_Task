import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const SecondScreen = ({navigation}) => {
  // const rightValue = useState(new Animated.Value(1000))[0];
  const [rightValue, setRightValue] = useState(new Animated.Value(1000));
  const [counter, setCounter] = useState(0);
  function moveView() {
    // setRightValue(new Animated.Value(1000))
    Animated.timing(rightValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  function moveToLeft() {
    Animated.timing(rightValue, {
      toValue: -1000,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Third Screen', {love: 15000});
    }, 20000);
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/award_bg.png')}
        style={styles.imageBackground}>
        <Animated.View
          style={{
            height: Dimensions.get('window').height / 10,
            width: '80%',
            marginBottom: Dimensions.get('window').height * 0.75,
            flexDirection: 'row',

            justifyContent: 'space-between',
            marginLeft: rightValue,
          }}>
          <Image
            source={require('../assets/avtar2.png')}
            style={styles.avtarImage}
          />

          <View style={styles.floatingDetailsTextView}>
            <Text style={{fontSize: 35, color: 'yellow'}}>D - Lister </Text>
            <Text style={{fontSize: 20, color: 'white'}}>Sally </Text>
          </View>
        </Animated.View>

        <View style={styles.textandHeart}>
          <View style={{}}>
            <Text style={{fontSize: 30, color: 'yellow'}}>
              GAVE U SOME LOVE
            </Text>
          </View>

          <View style={styles.heartView}>
            <ImageBackground
              source={require('../assets/main-heart.png')}
              style={styles.heartImage}>
              <Text style={{color: 'yellow', fontSize: 40}}>15000</Text>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: Dimensions.get('window').height * 0.35,
            right: Dimensions.get('window').width * 0.1,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (counter % 2 == 0) {
                moveView();
                setCounter(counter + 1);
                console.log('++' + counter);
              } else {
                moveToLeft();
                console.log('--' + counter);
                setCounter(counter - 1);
                // setRightValue(new Animated.Value(1000))
              }
            }}>
            <Image
              source={require('../assets/arrow.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
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

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  avtarImage: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').height / 10,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 40,
    marginLeft: Dimensions.get('window').width / 12,
  },
  heartView: {
    marginBottom: Dimensions.get('window').height / 4,
    backgroundColor: 'red',
  },
  floatingDetailsTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textandHeart: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    position: 'absolute',
    top: Dimensions.get('window').height / 5,
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  heartImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformImage: {
    position: 'absolute',
    bottom: 0,
    height: Dimensions.get('window').height / 4,
    width: '100%',
  },
  girlImage: {
    height: Dimensions.get('window').height / 2.9,
    position: 'absolute',
    bottom: Dimensions.get('window').height / 5.5,
    width: Dimensions.get('window').width / 3,
  },
});

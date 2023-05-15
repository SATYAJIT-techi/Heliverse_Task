import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

const ThirdScreen = ({ route, navigation }) => {



    const { love } = route.params;
    const [Love, setLoveCal] = useState(love);
    let time=1000;
    let interval;
    useEffect(() => {
        // let Love = 15000;
        let temp = Love

        interval=setInterval(() => {
            setLoveCal(temp + time)
            temp = temp + time
            if (temp > 40000-time) { clearInterval(interval) }
        },100)

    }, [])



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/award_bg.png')}
                style={styles.imageBackground}>

                <View style={{
                    marginBottom: Dimensions.get('window').height / 1.5,
                    width: Dimensions.get('window').width / 1.5,
                    justifyContent: 'center',
                    alignItems: 'center',


                }}>
                    <Text style={{
                        fontSize: 35,
                        color: 'yellow', textAlign: 'center'
                    }}>4 Friends Gave U Same LOVE</Text>
                </View>

                <View style={{
                    height: Dimensions.get('window').height / 2.5,
                    width: '100%', position: 'absolute',
                    top: Dimensions.get('window').height / 3.5,
                    alignItems: 'center'
                }}>



                    <View style={styles.heartView}>
                        <ImageBackground source={require('../assets/main-heart.png')} style={styles.heartImage}>
                            <Text style={{ color: 'yellow', fontSize: 40 }}>{Love}</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: Dimensions.get("window").height * 0.35, right: Dimensions.get("window").width * 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('First Screen')} >
                        <Image source={require('../assets/arrow.png')} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{position:'absolute',
                bottom:Dimensions.get('window').height/2.4,
                right:Dimensions.get('window').width*0.03,
                }}>
                    <ImageBackground source={require("../assets/message.png")} 
                    style={{height:Dimensions.get('window').height/7,
                    width:Dimensions.get('window').width/2.5,
                    alignItems:'center',
                   }} >
                        <Text style={{color:'#000',marginTop:28,fontSize:20}}>Congrats</Text>
                    </ImageBackground>
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
    )
}

export default ThirdScreen

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
    heartView: {
        marginBottom: Dimensions.get('window').height / 4,
        
    },
    heartImage: {
        height: Dimensions.get('window').height / 5.5,
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    platformImage: {
        position: 'absolute',
        bottom: 0,
        height: Dimensions.get('window').height / 4,
        width: "100%",
    },
    girlImage: {
        height: Dimensions.get('window').height / 2.9,
        position: 'absolute',
        bottom: Dimensions.get('window').height / 5.5,
        width: Dimensions.get('window').width / 3,
    },
});

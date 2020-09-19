/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image, FlatList,
    Dimensions,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const numberData = [
    { id: 1, number: '210', text: 'Photos' },
    { id: 2, number: '15k', text: 'Followers' },
    { id: 3, number: '650', text: 'Following' },
];
const imgData = [
    { id: 1, imgSource: require('./img/co.jpeg') },
    { id: 2, imgSource: require('./img/voi.jpeg') },
    { id: 3, imgSource: require('./img/hac.jpeg') },
    { id: 4, imgSource: require('./img/vet.jpeg') },
];


const windowWidth = Dimensions.get('window').width;
const centerImgData = Math.floor(imgData.length / 2);


const App = () => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Icon name="arrowleft" size={30} />
                            <Icon name="ellipsis1" size={30} />
                        </View>
                        <View style={styles.info}>
                            <View>
                                <Image source={require('./img/avatar.png')} style={styles.avatar} />
                            </View>
                            <View style={styles.info_name}>
                                <View style={styles.text_info}>
                                    <Text style={styles.name}> Đào Truyền</Text>
                                    <Text style={styles.work}> Developer</Text>
                                </View>
                                <View style={styles.button}>
                                    <TouchableOpacity
                                        style={styles.follow}
                                    >
                                        <Text style={{ color: 'white',fontSize:18,paddingTop:5, }}>Press Here</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.send}
                                    >
                                        <Icon name="right" size={30} style={{color:'white'}}/>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        <View style={styles.number}>
                            {numberData.map(item => {
                                return <View>
                                    <Text style={{fontSize:30,fontWeight:'500',textAlign:'center',justifyContent:'center',}}>{item.number}</Text>
                                    <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',}}>{item.text}</Text>
                                </View>;
                            })}
                        </View>
                        <ScrollView contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                {imgData.slice(0, centerImgData).map((item) => {
                                    return <Image source={item.imgSource} style={styles.image} />;
                                })}
                            </View>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                {imgData.slice(centerImgData).map(item => {
                                    return <Image source={item.imgSource} style={styles.image} />;
                                })}
                            </View>
                        </ScrollView>
                        <View style={styles.footer}>
                            <Icon name="menuunfold" size={30} />
                            <Icon name="pluscircleo" size={30} />
                            <Icon name="user" size={30} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    imgage: {
        width: 30,
        height: 30,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    name:{
        fontSize:30,
        fontWeight:'500',

    },
    work:{fontSize:18,paddingRight:30},
    button: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginRight:5,
    },
    number: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        padding: 10,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        
    },
    image: {
        width:windowWidth/2 ,
        height:windowWidth/2 ,
        margin:10,
    },
    follow:{
        alignItems: "center",
        backgroundColor: "blue",
        paddingVertical:5,
        padding:30,
        borderRadius:30,
      },
    send:{
        alignItems: "center",
        backgroundColor: "#00FFFF",
        paddingVertical:5,
        padding:20,
        marginLeft:5,
        borderRadius:30,
    },
    text_info:{
        marginLeft:10
    }
});

export default App;

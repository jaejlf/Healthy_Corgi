import React, { useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { myColor } from './myColors';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../screens/MainNavigator';
import Icon from 'react-native-vector-icons/AntDesign';

export default function TopBar() {

    type loginProp = StackNavigationProp<StackParamList, 'Login'>;
    const navigation = useNavigation<loginProp>();
    const goLogin = useCallback(() => navigation.navigate('Login'), []); //로그아웃 (다시 로그인 페이지로)

    return (
        <View style={styles.topBar}>
            <Image style={[styles.img]} source={require('../../assets/img/logo_corgi.png')} />
            <View style={styles.icon_view}>
                <Icon name="logout" size={25} color={myColor.black} onPress={goLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 50,
        backgroundColor: myColor.lightOrange,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    img: {
        width: 43,
        height: 43,
        marginTop: 3,
        position:'absolute' //위치 고정
    },
    topContainer:{
        flexDirection: 'row',
    },
    icon_view: {
        marginLeft: 330,
        marginTop: 12,
    }
})
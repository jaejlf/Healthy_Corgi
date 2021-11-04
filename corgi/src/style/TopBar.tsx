import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { myColor } from './myColors';

export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <Image style={[styles.img]} source={require('../../assets/img/logo_corgi.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 50,
        backgroundColor: myColor.lightOrange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 43,
        height: 43
    }
})
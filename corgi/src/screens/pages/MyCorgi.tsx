import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { fontStyle } from '../../style/fontStyle';
import { topBarStyle } from '../../style/topBarStyle';

export default function App() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={topBarStyle.topBar}>
                <Image style={[topBarStyle.img]} source={require('../../../assets/img/logo_corgi.png')} />
            </View>
            <Text style={[styles.text, fontStyle.regular]}>This is MyCorgi Page</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeAreaView: { flex: 1 },
    text: { fontSize: 20 }
})
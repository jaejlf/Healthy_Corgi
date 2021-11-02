import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { fontStyle } from '../../style/fontStyle';
import { topBarStyle } from '../../style/topBarStyle';

export default function App() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
            <View style={topBarStyle.topBar}>
                <Image style={[topBarStyle.img]} source={require('../../../assets/img/logo_corgi.png')} />
            </View>
            <View style={styles.context}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>This is Info Page</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    text: {
        fontSize: 20
    },
    context: {
        margin: 20
    }
})
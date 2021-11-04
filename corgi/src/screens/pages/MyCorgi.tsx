import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useToggleTheme } from '../../contexts/ToggleThemeProvider';
import { fontStyle } from '../../style/fontStyle';
import { topBarStyle } from '../../style/topBarStyle';

export default function App() {
    const theme = useTheme();
    const { colors } = theme;
    const toggleTheme = useToggleTheme();

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
            <View style={topBarStyle.topBar}>
                <Image style={[topBarStyle.img]} source={require('../../../assets/img/logo_corgi.png')} />
            </View>
            <View style={styles.subtitle}>
                <Text style={[styles.text, fontStyle.bold, { color: '#E76C07' }]}>정보</Text>
            </View>
            <View style={styles.context}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>이름</Text>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>코기</Text>
            </View>
            <View style={styles.context}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>나이</Text>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>5살</Text>
            </View>
            <View style={styles.blank} />
            <View style={styles.subtitle}>
                <Text style={[styles.text, fontStyle.bold, , { color: '#E76C07' }]}>Setting</Text>
            </View>
            <View style={styles.context}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>Dark Mode</Text>
                <Switch value={theme.dark} onValueChange={toggleTheme} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    text: {
        fontSize: 25,
    },
    context: {
        margin: 20,
        marginBottom: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#CDCDCD'
    },
    subtitle: {
        margin: 20,
        marginBottom: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#FDE4CF'
    },
    blank: {
        marginTop: 30
    }
})
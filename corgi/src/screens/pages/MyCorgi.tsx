import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useToggleTheme } from '../../contexts/ToggleThemeProvider';
import { fontStyle } from '../../style/fontStyle';
import TopBar from '../../style/TopBar';
import { defaultStyle } from '../../style/defaultStyle';
import { myColor } from '../../style/myColors';

export default function MyCorgi() {
    const theme = useTheme();
    const { colors } = theme;
    const toggleTheme = useToggleTheme();

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            <View style={defaultStyle.subtitle}>
                <Text></Text><Text></Text><Text></Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text style={[fontStyle.bold, { fontSize: 25 }, { color: myColor.textOrange }]}>정보</Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text></Text><Text></Text><Text></Text>
            </View>
            <View style={styles.container}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>이름</Text>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>코기</Text>
            </View>
            <View style={styles.container}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>나이</Text>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>5살</Text>
            </View>
            <View style={styles.blank} />
            <View style={defaultStyle.subtitle}>
                <Text></Text><Text></Text><Text></Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text style={[fontStyle.bold, { fontSize: 25 }, { color: myColor.textOrange }]}>설정</Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text></Text><Text></Text><Text></Text>
            </View>
            <View style={styles.container}>
                <Text style={[styles.text, fontStyle.regular, { color: colors.text }]}>Dark Mode</Text>
                <Switch value={theme.dark} onValueChange={toggleTheme} />
            </View>
            <View style={styles.blank} />
            <View style={defaultStyle.subtitle}>
                <Text></Text><Text></Text><Text></Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text style={[fontStyle.bold, { fontSize: 25 }, { color: myColor.textOrange }]}>계정관리</Text>
                <Image style={[defaultStyle.subImg]} source={require('../../../assets/img/paw_orange.png')} />
                <Text></Text><Text></Text><Text></Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn}><Text style={[fontStyle.regular]}>로그인아웃관리</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        marginRight: 10
    },
    blank: {
        marginTop: 10
    },
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: myColor.gray
    },
    btn: {
        width: '90%',
        height: 50,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: myColor.lightOrange,
        paddingTop: 15,
        borderRadius: 3,
        border : 1
    }
})
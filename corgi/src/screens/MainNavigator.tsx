import React from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { useToggleTheme } from '../contexts/ToggleThemeProvider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { fontStyle } from '../style/fontStyle';

const login = function () {
    console.log("on press !");
}

export default function MainNavigator() {
    const theme = useTheme();
    const toggleTheme = useToggleTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={[styles.flex]}>
            <View style={[styles.view, { backgroundColor: theme.colors.background }]}>
                <View style={[styles.topBar, { backgroundColor: Colors.white }]}>
                    <Switch value={theme.dark} onValueChange={toggleTheme} />
                </View>
                <View style={[styles.contextView]}>
                    <Image style={[styles.mainImage]} source={require('../../assets/img/logo_corgi.png')} />
                    <Text style={[styles.mainText, fontStyle.bold, { color: colors.text }]}>헬시코기</Text>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold, { color: colors.text }]}>ID</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput style={[styles.textInput, fontStyle.regular, { color: colors.text }]}
                                placeholder="enter your email" placeholderTextColor={colors.text} />
                        </View>
                    </View>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold, { color: colors.text }]}>password</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput style={[styles.textInput, fontStyle.regular, { color: colors.text }]}
                                placeholder="enter your password" placeholderTextColor={colors.text} />
                        </View>
                    </View>
                    <View style={[styles.loginBtn]}>
                        <TouchableOpacity onPress={login}>
                            <Text style={[styles.loginText, fontStyle.bold]}>login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex: { flex: 1 },
    view: {
        flex: 1,
        alignItems: 'center'
    },
    topBar: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'flex-end'
    },
    contextView: {
        flex: 1,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainImage: {
        width: 170,
        height: 170,
    },
    mainText: {
        fontSize: 30,
        marginBottom: 50
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
        marginLeft: 10
    },
    loginText: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 13
    },
    textview: {
       width: '100%'
    },
    textInput: {
        fontSize: 20,
        padding: 10,
    },
    textInputView: {
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 50,
        height: 50
    },
    loginBtn: {
        width: '100%',
        backgroundColor: '#F88929',
        height: 50,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 50
    }
})
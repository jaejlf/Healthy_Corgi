import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontStyle } from '../style/fontStyle';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from './MainNavigator';
import { myColor } from '../style/myColors';
import { defaultStyle } from '../style/defaultStyle';

type inAppProp = StackNavigationProp<StackParamList, 'inApp'>;

export default function Login() {
    const navigation = useNavigation<inAppProp>();
    const goInapp = useCallback(() => navigation.navigate('inApp'), []);

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView]}>
            <View style={[styles.view]}>
                <View style={[styles.contextView]}>
                    <Image style={[styles.mainImage]} source={require('../../assets/img/logo_corgi.png')} />
                    <Text style={[styles.mainText, fontStyle.bold]}>헬시코기</Text>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold]}>ID</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput style={[styles.textInput, fontStyle.regular]}
                                placeholder="enter your email" />
                        </View>
                    </View>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold]}>password</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput secureTextEntry style={[styles.textInput, fontStyle.regular]}
                                placeholder="enter your password" />
                        </View>
                    </View>
                    <View style={[styles.loginBtn]}>
                        <TouchableOpacity onPress={goInapp}>
                            <Text style={[styles.loginText, fontStyle.bold]}>login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
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
        borderColor: myColor.gray,
        borderRadius: 50,
        height: 50
    },
    loginBtn: {
        width: '100%',
        backgroundColor: myColor.orange,
        height: 50,
        borderWidth: 1,
        borderColor: myColor.gray,
        borderRadius: 50
    }
})
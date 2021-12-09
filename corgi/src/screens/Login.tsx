import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { StackParamList } from './MainNavigator';
import { myColor } from '../style/myColors';
import { defaultStyle } from '../style/defaultStyle';
import { fontStyle } from '../style/fontStyle';
import { createRandomPerson } from './pages/Info/createRandomPerson';
import { iPerson } from './pages/Info/person';

type inAppProp = StackNavigationProp<StackParamList, 'inApp'>;
export default function Login() {
    const theme = useTheme();
    const { colors } = theme;

    const navigation = useNavigation<inAppProp>();
    const goInapp = useCallback(() => navigation.navigate('inApp'), []);

    const [person, setPerson] = useState<iPerson>(createRandomPerson())
    const [password, setPassword] = useState<string>('1234567890987654321');

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView]}>
            <View style={[styles.view]}>
                <View style={[styles.contextView]}>
                    <Image style={[styles.mainImage]} source={require('../../assets/img/logo_corgi.png')} />
                    <Text style={[styles.mainText, fontStyle.bold, { color: colors.text, fontSize: 40 }]}>헬시코기</Text>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold, { color: colors.text }]}>ID</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput
                                style={[styles.textInput, fontStyle.regular, { color: colors.text }]}
                                value={person.email}
                                onChangeText={email => setPerson(person => ({ ...person, email }))}
                                placeholder="enter your email"
                                placeholderTextColor={myColor.textGray}
                            />
                        </View>
                    </View>
                    <View style={[styles.textview]}>
                        <Text style={[styles.text, fontStyle.bold, { color: colors.text }]}>password</Text>
                        <View style={[styles.textInputView]}>
                            <TextInput
                                secureTextEntry
                                style={[styles.textInput, fontStyle.regular, { color: colors.text }]}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="enter your password"
                                placeholderTextColor={myColor.textGray}
                            />
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
        marginBottom: 50
    },
    text: {
        marginBottom: 10,
        marginLeft: 10
    },
    loginText: {
        textAlign: 'center',
        paddingTop: 13
    },
    textview: {
        width: '100%'
    },
    textInput: {
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
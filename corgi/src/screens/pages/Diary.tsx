import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { fontStyle } from '../../style/fontStyle';
import TopBar from '../../style/TopBar';
import { defaultStyle } from '../../style/defaultStyle';
import Menu from '../Menu';

export default function Diary() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            <Menu />
            <View style={{ margin: 20 }}>
                <Text style={[fontStyle.regular, { color: colors.text }]}>This is Diary Page</Text>
            </View>
        </SafeAreaView>
    );
}
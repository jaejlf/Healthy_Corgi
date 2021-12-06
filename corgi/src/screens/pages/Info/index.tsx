import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import TopBar from '../../../style/TopBar';
import { defaultStyle } from '../../../style/defaultStyle';
import Item from './Item';

export default function Info() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            {Item()} 
        </SafeAreaView>
    );
}
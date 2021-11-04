import React from 'react';
import { SafeAreaView, View } from 'react-native';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TopBar from '../../../style/TopBar';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';

export default function Todo() {
    const theme = useTheme();
    const { colors } = theme;
    
    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            <View style={{margin:20}}>
                <TodoInsert />
                <TodoList />
            </View>
        </SafeAreaView>
    );
}
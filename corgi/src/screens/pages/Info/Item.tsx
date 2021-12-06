import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { createRandomPerson } from './createRandomPerson';
import showPerson from './showPerson';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';

export default function Item() {
    const theme = useTheme();
    const { colors } = theme;

    const people = new Array(3).fill(null).map(createRandomPerson);
    return (
        <View style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <ScrollView horizontal={false}>
                {showPerson(people[0])}
                {showPerson(people[1])}
                {showPerson(people[2])}
            </ScrollView>
        </View>);
}
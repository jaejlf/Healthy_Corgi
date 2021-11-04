import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';

export default function TodoItem() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <View style={[defaultStyle.lineup, styles.container]}>
            <TouchableOpacity>
                <View style={styles.circle} />
            </TouchableOpacity>
            <Text style={[fontStyle.regular, styles.text, { color: colors.text }]}>추가된 투두리스트</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: myColor.orange,
        borderWidth: 2
    },
    text: {
        marginLeft: 10,
        marginRight: 10
    },
    container: {
        width: '100%',
        height: 70,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: myColor.gray
    }
});

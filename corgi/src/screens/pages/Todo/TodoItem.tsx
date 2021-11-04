import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function TodoItem() {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <View style={[defaultStyle.lineup]}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.ckCircle}>
                        <Icon name="circledowno" size={25} color={myColor.orange} />
                    </View>
                </TouchableOpacity>
                <Text style={[fontStyle.regular, styles.ckText]}>추가된 투두리스트</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer}>
                <Icon name="delete" size={25} color="#e33057" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        width: 27,
        height: 27,
        borderRadius: 15,
        borderColor: myColor.orange,
        borderWidth: 2
    },
    ckCircle: {
        width: 27,
        height: 27,
    },
    text: {
        marginLeft: 20,
        color: '#FFFFFF'
    },
    ckText: {
        marginLeft: 20,
        textDecorationLine: 'line-through',
        color: myColor.textGray
    },
    container: {
        width: '90%',
        height: 70,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: myColor.gray
    },
    btnContainer: {
        marginTop: 10
    }
});

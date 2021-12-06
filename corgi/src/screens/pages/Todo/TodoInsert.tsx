import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { defaultStyle } from '../../../style/defaultStyle';
import { myColor } from '../../../style/myColors';
import { useTheme } from '@react-navigation/native';

export default function TodoInsert() {
    const theme = useTheme();
    const { colors } = theme;
    
    let inputTodo = "";
    const addTodo = () => {
        console.log(inputTodo);
        inputTodo = ""
    }

    return (
        <View style={[defaultStyle.lineup, styles.container]}>
            <TextInput
                style={[fontStyle.regular]}
                placeholder="할 일을 추가하세요."
                placeholderTextColor={myColor.textGray}
                onChangeText={(text: string) => { inputTodo = text; }}
                autoCorrect={false} />
            <View>
                <TouchableOpacity onPress={addTodo} style={styles.btn}><Text style={[fontStyle.regular]}>+</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: myColor.gray
    },
    btn: {
        width: 30,
        height: 30,
        backgroundColor: myColor.lightOrange,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
        borderRadius: 3
    }
})
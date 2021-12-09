import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
export type todoType = {
    updateTodo: Dispatch<SetStateAction<string[]>>
}
const Input: FC<todoType> = ({ updateTodo }) => {
    const theme = useTheme();
    const { colors } = theme;
    const [todoText, updateTodoText] = useState<string>('');
    const pressInput = useCallback(() => {
        if (todoText != "") {
            updateTodo((todoList) => {
                return [...todoList, todoText];
            });
        }
        updateTodoText("");
    }, [todoText.length]);

    return (
        <View style={styles.view}>
            <TextInput
                style={[styles.input, fontStyle.regular, { color: colors.text }]}
                placeholder="할 일을 추가하세요."
                placeholderTextColor={myColor.textGray}
                value={todoText}
                onChangeText={(text) => { updateTodoText(text); }} />
            <TouchableOpacity style={styles.button} onPress={pressInput}>
                <Text style={[styles.buttonText, fontStyle.regular]}>{"+"}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        height: 70,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: myColor.lightOrange
    },
    input: {
        flex: 4,
        fontSize: 20
    },
    button: {
        flex: 1,
        backgroundColor: myColor.lightOrange,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20
    }
})
export default Input;
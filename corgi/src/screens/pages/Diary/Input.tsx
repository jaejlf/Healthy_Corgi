import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';

export type logType = {
    updateLog: Dispatch<SetStateAction<string[]>>
}
const Input: FC<logType> = ({ updateLog }) => {
    const theme = useTheme();
    const { colors } = theme;
    const [logTest, updateLogText] = useState<string>('');
    const pressInput = useCallback(() => {
        if (logTest != "") {
            updateLog((logList) => {
                return [...logList, logTest];
            });
        }
        updateLogText("");
    }, [logTest.length]);

    return (
        <View style={styles.view}>
            <TextInput
                style={[styles.input, fontStyle.regular, { color: colors.text }]}
                placeholder="오늘의 반려동물 건강기록"
                placeholderTextColor={myColor.textGray}
                value={logTest}
                onChangeText={(text) => { updateLogText(text); }} />
            <TouchableOpacity style={styles.button} onPress={pressInput}>
                <Text style={[styles.buttonText, fontStyle.regular]}>{"+"}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
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
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { fontStyle } from '../../../style/fontStyle';
import { defaultStyle } from '../../../style/defaultStyle';
import { myColor } from '../../../style/myColors';

export default function TodoInsert() {

    return (
        <View style={[defaultStyle.lineup, styles.container]}>
            <TextInput
                style={[fontStyle.regular]}
                placeholder="할 일을 추가하세요."
                placeholderTextColor={myColor.textGray}
                autoCorrect={false} />
            <View>
                <Button title={'  +  '} />
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
    }
})
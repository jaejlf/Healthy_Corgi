import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import Input from './Input';
import TopBar from '../../../style/TopBar';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
import { fontStyle } from '../../../style/fontStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const Todo = () => {
    const theme = useTheme();
    const { colors } = theme;
    const [todo, updateTodo] = useState<string[]>(new Array<string>());
    const onCheck = useCallback(()=>{
        Alert.alert('Check pressed!');
    }, []);
    const onRemove = useCallback(()=>{
        Alert.alert('Delete pressed!');
    }, []);
    const todoViews = useMemo(() => {
        return todo.map((todoItem, index) => {
            return (
                <View style={styles.todoView} key={index}>
                    <Icon name="checkcircleo" size={25} color={myColor.orange} onPress={onCheck} />
                    <Text style={[styles.todoText, fontStyle.regular, { color: colors.text }]}>{todoItem}</Text>
                    <Icon name="delete" size={25} color="#e33057" onPress={onRemove}/>
                </View>
            );
        })
    }, [todo.length]);
    return (
        <SafeAreaView style={[defaultStyle.safeAreaView, { backgroundColor: colors.background }]}>
            <TopBar />
            <ScrollView style={styles.view}>{todoViews}</ScrollView>
            <Input updateTodo={updateTodo} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 7
    },
    todoView: {
        width: '100%',
        height: 55,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: myColor.gray
    },
    todoText: {
        flex: 1,
        marginLeft: 20
    }
});
export default Todo;
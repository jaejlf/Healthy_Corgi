import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import type { FC } from "react";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from './MainNavigator';

const DrawerContents: FC<DrawerContentComponentProps> = (props) => {

    type loginProp = StackNavigationProp<StackParamList, 'Login'>;
    const navigation = useNavigation<loginProp>();
    const goLogin = useCallback(() => navigation.navigate('Login'), []);

    return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.safe}>
        <TouchableOpacity style={styles.button} onPress={goLogin}>
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>);
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    },
    button: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    text: {
        fontSize: 20,
        color: "black"
    }
});

export default DrawerContents;
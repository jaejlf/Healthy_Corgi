import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { iPerson } from './person';
import { useTheme } from '@react-navigation/native';
import { fontStyle } from '../../../style/fontStyle';
import { myColor } from '../../../style/myColors';

const avatarSize = 30;
export default function showPerson(person: iPerson) {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <View style={[styles.view, { backgroundColor: colors.background }]}>
            <View style={styles.leftView}>
                <Image style={styles.avatar} source={{ uri: person.avatar }} />
            </View>
            <View style={styles.rightView}>
                <Text style={[styles.name, fontStyle.bold, { fontSize: 25 }, { color: colors.text }]}>{person.name}</Text>
                <Text style={[styles.email, fontStyle.regular]}>{person.email}</Text>
                <View style={styles.dateView}>
                    <Text style={[fontStyle.regular, { color: colors.text }]}>{person.createdDate.toDateString()}</Text>
                </View>
                <Text style={[fontStyle.regular, styles.category, { color: myColor.black, fontSize: 15 }]}>{person.category}</Text>
                <Text style={[fontStyle.regular, styles.comments, { color: colors.text }]} numberOfLines={3}>{person.comments}</Text>
                <Image style={styles.image} source={{ uri: person.image }} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: myColor.gray
    },
    leftView: {
        padding: 5
    },
    rightView: {
        flex: 1,
        padding: 5,
        marginRight: 10
    },
    avatar: {
        borderColor: myColor.orange,
        borderWidth: 2,
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2
    },
    name: {
        marginRight: 5
    },
    email: {
        color: myColor.orange
    },
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
        marginTop: 5
    },
    comments: {
        marginTop: 10
    },
    image: {
        height: 150,
        marginTop: 15
    },
    category: {
        borderWidth: 1,
        borderRadius: 10,
        width: 70,
        height: 30,
        textAlign: 'center',
        backgroundColor: myColor.lightOrange,
        marginTop: 20,
        paddingTop: 7
    }
});
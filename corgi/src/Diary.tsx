import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { fontStyle } from './style/fontStyle';

export default function App() {
    return (<SafeAreaView style={styles.safeAreaView}>
        <Text style={fontStyle.regular}>This is Diary Page</Text>
    </SafeAreaView>);
}
const styles = StyleSheet.create({
    safeAreaView: { flex: 1 }
})
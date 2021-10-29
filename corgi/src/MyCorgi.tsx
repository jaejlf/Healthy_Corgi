import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
    return (<SafeAreaView style={styles.safeAreaView}>
        <Text>This is MyCorgi Page</Text>
    </SafeAreaView>);
}
const styles = StyleSheet.create({
    safeAreaView: { flex: 1 }
})
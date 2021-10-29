import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigator from './Navigator';

const styles = StyleSheet.create({
    safeAreaView: { flex: 1 },
})

export default function App() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Navigator />
        </SafeAreaView>
    );
}
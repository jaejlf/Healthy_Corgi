import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    lineup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subtitle: {
        margin: 20,
        marginBottom: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subImg: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
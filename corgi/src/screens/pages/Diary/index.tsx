import React, { useState, useMemo, useRef, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, NativeSyntheticEvent, NativeScrollEvent, Animated, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import faker from 'faker';
import Input from './Input';
import TopBar from '../../../style/TopBar';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
import { fontStyle } from '../../../style/fontStyle';
import { defaultStyle } from '../../../style/defaultStyle';

const imageWidth = 330;
const imageHeight = 200;
const circleWidth = 10;
const circleMargin = circleWidth / 2;
const Diary = () => {
    const theme = useTheme();
    const { colors } = theme;

    const [log, updateLog] = useState<string[]>(new Array<string>());
    const logViews = useMemo(() => {
        return log.map((logItem, index) => {
            return (
                <View style={styles.logView} key={index}>
                    <ScrollView>
                        <View style={styles.innerContainer}>
                            <Image style={[defaultStyle.subImg]} source={require('../../../../assets/img/paw_orange.png')} />
                            <Text style={[fontStyle.regular, styles.dateText, { color: myColor.lightOrange, fontSize: 15 }]}>{faker.date.recent().toDateString()}</Text>
                        </View>
                        <Text style={[styles.logText, fontStyle.regular, { color: colors.text }]}>{logItem}</Text>
                    </ScrollView>
                </View>

            );
        })
    }, [log.length]);

    const animValue = useRef(new Animated.Value(0)).current;
    const animStyle = {
        transform: [{
            translateX: Animated.add(Animated.multiply(animValue, Animated.add(new
                Animated.Value(circleWidth), new Animated.Value(circleMargin))), new
                Animated.Value(5))
        }]
    };
    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.x / imageWidth);
        Animated.timing(animValue, {
            useNativeDriver: true, toValue: index,
            duration: 100
        }).start();
    }, [])
    const flatListRef = useRef<FlatList | null>(null);
    const selectImage = useCallback((index: number) => {
        flatListRef.current?.scrollToIndex({ index });
    }, []);

    //로컬 path URI로 변환
    const pathArr = [
        Image.resolveAssetSource(require('../../../../assets/img/corgi1.jpg')).uri,
        Image.resolveAssetSource(require('../../../../assets/img/corgi2.jpg')).uri,
        Image.resolveAssetSource(require('../../../../assets/img/corgi3.jpg')).uri,
        Image.resolveAssetSource(require('../../../../assets/img/corgi4.jpg')).uri,
        Image.resolveAssetSource(require('../../../../assets/img/corgi5.jpg')).uri
    ]

    let i = 0;
    const imageList = useMemo(() => [1, 2, 3, 4, 5].map((val) => {
        return pathArr[i++];
    }), []);
    const circles = useMemo(() => [1, 2, 3, 4, 5].map((val) => {
        return <View key={val} style={styles.circle} />
    }), []);
    const thumbnails = useMemo(() => imageList.map((val, index) => {
        return <TouchableOpacity onPress={() => { selectImage(index); }} key={index}>
            <Image source={{ uri: val }} style={styles.thumb} /></TouchableOpacity>
    }), []);

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
            <TopBar />
            <View style={styles.flatview}>
                <FlatList ref={flatListRef} horizontal data={imageList} onScroll={onScroll} renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }} />
            </View>
            <View style={styles.iconBar}>
                {circles}
                <Animated.View style={[styles.circle, styles.selected, animStyle]} />
            </View>
            <View style={styles.thumbBar}>
                {thumbnails}
            </View>
            <ScrollView style={styles.logItemView}>{logViews}</ScrollView>
            <Input updateLog={updateLog} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    flatview: {
        width: imageWidth,
        height: imageHeight,
        marginTop: 30
    },
    logItemView: {
        flex: 1
    },
    image: {
        width: imageWidth,
        height: imageHeight
    },
    iconBar: {
        flexDirection: "row",
        padding: 5
    },
    circle: {
        width: circleWidth,
        height: circleWidth,
        borderRadius: circleWidth / 2,
        marginRight: circleMargin,
        backgroundColor: myColor.lightOrange
    },
    selected: {
        position: 'absolute',
        backgroundColor: myColor.orange,
        top: 5
    },
    thumb: {
        width: imageWidth / 6,
        height: imageHeight / 6,
        marginRight: imageWidth / 30,
    },
    thumbBar: {
        flexDirection: "row",
        padding: 10
    },
    logView: {
        width: 330,
        height: 150,
        marginTop: 10,
        flexDirection: 'column',
        padding: 10,
        borderWidth: 1,
        borderColor: myColor.gray,
        borderRadius: 10
    },
    logText: {
        flex: 1,
        marginLeft: 20,
        marginTop: 15
    },
    dateText: {
        marginLeft: 10,
        marginTop: 3
    },
    innerContainer: {
        marginLeft: 10,
        flexDirection: "row"
    }
})

export default Diary;
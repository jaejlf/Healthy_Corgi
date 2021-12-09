import React, { useState, useMemo, useRef, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, NativeSyntheticEvent, NativeScrollEvent, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Input from './Input';
import TopBar from '../../../style/TopBar';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
import { fontStyle } from '../../../style/fontStyle';
import { FlatList } from "react-native";
import faker from 'faker';

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
                    <Text style={[styles.logText, fontStyle.regular, { color: colors.text }]}>{logItem}</Text>
                    <Text style={[fontStyle.regular, styles.dateText, { color: myColor.textGray }]}>{faker.date.recent().toDateString()}</Text>
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
    const imageList = useMemo(() => [1, 2, 3, 4, 5].map((val) => {
        return "https://source.unsplash.com/random/1000x800";
    }), []);
    const circles = useMemo(() => [1, 2, 3, 4, 5].map((val) => {
        return <View key={val} style={styles.circle} />
    }), []);
    const thumbnails = useMemo(() => imageList.map((val, index) => {
        return <TouchableOpacity onPress={() => { selectImage(index); }} key={index}><Image
            source={{ uri: val }} style={styles.thumb} /></TouchableOpacity>
    }), []);

    return (
        <SafeAreaView style={styles.safe}>
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
        height: 100,
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
        borderWidth: 1,
        borderColor: myColor.gray,
        borderRadius: 10
    },
    logText: {
        flex: 1,
        fontSize: 20,
        marginLeft: 20
    },
    dateText: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10
    }
})
export default Diary;
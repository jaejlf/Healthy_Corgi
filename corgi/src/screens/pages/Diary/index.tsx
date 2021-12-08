import React, { useState, useMemo, useRef, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, NativeSyntheticEvent, NativeScrollEvent, Animated, TouchableOpacity } from 'react-native';
import Input from './Input';
import TopBar from '../../../style/TopBar';
import { defaultStyle } from '../../../style/defaultStyle';
import { useTheme } from '@react-navigation/native';
import { myColor } from '../../../style/myColors';
import { fontStyle } from '../../../style/fontStyle';
import { FlatList } from "react-native";
import { Colors } from "react-native-paper";

const Diary = () => {
    const theme = useTheme();
    const { colors } = theme;
    const [log, updateLog] = useState<string[]>(new Array<string>());
    const logViews = useMemo(() => {
        return log.map((logItem, index) => {
            return (
                <View style={styles.logView} key={index}>
                    <Text style={[styles.logText, fontStyle.regular, { color: colors.text }]}>{logItem}</Text>
                </View>

            );
        })
    }, [log.length]);
    const imageList = [1, 2, 3, 4, 5].map((val) => {
        return "https://source.unsplash.com/random/1000x800";
    });
    const circles = useMemo(() => [1, 2, 3, 4, 5].map((val) => {
        return <View key={val} style={styles.circle} />
    }), []);
    const animValue = useRef(new Animated.Value(0)).current;
    const animStyle = {
        transform: [{
            translateX: Animated.add(Animated.multiply(animValue,
                Animated.add(new Animated.Value(circleWidth),
                    new Animated.Value(circleMargin))),
                new Animated.Value(5))
        }]
    };
    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.x / imageWidth);
        Animated.timing(animValue, {
            useNativeDriver: true, toValue: index,
            duration: 100
        }).start();
    }, []);
    const thumbnails = useMemo(() => imageList.map((val, index) => {
        return <TouchableOpacity key={index} onPress={()=>{selectImage(index);}}>
            <Image source={{ uri: val }} style={styles.thumb} />
        </TouchableOpacity>
    }), []);
    const flatListRef = useRef<FlatList | null>(null);
    const selectImage = useCallback((index: number) => {
        flatListRef.current?.scrollToIndex({ index });
    }, []);

    return (
        <SafeAreaView style={styles.safe}>
            <TopBar />
            <View style={styles.flatview}>
                <FlatList ref={flatListRef} horizontal data={imageList} onScroll={onScroll} renderItem={({ item }) => {
                    return <Image source={{ uri: 'item' }} style={styles.image} />
                }} />
            </View>
            <View style={styles.iconBar}>
                {circles}
                <Animated.View style={[styles.circle, styles.selected, animStyle]} />
            </View>
            <View style={styles.thumbBar}>
                {thumbnails}
            </View>
            <View style={styles.view}>{logViews}</View>
            <Input updateLog={updateLog} />
        </SafeAreaView>
    )
}

const imageWidth = 240;
const imageHeight = imageWidth * 3 / 4;
const circleWidth = 10;
const circleMargin = circleWidth / 2;
const styles = StyleSheet.create({
    view: {
        flex: 4
    },
    flatview: {
        width: imageWidth,
        height: imageHeight
    },
    safe: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logView: {
        width: '100%',
        height: 55,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: myColor.gray
    },
    logText: {
        flex: 1,
        fontSize: 20,
        marginLeft: 20
    },
    image: {
        height: 150,
        marginTop: 15
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
        backgroundColor: Colors.cyan100
    },
    selected: {
        position: 'absolute',
        backgroundColor: Colors.cyan500,
        top: 5
    },
    thumb: {
        width: imageWidth / 6,
        height: imageHeight / 6,
        marginRight: imageWidth / 30
    },
    thumbBar: {
        flexDirection: "row",
        padding: 5
    }
});
export default Diary;
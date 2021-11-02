import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Diary from "./pages/Diary";
import Todo from "./pages/Todo";
import Info from "./pages/Info";
import MyCorgi from "./pages/MyCorgi";

export default function Navigator() {
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState([
        { key: 'scene1', title: 'Diary', icon: 'book-open', color: '#F88929' },
        { key: 'scene2', title: 'Todo', icon: 'check-box-outline', color: '#F88929' },
        { key: 'scene3', title: 'Info', icon: 'information-variant', color: '#F88929' },
        { key: 'scene4', title: 'MyCorgi', icon: 'dog', color: '#F88929' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        scene1: Diary,
        scene2: Todo,
        scene3: Info,
        scene4: MyCorgi
    });
    return <BottomNavigation navigationState={{ index, routes }}
        onIndexChange={setIndex} renderScene={renderScene} />;
}
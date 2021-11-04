import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Diary from "./pages/Diary";
import Todo from "./pages/Todo/index";
import Info from "./pages/Info";
import MyCorgi from "./pages/MyCorgi";
import { myColor } from "../style/myColors";

export default function Navigator() {
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState([
        { key: 'scene1', title: 'Diary', icon: 'book-open', color: myColor.orange },
        { key: 'scene2', title: 'Todo', icon: 'check-box-outline', color: myColor.orange },
        { key: 'scene3', title: 'Info', icon: 'information-variant', color: myColor.orange },
        { key: 'scene4', title: 'MyCorgi', icon: 'settings-outline', color: myColor.orange }
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
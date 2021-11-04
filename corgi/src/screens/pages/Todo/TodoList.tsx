import React from 'react';
import { ScrollView } from 'react-native';
import { defaultStyle } from '../../../style/defaultStyle';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <ScrollView contentContainerStyle={defaultStyle.lineup}>
      <TodoItem />
    </ScrollView>
  );
};
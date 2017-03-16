import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Todo = ({ todos }) => (
    <View>
        {todos.map(todo => (
            <Text>
                {todo.text}
            </Text>
        ))}
    </View>
);

export default Todo;
import React, { Component } from 'react';
import { Text } from 'react-native';

const Todo = ({ todos }) => (
   <Text>{JSON.stringify(todos[0])}</Text>
);

export default Todo;
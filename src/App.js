import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Reudx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom
import TodoList from './containers/TodoList';
import reducers from './reducers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
        <View style={styles.container}>
            {/*<Text>
                "asdf"
            </Text>*/}
            <TodoList />
        </View>
    </Provider>
);

export default App;
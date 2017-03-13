import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <AddTodo />
        <ShowTodoList />
      </View>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <View>
        todos.map(todo => {
          <Text>
            1111
          </Text>
        });
      </View>
    );
  }
}

export default ShowTodoList;
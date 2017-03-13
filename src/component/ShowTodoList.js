import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <Text>ShowTodoList</Text>
    );
  }
}

export default ShowTodoList;
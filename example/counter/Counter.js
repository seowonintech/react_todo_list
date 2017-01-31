// React Native
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import { INCREMENT, DECREMENT, increment, decrement } from './actions';

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

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    // onIncrement = () => {
    //   alert("INCREMENT");
    // }
    //
    // onDecrement = () => {
    //   alert("DECREMENT");
    // }

    render() {
      const { count, onIncrement, onDecrement } = this.props;

      return (
        <View style={ styles.container }>
          <Text>{ count }</Text>
          <Button
            title={ INCREMENT }
            onPress={ onIncrement }
          />
          <Button
            title={ DECREMENT }
            color="#841584"
            onPress={ onDecrement }
          />
        </View>
      );
    }
}

let mapStateToProps = (state) => ({
  count: state.counter.count
});

let mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

Counter = connect(mapStateToProps)(Counter);
Counter = connect(null, mapDispatchToProps)(Counter);

export default Counter;

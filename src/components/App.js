import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, reset, inputNumberChange,  } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} timesClicked={this.props.timesClicked}onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} onReset={this.props.onReset}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()), 
    onReset: () => dispatch(reset()),
    onInputNumber:() => dispatch(inputNumber()),
    onInputNumberChange:(number)=> dispatch(inputNumberChange(number)),
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted,
      timesClicked: state.timesClicked
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
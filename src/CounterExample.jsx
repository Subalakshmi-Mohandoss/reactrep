import React, { Component } from 'react';

class CounterExample extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>

        {/* Conditional rendering based on the count value */}
        {this.state.count > 0 ? (
          <button onClick={this.decrement}>Decrement</button>
        ) : null}

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterExample;

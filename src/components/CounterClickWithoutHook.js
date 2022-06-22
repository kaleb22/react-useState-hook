import React from "react";

class CounterClickWithoutHook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  updateCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.updateCounter}> Click Me </button>
        <h1>{ this.state.counter }</h1>
      </div>
    )
  }

}

export default CounterClickWithoutHook;
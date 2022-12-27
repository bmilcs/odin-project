import React, { Component } from "react";
import "./Counter.css";

// const ErrorComponent = () => <div>{nonExistent}</div>;

export class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State From Props");
    // transfer props to state
    // not used frequently
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    // network requests, initial loading of component
    // if this.state.initializing = true,
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 1500);
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // lose performance if used incorrectly
    // do not call render() again
    if (
      nextProps.ignoreProp &&
      this.state.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      console.log("---------------------------------------");

      return false;
    }
    console.log("Should Component Update - RENDER");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // gets passed to componentDidUpdate as a 3rd parameter
    // tell dom, positions of list views,
    console.log("Get Snapshot Before Update");
    return null;
  }

  render() {
    console.log("Render", this.state.error);

    // if (this.props.showErrorComponent && this.state.error) {
    //   return <div>We have encountered an error! </div>;
    // }

    if (this.state.initializing) {
      return <div>Initializing...</div>;
    }

    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div className="counter">Counter {this.state.counter}</div>
        {/* <div className="seed">Seed {this.state.seed}</div> */}
        {/* {this.props.showErrorComponent ? <ErrorComponent /> : null} */}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // after render
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    // on removal from the dom
    console.log("Component Will Unmount");
    console.log("---------------------");
  }

  componentDidCatch(error, info) {
    // error catching
    console.log("Component Did Catch");
    this.setState(error, info);
  }
}

export default Counter;

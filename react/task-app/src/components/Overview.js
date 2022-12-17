import React from "react";

class Overview extends React.Component {
  render() {
    const { list } = this.props;
    const listItems = list.map((item, i) => <li key={i}>{item}</li>);
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Overview;

import React from "react";

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Contatore corrente: {count}</p>
        <button onClick={this.handleClick}>Clicca</button>
      </div>
    );
  }
}

export default ClickCounter;

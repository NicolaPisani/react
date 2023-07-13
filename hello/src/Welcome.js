import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>
          Welcome, <strong>{name}</strong>!
        </p>
        <Age age={age} />
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Nico",
};

export default Welcome;

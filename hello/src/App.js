import React from "react";

const Age = (props) => {
  return <p>Your age is {props.age}.</p>;
};

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>
          Welcome, <strong>{name}</strong>!
        </p>
        {age && <Age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Nico",
};

export default Welcome;

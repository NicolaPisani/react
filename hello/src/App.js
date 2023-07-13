import React from "react";

const Age = (props) => {
  return <p>Your age is {props.age}.</p>;
};

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    const shouldRenderAge = age > 18 && age < 65;
    return (
      <div>
        <p>
          Welcome, <strong>{name}</strong>!
        </p>
        {shouldRenderAge && <Age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Nico",
};

export default Welcome;

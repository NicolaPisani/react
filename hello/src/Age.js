import React from "react";

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return (
      <div>
        {age > 18 ? <p>Your age is {age}.</p> : <p>You are very young!</p>}
      </div>
    );
  }
}

export default Age;

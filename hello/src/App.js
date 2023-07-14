import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My App</h1>
        <Counter
          initialValue={10}
          incrementAmount={2}
          incrementInterval={500}
        />
      </div>
    );
  }
}

export default App;

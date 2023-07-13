import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Nico</strong>} age={25} />
      </div>
    );
  }
}

export default App;

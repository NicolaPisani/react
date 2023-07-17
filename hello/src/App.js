import React from "react";
import LanguageProvider from "./LanguageProvider";
import DisplayLanguage from "./DisplayLanguage";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Language App</h1>
        <LanguageProvider>
          <DisplayLanguage />
        </LanguageProvider>
      </div>
    );
  }
}

export default App;

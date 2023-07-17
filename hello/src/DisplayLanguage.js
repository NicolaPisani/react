import React from "react";
import LanguageContext from "./LanguageContext";

class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => (
          <div>
            <h1>Current Language: {language}</h1>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default DisplayLanguage;
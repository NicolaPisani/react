import React from "react";
import LanguageContext from "./LanguageContext";
import ClickCounter from "./ClickCounter";
import DisplayLanguage from "./DisplayLanguage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "English", // Imposta la lingua predefinita
    };
  }

  handleChangeLanguage = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div>
        <h1>Language App</h1>
        <select onChange={this.handleChangeLanguage}>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
        </select>
        <ClickCounter/>
        <LanguageContext.Provider value={selectedLanguage}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

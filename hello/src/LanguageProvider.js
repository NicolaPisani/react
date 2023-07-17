import React from "react";
import LanguageContext from "./LanguageContext";

class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en", // Imposta la lingua predefinita
    };
  }

  handleChangeLanguage = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { language } = this.state;
    const { children } = this.props;

    return (
      <LanguageContext.Provider value={language}>
        <select onChange={this.handleChangeLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
        {children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
import React from "react";
import LanguageContext from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

function App() {
  return (
    <LanguageContext.Provider value="Italiano">
      <div>
        <h1>La mia App</h1>
        <DisplayLanguage />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

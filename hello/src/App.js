import React from "react";
import CarDetails from "./CarDetails";

function App() {
  const initialData = {
    modello: "Fiat 500",
    anno: "2021",
    colore: "Rosso",
  };

  return (
    <div>
      <h1>Dettagli della macchina</h1>
      <CarDetails initialData={initialData} />
    </div>
  );
}

export default App;

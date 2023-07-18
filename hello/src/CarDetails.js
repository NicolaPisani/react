import React, { useRef, useEffect } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  return (
    <form ref={formRef}>
      <label>
        Modello:
        <input type="text" name="modello" defaultValue={initialData.modello} />
      </label>
      <br />
      <label>
        Anno:
        <input type="text" name="anno" defaultValue={initialData.anno} />
      </label>
      <br />
      <label>
        Colore:
        <input type="text" name="colore" defaultValue={initialData.colore} />
      </label>
    </form>
  );
}

export default CarDetails;

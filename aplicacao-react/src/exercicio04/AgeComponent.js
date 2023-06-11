import React, { useState } from "react";

const AgeComponent = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthdateObj = new Date(birthdate);
    const today = new Date();
    const ageDiff = today - birthdateObj;
    const calculatedAge = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  return (
    <div>
      <label>
        Data de Nascimento:
        <input type="date" value={birthdate} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={calculateAge}>Calcular Idade</button>
      {age && <p>Sua idade é: {age} anos.</p>}
    </div>
  );
};

export default AgeComponent;

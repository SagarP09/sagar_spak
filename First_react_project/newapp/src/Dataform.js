import React from "react";
import { useState } from "react";

function Dataform() {
  const [fullname, setfn] = useState();
  const [age, setage] = useState();
  const [finalname, setfinalname] = useState();
  const [fage, setfage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(age);
    setfinalname(fullname);
    setfage(age);
  };

  return (
    <form>
      <input
        type="text"
        name="fn"
        value={fullname}
        placeholder="Name"
        onChange={(e) => setfn(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="age"
        value={age}
        placeholder="Age"
        onChange={(e) => setage(e.target.value)}
      />
      <br />
      <button onClick={(e) => onSubmit(e)}>Save</button>

      <br />
      {fullname}
      <br />
      {age}
      <br />
      {finalname}
      <br />
      {fage}
    </form>
  );
}

export default Dataform;

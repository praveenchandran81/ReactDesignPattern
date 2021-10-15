// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect} from "react";
import styled from "styled-components";

const InputError = styled.p`
  color: red;
`;

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");

  const handleSubmitHandler = () => {
    console.log(`The value of the name is ${name}`);
  };

  useEffect(()=>{
    if (name && name.length < 3) {
        setNameInputError("Name must have at least 3 letters");
      } else {
        setNameInputError("");
      }
  },[name])

  

  return (
    <form>
      <label name="lblName" htmlFor="name">
        Name
      </label>
      {nameInputError && <InputError>{nameInputError}</InputError>}
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      ></input>
      <button type="button" onClick={handleSubmitHandler}>
        Submit
      </button>
    </form>
  );
};

import { useState } from "react/cjs/react.development";
import { UnControlledOnBoardingFlow } from "./UnControlledOnBoardingFlow";

const Step1 = ({ goToNext }) => {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Step1</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        name="name"
        value={name}
      ></input>
      <button onClick={() => goToNext({ name: name })}>Next</button>
    </>
  );
};
const Step2 = ({ goToNext }) => {
  const [age, setAge] = useState(0);

  return (
    <>
      <h1>Step2</h1>
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        name="age"
        value={age}
      ></input>
      <button onClick={() => goToNext({ age: age })}>Next</button>
    </>
  );
};
const Step3 = ({ goToNext }) => {
  const [place, setPlace] = useState("");

  return (
    <>
      <h1>Step3</h1>
      <input
        type="text"
        placeholder="Place"
        onChange={(e) => setPlace(e.target.value)}
        name="place"
        value={place}
      ></input>
      <button onClick={() => goToNext({ place: place })}>Next</button>
    </>
  );
};
const Step4 = ({ goToNext }) => {
  const [country, setCountry] = useState("");

  return (
    <>
      <h1>Step4</h1>
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
        name="country"
        value={country}
      ></input>
      <button onClick={() => goToNext({ country: country })}>Next</button>
    </>
  );
};

const Finish = () => {
  return (
    <div>
      <h1>Finished Successfully!!</h1>
    </div>
  );
};

export const AppUOBF = () => {
   
  const onFinish = (fullData) => {
    console.log("fullData", fullData);
    alert("completed the process");
    
  };

  return (
    <>
      
        <UnControlledOnBoardingFlow onFinish={(data) => onFinish(data)}>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Finish/>
        </UnControlledOnBoardingFlow>
       
      
    </>
  );
};

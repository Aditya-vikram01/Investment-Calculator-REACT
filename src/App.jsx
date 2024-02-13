import { Header } from "./Components/Header.jsx";
import { Result } from "./Components/Results.jsx";
import UserInput from "./Components/UserInput.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  function OnChangeHandler(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={OnChangeHandler} />
      {!inputIsValid && (
        <p className='center'>Please enter duration greater than 0</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;

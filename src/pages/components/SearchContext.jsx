import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const InputProvider = props => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  console.log(inputValue);

  function handleSubmit() {
    console.log(inputValue);
    <InfScrImg input={inputValue} />;
  }

  return <SearchContext.Provider value={[inputValue, setInputValue]}>{props.children}</SearchContext.Provider>;
};

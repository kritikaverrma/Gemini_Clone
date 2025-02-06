import React, { useState, createContext } from "react";
import run from "../config/Gemini.js";

//Step1: Create a context
export const Context = createContext();

//Step2: Provider function that'll be exported and value
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    setRecentPrompt(input);
    setPrevPrompts((prev) => {
      return [...prev, input];
    });
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };
  //onSent("What is react js");
  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    showResults,
    loading,
    resultData,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

import { MainContainer } from "./components/maincontainer";
import { MainRouter } from "./router";
import ResultContext from "./contexts/ResultContext";
import { useState } from "react";

export default function App (){
  const [result, setResult] = useState("");
  return (
    <MainContainer>
      <ResultContext.Provider value={{result, setResult}}  >
        <MainRouter />
      </ResultContext.Provider>
    </MainContainer>
  );
};

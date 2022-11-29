import { MainContainer } from "./components/maincontainer";
import { MainRouter } from "./router";
import ImcContext from "./contexts/ImcContext";
import { useState } from "react";

export default function App (){
  const [imc, setImc] = useState("");
  return (
    <MainContainer>
      <ImcContext.Provider value={{imc, setImc}}  >
        <MainRouter />
      </ImcContext.Provider>
    </MainContainer>
  );
};

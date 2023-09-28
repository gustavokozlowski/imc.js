import { MainContainer } from "./components/maincontainer";
import ImcContext from "./contexts/ImcContext";
import { useState } from "react";

export default function App() {
  const [imc, setImc] = useState(0);
  return (
    <ImcContext.Provider value={{ imc, setImc }}>
      <MainContainer />
    </ImcContext.Provider>
  );
}

import { Header } from "./components/header";
import { MainContainer } from "./components/maincontainer";
import { MainRouter } from "./router";

function App() {
  return (
    <MainContainer>
      <Header />
      <MainRouter />
    </MainContainer>
  );
}

export default App;

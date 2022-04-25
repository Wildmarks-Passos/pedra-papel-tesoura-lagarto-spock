import { Container } from './AppStyle'

import Home from "./pages/Home";

import GlobalStyle from "./Global/globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  );
}

export default App;

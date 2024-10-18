import styled from "styled-components";
import Home from "./features/Main/Home";
import GlobalStyles from "./styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./features/albums/Album";

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: url("/src/assets/image/desktop.png");
  @media (min-width: 800px) {
    height: 1124px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/album",
    element: <Album />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <RouterProvider router={router} />
        {/* <Home/> */}
      </AppContainer>
    </>
  );
}

export default App;

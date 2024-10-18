import styled from "styled-components";
import Home from "./features/Main/Home";
import GlobalStyles from "./styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./features/albums/Album";
import Unknown from "./ui/unknown/Unknown";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: url("/desktop.png");
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
    children: [
      {
        index: true,
        element: <Album />,
      },
      {
        path: "ablum",
        element: <Album />,
      },
      {
        path: "*",
        element: <Unknown/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </>
  );
}

export default App;

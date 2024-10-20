import styled from "styled-components";
import Home from "./features/Main/Home";
import GlobalStyles from "./styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album, { Loader as AlbumLoader } from "./features/albums/Album";
import Unknown from "./ui/unknown/Unknown";
import { UseContext } from "./context/UseContext";

const AppContainer = styled.div`
  width: 100%;
  height: 1500px;

  background: url("/desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
        path: "album",
        element: <Album />,
        loader: AlbumLoader,
      },
      {
        path: "*",
        element: <Unknown />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <UseContext>
          <RouterProvider router={router} />
        </UseContext>
      </AppContainer>
    </>
  );
}

export default App;

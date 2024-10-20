import styled from "styled-components";
import Nav from "../../ui/Nav";
// import Album from "../albums/Album";
import { Outlet } from "react-router-dom";

const Layout = styled.div`
  @media (min-width: 800px) {
    display: flex;
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: flex;
    width: 80%;
    border-radius: 50px;
  }
  /* background-color: var(--color-brand-30); */
  /* For Safari compatibility */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`;

const Home = () => {

  

  return (
    <Layout>
      <Nav />
      <Outlet/>
      {/* <Album /> */}
      {/* <header className="header"></header> */}
    </Layout>
  );
};


export default Home;

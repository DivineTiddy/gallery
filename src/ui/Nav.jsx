//  this is nav section

// styles fuctionality
import styled from "styled-components";
import Text from "./Text";
import Dot from "../assets/icon/Dot";
import heart from "../assets/image/heart 1.png";
import album from "../assets/image/album.png";
import recently from "../assets/image/recently.png";
import recycle from "../assets/image/recycle.png";
import profile from "../assets/image/Ellipse.png";
import { Link } from "react-router-dom";
import { UseValue } from "../context/UseContext";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 67px;
  padding: 40px 0px;
  background-color: var(--color-brand-25);
  backdrop-filter: blur(54px); /* Blur to create frosted glass effect */
  @media (min-width: 800px) {
    width: 45%;
    height: 100%;
  }
  .headerLayout {
    height: auto;
    width: 80%;
  }
  .categories {
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .userProfile {
    height: auto;
    width: 80%;
    display: flex;
    align-items: center;
  }
  .span {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    width: auto;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 0px 16px;

    cursor: pointer;
    &:hover {
      background-color: var(--color-white-40);
      border-radius: 50px;
      border: 1px solid var(--color-white-100);
    }
  }
  .hover {
    background-color: var(--color-white-40);
    border-radius: 50px;
    border: 1px solid var(--color-white-100);
  }
  .link {
    text-decoration: none;
  }
`;
// render component
const Nav = () => {
  const { clickAlbum, clickRecently, clickFavorites, clickBin, dispatch } =
    UseValue();
  return (
    <Layout>
      <div className="headerLayout">
        <span className="span">
          <Text as="h1">Gallery</Text> <Dot />
        </span>
        <Text as="h6">All Photos</Text>
      </div>
      <div className="categories">
        <div className={clickFavorites ? "container hover" : "container"}>
          <img src={heart} style={{ width: "30px", height: "30px" }} />
          <Link
            onClick={() => dispatch({ type: "clickFavorites" })}
            className="link"
            to="*"
          >
            <Text as="h3"> Favorites</Text>
          </Link>
        </div>
        <div className={clickAlbum ? "container hover" : "container"}>
          <img src={album} style={{ width: "30px", height: "30px" }} />
          <Link
            onClick={() => dispatch({ type: "clickAlbum" })}
            className="link"
            to="ablum"
          >
            <Text as="h3"> Albums</Text>
          </Link>
        </div>
        <div className={clickRecently ? "container hover" : "container"}>
          <img src={recently} style={{ width: "30px", height: "30px" }} />
          <Link
          onClick={() => dispatch({ type: "clickRecently" })}
           className="link" to="*">
            <Text as="h3"> Recently Added</Text>
          </Link>
        </div>
        <div className={clickBin ? "container hover" : "container"}>
          <img src={recycle} style={{ width: "30px", height: "30px" }} />
          <Link 
           onClick={() => dispatch({ type: "clickBin" })}
           className="link" to="*">
            <Text as="h3"> Recycle Bin</Text>
          </Link>
        </div>
      </div>
      <div className="userProfile">
        <img src={profile} style={{ width: "120px", height: "120px" }} />

        <span style={{ width: "146px", height: "52px" }}>
          <Text type="user">John Bill @john_bill3110</Text>
        </span>
      </div>
    </Layout>
  );
};

export default Nav;

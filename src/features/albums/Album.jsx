import styled from "styled-components";
import Text from "../../ui/Text";
import beach from "../../assets/image/beach.png";
import { GetAlbumByName } from "../../service/albumApi";
import { useLoaderData } from "react-router-dom";

const Layout = styled.div`
  background-color: var(--color-brand-30);
  backdrop-filter: blur(10px); /* Blur to create frosted glass effect */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (min-width: 800px) {
    width: 55%;
  }
  .searchLayout {
    height: auto;
    width: 80%;
    padding: 20px 0px;
  }
  .container {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  }
  .container::-webkit-scrollbar {
    display: none;
  }

  .imageLayout {
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 35px;
  }
`;

const Album = () => {
  const album = useLoaderData();
  console.log(album);

  return (
    <Layout>
      <div className="searchLayout">
        <span>
          <Text as="h2">My Albums</Text>
          <Text as="h6">6 Albums</Text>
        </span>
        <form>
          <input
            autoFocus
            autoCorrect="true"
            autoComplete="true"
            style={{
              color: "white",
              fontSize: "20px",
              padding: "0px 10px",
              border: "1px solid white",
              outline: "none",
              width: "100%",
              height: "50px",
              backgroundColor: "inherit",
            }}
            type="search"
            placeholder="nature"
          />
        </form>
      </div>
      <div className="container">
        <div className="imageLayout">
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
          <img src={beach} style={{ width: "259px", height: "auto" }} />
        </div>
      </div>
    </Layout>
  );
};

export async function Loader() {
  const album = GetAlbumByName();
  return album;
}

export default Album;

import styled from "styled-components";
import Text from "../../ui/Text";
// import beach from "../../assets/image/beach.png";
import { GetAlbumByName } from "../../service/albumApi";
import { useLoaderData , useNavigation } from "react-router-dom";
import ListOfAlbum from "./ListOfAlbum";
import { UseValue } from "../../context/UseContext";

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
    height: 400px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    @media (min-width: 800px) {
      height: 400px;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }

  .imageLayout {
    width: auto;
    height: 309px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    list-style: none;
    padding: 0;
    margin: 0;
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: auto auto auto auto;
    }
  }
`;

const Album = () => {
  const { photos } = useLoaderData();
  const all = photos.length
  const {dispatch , searchValue } = UseValue()
  const navigation = useNavigation()
  GetAlbumByName({id:searchValue})

  const isLoading = navigation.state === "loading"


  
  // const  data  = useLoaderData();


  return (
    <Layout>
      <div className="searchLayout">
        <span>
          <Text as="h2">My Albums</Text>
          <Text as="h6">{all} Albums</Text>
        </span>
        <form>
          <input
          onChange={(e)=>dispatch({type:"search" , payLoad:e.target.value})}
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
              borderRadius:"20px"
            }}
            type="search"
            placeholder="nature"
          />
        </form>
      </div>
      <div className="container">
        {isLoading && <p>hello</p>}
        <ul className="imageLayout">
          {photos.map((item) => (
            <ListOfAlbum item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function Loader() {
  const album = GetAlbumByName();
  return album;
}

export default Album;

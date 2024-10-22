import styled from "styled-components";
import Text from "../../ui/Text";
import ListOfAlbum from "./ListOfAlbum";
import { UseValue } from "../../context/UseContext";
import { useState } from "react";
import Loading from "../../ui/Loading";

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
 
  const { dispatch, data , isLoading } = UseValue();
  const { photos } = data;
  const [value , setValue] = useState("")

  function HandleSubmit(e) {
    e.preventDefault();
    dispatch({type:"search" , payLoad: value})
  }

  return (
    <Layout>
      <div className="searchLayout">
        <span>
          <Text as="h2">My Albums</Text>
          <Text as="h6"> Albums</Text>
        </span>
        <form onSubmit={HandleSubmit}>
          <input
            onChange={(e) =>
             setValue(e.target.value)
            }
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
              borderRadius: "20px",
            }}
            type="search"
            placeholder="example nature"
          />
        </form>
      </div>
      <div className="container">
        <ul className="imageLayout">
          {isLoading ? <Loading/> : photos && photos.length > 0 ? (
            photos.map((item) => <ListOfAlbum item={item} key={item.id} />)
          ) : (
            <p>no data</p>
          )}
        </ul>
      </div>
    </Layout>
  );
};


export default Album;

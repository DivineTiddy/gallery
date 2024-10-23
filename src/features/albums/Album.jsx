import styled from "styled-components";
import Text from "../../ui/Text";
import ListOfAlbum from "./ListOfAlbum";
import { UseValue } from "../../context/UseContext";
import { useState } from "react";
import Loading from "../../ui/Loading";
import Error from "../../ui/unknown/Error";

const Layout = styled.div`
  background-color: var(--color-brand-30);
  backdrop-filter: blur(10px); /* Blur to create frosted glass effect */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-top: 250px;
  @media (min-width: 800px) {
    width: 55%;
    padding-top: 0px;

  }
  .searchLayout {
    height: auto;
    width: 80%;
    padding: 20px 0px;
  }
  .container {
    width: 100%;
    height: 800px;
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
  .custom-input::placeholder{
    color: white;
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
  const allAlbum =photos && photos.length
  const [value , setValue] = useState("")

  function HandleSubmit(e) {
    e.preventDefault();
    dispatch({type:"search" , payLoad: value})
    setValue("")
  }

  return (
    <Layout>
      <div className="searchLayout">
      <span>
          <Text as="h2">My Albums</Text>
        </span>
        <span>
          <Text as="h6">{allAlbum} Albums</Text>
        </span>
        <form onSubmit={HandleSubmit}>
          <input
          className="custom-input"
            onChange={(e) =>
             setValue(e.target.value)
            }
            autoFocus
            autoCorrect={true}
            autoComplete={true}
            spellCheck={true}
            style={{
              color: "white",
              fontSize: "12px",
              padding: "0px 10px",
              border: "1px solid white",
              outline: "none",
              width: "100%",
              height: "50px",
              backgroundColor: "inherit",
              borderRadius: "20px",
              
            
            }}
            type="search"
            placeholder="car"
          />
        </form>
      </div>
      <div className="container">
        <ul className="imageLayout">
          {isLoading ? <Loading/> : photos && photos.length > 0 ? (
            photos.map((item) => <ListOfAlbum item={item} key={item.id} />)
          ) : (
          <Error/>
          )}
        </ul>
      </div>
    </Layout>
  );
};


export default Album;

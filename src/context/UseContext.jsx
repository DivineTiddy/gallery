import { createContext, useContext, useEffect, useReducer } from "react";
import propTypes from "prop-types";
const ContextProvider = createContext();

const apiKey = "1CmOFAU0ddD2A3tBfbJx0y0hTmQe8Ku1FZG2WJQl8Z92mtseiBmHqGCQ";
const url = "https://api.pexels.com/v1";

const inistailState = {
  clickAlbum: true,
  clickRecently: false,
  clickFavorites: false,
  clickBin: false,
  searchValue: "car",
  isClick: false,
  data: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "clickAlbum":
      return {
        ...state,
        clickAlbum: true,
        clickRecently: false,
        clickFavorites: false,
        clickBin: false,
        isLoading: false,
        isClick:false

      };
    case "clickRecently":
      return {
        ...state,
        clickAlbum: false,
        clickRecently: true,
        clickFavorites: false,
        clickBin: false,
      };
    case "clickFavorites":
      return {
        ...state,
        clickAlbum: false,
        clickRecently: false,
        clickFavorites: true,
        clickBin: false,
        isClick:false

      };
    case "clickBin":
      return {
        ...state,
        clickAlbum: false,
        clickRecently: false,
        clickFavorites: false,
        clickBin: true,
        isClick:false
      };
    case "isOpen":
      return { ...state, isClick: action.payLoad };

    case "loading":
      return { ...state, isLoading: true };
    case "search":
      return { ...state, searchValue: action.payLoad };
    case "data":
      return { ...state, data: action.payLoad, isLoading: false };
    default:
      break;
  }
};

const UseContext = ({ children }) => {
  const [
    {
      clickAlbum,
      clickRecently,
      clickFavorites,
      clickBin,
      searchValue,
      data,
      isLoading,
      isClick,
    },
    dispatch,
  ] = useReducer(Reducer, inistailState);
  useEffect(
    function () {
      async function searchPhoto() {
        dispatch({ type: "loading" });
        try {
          const res = await fetch(`${url}/search?query=${searchValue}`, {
            method: "GET",
            headers: {
              Authorization: apiKey, // Add the API key in the Authorization header
            },
          });
          const data = await res.json();
          // console.log(data);

          dispatch({ type: "data", payLoad: data });
        } catch (error) {
          console.log(error);
        }
      }
      searchPhoto();
    },
    [searchValue]
  );
  return (
    <ContextProvider.Provider
      value={{
        clickAlbum,
        clickRecently,
        clickFavorites,
        clickBin,
        searchValue,
        dispatch,
        data,
        isLoading,
        isClick
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
function UseValue() {
  const Context = useContext(ContextProvider);
  return Context;
}

UseContext.propTypes = {
  children: propTypes.object,
};

export { UseContext, UseValue };

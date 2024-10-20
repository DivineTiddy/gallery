import { createContext, useContext, useReducer } from "react";
import propTypes from "prop-types";
const ContextProvider = createContext();

const inistailState = {
  clickAlbum: true,
  clickRecently: false,
  clickFavorites: false,
  clickBin: false,
  searchValue:"car",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "clickAlbum":
      return { ...state, clickAlbum: true , clickRecently:false , clickFavorites:false , clickBin:false};
    case "clickRecently":
      return { ...state, clickAlbum: false , clickRecently:true , clickFavorites:false , clickBin:false};
    case "clickFavorites":
      return { ...state, clickAlbum: false , clickRecently:false , clickFavorites:true , clickBin:false};
    case "clickBin":
      return { ...state,clickAlbum: false , clickRecently:false , clickFavorites:false , clickBin:true };
    case "search":
      return {...state , searchValue:action.payLoad}
    default:
      break;
  }
};

const UseContext = ({ children }) => {
  const [{ clickAlbum, clickRecently, clickFavorites, clickBin ,searchValue }, dispatch] =
    useReducer(Reducer, inistailState);
  return (
    <ContextProvider.Provider
      value={{
        clickAlbum,
        clickRecently,
        clickFavorites,
        clickBin,
        searchValue,
        dispatch,
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

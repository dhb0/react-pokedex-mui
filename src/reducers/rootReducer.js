import { combineReducers } from "redux";
import {
  pokemonDataReducer,
  dataToDisplayReducer,
  catchedPokemonsReducer,
  favouritePokemonsReducer,
  loadingReducer,
} from "./dataReducer";
import { alertReducer } from "./alertReducer";
import { currentPaginationReducer } from "./paginationReducers";
import { themeReducer } from "./themeReducer";

export default combineReducers({
  pokemons: pokemonDataReducer,
  dataToDisplay: dataToDisplayReducer,
  catchedPokemons: catchedPokemonsReducer,
  favourites: favouritePokemonsReducer,
  loading: loadingReducer,
  alert: alertReducer,
  currentPagination: currentPaginationReducer,
  theme: themeReducer,
});

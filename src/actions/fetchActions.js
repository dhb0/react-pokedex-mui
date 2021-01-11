import axios from "axios";

export const fetchPokemonList = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1050"
    );
    dispatch({
      type: "FETCH_DATA",
      payload: response.data.results,
    });
  };
};



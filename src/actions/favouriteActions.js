export const addToFavs = (data) => {
  return {
    type: "ADD_TO_FAVS",
    payload: data,
  };
};

export const unfavPokemon = (id) => {
  return {
    type: "UNFAV_POKEMON",
    payload: id,
  };
};

export const unfavAll = () => {
  return {
    type: "UNFAV_ALL",
  };
};

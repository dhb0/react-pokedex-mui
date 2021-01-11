export const catchPokemon = (data) => {
  return {
    type: "CATCH_POKEMON",
    payload: data,
  };
};

export const releaseOnePokemon = (id) => {
  return {
    type: "RELEASE_ONE",
    payload: id,
  };
};

export const releaseAllPokemons = () => {
  return {
    type: "RELEASE_ALL",
  };
};

const INITIAL_FAVOURITES = JSON.parse(localStorage.getItem("favourites")) || [];

const INITIAL_CATCHED_POKEMONS =
  JSON.parse(localStorage.getItem("catchedPokemons")) || [];

export const pokemonDataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return payload;
  }
  return state;
};

export const dataToDisplayReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return payload;
    case "A_TO_Z":
      return [...state].sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
    case "DEFAULT_SORTING":
      return payload;
  }
  return state;
};

export const catchedPokemonsReducer = (
  state = INITIAL_CATCHED_POKEMONS,
  { type, payload }
) => {
  switch (type) {
    case "CATCH_POKEMON":
      return [...state, payload];
    case "RELEASE_ALL":
      return [];
    case "RELEASE_ONE":
      return [...state].filter((item) => item.id !== payload);
  }
  return state;
};

export const favouritePokemonsReducer = (
  state = INITIAL_FAVOURITES,
  { type, payload }
) => {
  switch (type) {
    case "ADD_TO_FAVS":
      return [...state, payload];
    case "UNFAV_POKEMON":
      return [...state].filter((item) => item.id !== payload);
    case "UNFAV_ALL":
      return [];
  }
  return state;
};

export const loadingReducer = (state = true, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return false;
  }
  return state;
};

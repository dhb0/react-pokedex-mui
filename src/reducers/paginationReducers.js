export const currentPaginationReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PAGINATION":
      return payload;
  }
  return state;
};

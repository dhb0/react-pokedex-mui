export const sortData = () => {
  return {
    type: "A_TO_Z",
  };
};

export const defaultSortData = (data) => {
  return {
    type: "DEFAULT_SORTING",
    payload: data,
  };
};

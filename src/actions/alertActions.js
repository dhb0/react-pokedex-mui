export const setAlert = (obj) => {
  return {
    type: "SET_ALERT",
    payload: obj,
  };
};

export const resetAlert = () => {
  return {
    type: "RESET_ALERT",
  };
};

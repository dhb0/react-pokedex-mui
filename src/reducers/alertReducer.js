const INITIAL_ALERT = { show: false, text: null, item: null };

export const alertReducer = (state = INITIAL_ALERT, { type, payload }) => {
  switch (type) {
    case "SET_ALERT":
      return payload;
    case "RESET_ALERT":
      return INITIAL_ALERT;
  }
  return INITIAL_ALERT;
};

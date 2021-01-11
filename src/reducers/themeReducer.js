const INITIAL_THEME = JSON.parse(localStorage.getItem("theme")) || "default";

export const themeReducer = (state = INITIAL_THEME, { type, payload }) => {
  switch (type) {
    case "DARK_MODE":
      return "dark";
    case "DEFAULT_MODE":
      return "default";
  }
  return state;
};

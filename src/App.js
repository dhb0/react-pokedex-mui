import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/pages/Main/Main";
import CatchedPokemons from "./components/pages/CatchedPokemons/CatchedMain";
import PokemonDetails from "./components/pages/PokemonDetails/PokemonDetails";
import Header from "./components/layout/Header";
import MainAlert from "./components/layout/MainAlert";
import TopToggle from "./components/layout/TopToggle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "./actions/index";

const App = () => {
  const dispatch = useDispatch();
  const { catchedPokemons, favourites, alert, theme } = useSelector(
    (state) => state
  );
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("catchedPokemons", JSON.stringify(catchedPokemons));
  }, [catchedPokemons]);

   useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const mainTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme === "default" ? "light" : "dark",
          primary: {
            main: theme === "default" ? "#EF5350" : "#212121",
          },
          secondary: {
            main: theme !== "default" ? "#648dae" : "#ffce31",
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <div>
          <Header />
          <Paper elevation={0} square>
            <Grid
              container
              style={{
                marginTop: "64px",
                padding: "0 10px",
                textAlign: "center",
              }}
            >
              <Grid item md={1} xs={false}></Grid>
              <Grid item md={10} xs={12}>
                <Switch>
                  <Route exact path="/" component={Main}></Route>
                  <Route
                    path="/catchedpokemons"
                    component={CatchedPokemons}
                  ></Route>
                  <Route
                    path="/pokemons/:name"
                    component={PokemonDetails}
                  ></Route>
                </Switch>
              </Grid>
              <Grid item md={1} xs={false}></Grid>
            </Grid>
            {alert.show && <MainAlert />}
          </Paper>
          <TopToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

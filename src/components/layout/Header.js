import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import pokedexLogo from "../../images/pokedexlogo.png";
import pokeball from "../../images/pokeball.png";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { setDarkTheme, setDefaultTheme } from "../../actions/index";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "auto",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  logo: {
    height: "50px",
    cursor: "pointer",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  linkItem: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Header = () => {
  const { catchedPokemons, theme } = useSelector((state) => state);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Grid container>
          <Grid item md={1} xs={false}></Grid>
          <Grid item md={10} xs={12}>
            <Toolbar
              classes={{
                root: classes.toolbar,
              }}
            >
              <img
                src={pokedexLogo}
                alt="App Logo"
                className={classes.logo}
                onClick={() => history.push("/")}
              />
              <div>
                {theme === "default" ? (
                  <IconButton
                    color="inherit"
                    aria-label="Dark Theme"
                    edge="end"
                    onClick={() => dispatch(setDarkTheme())}
                  >
                    <Brightness4Icon style={{ fontSize: "30px" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    color="inherit"
                    aria-label="Light Theme"
                    edge="end"
                    onClick={() => dispatch(setDefaultTheme())}
                  >
                    <Brightness7Icon style={{ fontSize: "30px" }} />
                  </IconButton>
                )}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon style={{ fontSize: "30px" }} />
                </IconButton>
              </div>
            </Toolbar>
          </Grid>
          <Grid item md={1} xs={false}></Grid>
        </Grid>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.linkItem} to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Pokedex Home</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.linkItem} to="/catchedpokemons">
            <ListItem button>
              <ListItemIcon>
                <Badge badgeContent={catchedPokemons.length} color="secondary">
                  <img
                    src={pokeball}
                    alt="Pokeball Icon"
                    style={{ height: "23px", paddingLeft: "1px" }}
                  />
                </Badge>
              </ListItemIcon>
              <ListItemText>Catched Pokemons</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Header;

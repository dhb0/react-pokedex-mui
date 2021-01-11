import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {
  catchPokemon,
  releaseOnePokemon,
  setAlert,
  resetAlert,
} from "../../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  media: {
    height: "350px",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  list: {
    textAlign: "center",
    marginTop: "30px"
  },
  iconImg: {
    height: "80px",
  },
  stat:{
    marginTop: "30px"
  }
});

const PokemonCard = ({ data }) => {
  const classes = useStyles();
  const { catchedPokemons } = useSelector((state) => state);
  const isCatched =
    catchedPokemons !== [] &&
    catchedPokemons.map((item) => item.id).indexOf(data.id) !== -1;
  console.log(isCatched);
  const dispatch = useDispatch();
  const releaseOneHandler = () => {
    dispatch(releaseOnePokemon(data.id));
    dispatch(
      setAlert({
        show: true,
        text: "is released",
        item: data.name,
      })
    );
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };

  const catchHandler = () => {
    dispatch(catchPokemon(data));
    dispatch(
      setAlert({
        show: true,
        text: "is catched",
        item: data.name,
      })
    );
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.sprites.other["official-artwork"].front_default}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Base Experience: <strong>{data.base_experience}</strong>
            <br />
            Height: <strong>{data.height}</strong>
            <br />
            Weight: <strong>{data.weight}</strong>
            <br />
            Order: <strong>{data.order}</strong>
            <br />
            Type(s):{" "}
            {data !== [] &&
              data.types.map((item, index) => {
                return <strong key={index}>{item.type.name} </strong>;
              })}
          </Typography>
          <List className={classes.list}>
            <Typography variant="button" gutterBottom>
              Game Statistics
            </Typography>
            {data.stats.map((item, index) => {
              return (
                <>
                  <ListItem>
                    <ListItemText
                      primary={item.stat.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            <strong>{item.base_stat}</strong>
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider
                    variant="inset"
                    component="li"
                    style={{ margin: "auto" }}
                  />
                </>
              );
            })}
          </List>
        </CardContent>
        {Object.values(data.sprites)
          .filter((item) => typeof item === "string")
          .map((icon, index) => (
            <img src={icon} key={index} className={classes.iconImg} />
          ))}
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        {isCatched ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={releaseOneHandler}
          >
            Release
          </Button>
        ) : (
          <Button variant="contained" onClick={catchHandler}>
            Catch
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PokemonCard;

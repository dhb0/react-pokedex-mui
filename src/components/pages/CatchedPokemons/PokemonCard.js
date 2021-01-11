import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import {
  catchPokemon,
  releaseOnePokemon,
  addToFavs,
  unfavPokemon,
  setAlert,
  resetAlert,
} from "../../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  media: {
    height: "300px",
    objectFit: "cover",
  },
  icon: {
    height: "75px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  favIcon: {
    position: "absolute",
    right: "10px",
    top: "10px",
    zIndex: "100",
    cursor: "pointer",
  },
});

const PokemonCard = ({ data }) => {
  const classes = useStyles();
  const { catchedPokemons, favourites } = useSelector((state) => state);

  const isCatched =
    catchedPokemons !== [] &&
    catchedPokemons.map((item) => item.id).indexOf(data.id) !== -1;
  const dispatch = useDispatch();
  const isFavourite =
    favourites !== [] &&
    favourites.map((item) => item.id).indexOf(data.id) !== -1;

  const favHandler = () => {
    dispatch(addToFavs(data));
    dispatch(
      setAlert({
        show: true,
        text: "is added to your favourites.",
        item: data.name,
      })
    );
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };
  const unfavHandler = () => {
    dispatch(unfavPokemon(data.id));
    dispatch(
      setAlert({
        show: true,
        text: "is removed from your favourites.",
        item: data.name,
      })
    );
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };
  const catchHandler = () => {
    dispatch(catchPokemon(data));
  };
  const releaseHandler = () => {
    if (isFavourite) {
      dispatch(unfavPokemon(data.id));
    }
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

  return (
    <Card className={classes.root}>
      <FavoriteIcon
        fontSize="large"
        className={classes.favIcon}
        onClick={isFavourite ? unfavHandler : favHandler}
        color={isFavourite ? "secondary" : "disabled"}
      />
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
          <Typography variant="body2" color="textSecondary" component="p">
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
                return (
                  <strong key={index} className="text-capitalize">
                    {item.type.name}{" "}
                  </strong>
                );
              })}
          </Typography>
        </CardContent>
        <div className={classes.iconContainer}>
          {Object.values(data.sprites)
            .filter((item) => typeof item === "string")
            .map((icon, index) => (
              <img src={icon} key={index} className={classes.icon} />
            ))}
        </div>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        {isCatched ? (
          <Button variant="contained" color="secondary" onClick={releaseHandler}>
            Release
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={catchHandler}>
            Catch
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PokemonCard;

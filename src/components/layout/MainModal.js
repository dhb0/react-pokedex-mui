import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import {
  releaseAllPokemons,
  unfavAll,
  setAlert,
  resetAlert,
} from "../../actions/";
import { useDispatch } from "react-redux";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  sureButton: {
    padding: "0 24px",
  },
}));

const MainModal = ({ modalOpen, setModalOpen, type }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const deleteAll = () => {
    dispatch(releaseAllPokemons());
    dispatch(unfavAll());
    setModalOpen(false);
    dispatch(setAlert({ show: true, text: "All pokemons have been released" }));
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };

  const unfavHandler = () => {
    dispatch(unfavAll());
    setModalOpen(false);
    dispatch(
      setAlert({ show: true, text: "All favourites have been removed" })
    );
    setTimeout(() => {
      dispatch(resetAlert());
    }, [6000]);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {type === "release"
          ? "Are you sure to release all your pokemons?"
          : "Are you sure to remove all your favourite pokemons?"}
      </h2>
      <p id="simple-modal-description">You will loose alll your data</p>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.sureButton}
          onClick={type === "release" ? deleteAll : unfavHandler}
        >
          Sure
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default MainModal;

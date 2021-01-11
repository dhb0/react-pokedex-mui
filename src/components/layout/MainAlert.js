import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { setAlert, resetAlert } from "../../actions/index";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  alert: {
    position: "fixed",
    top: "100px",
  },
}));

const MainAlert = () => {
  const { alert } = useSelector((state) => state);
  const classes = useStyles();
  return (
    <Alert severity="success" className={classes.alert}>
      <AlertTitle>Success</AlertTitle>
      <strong>{alert.item ? alert.item : null}</strong> {alert.text}
    </Alert>
  );
};

export default MainAlert;

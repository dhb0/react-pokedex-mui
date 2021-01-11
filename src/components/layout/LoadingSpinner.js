import React from "react";
import { CircularProgress, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress disableShrink />
      <Typography variant="h4" gutterBottom>
        LOADING...
      </Typography>
    </div>
  );
};

export default LoadingSpinner;

import React from "react";
import { Pagination } from "@material-ui/lab/";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPagination } from "../../../actions/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px auto",
    display:"flex",
    justifyContent:"center"
  },
}));

const MainPagination = ({ length }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(setCurrentPagination(value));
  };
  const { currentPagination } = useSelector((state) => state);

  return (
    <Pagination
      count={length}
      page={currentPagination}
      onChange={handleChange}
      color="primary"
      className={classes.root}
    />
  );
};

export default React.memo(MainPagination);

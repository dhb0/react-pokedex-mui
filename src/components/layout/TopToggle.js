import React, { useRef, useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "2px solid inherit",
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },
});

const TopToggle = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const toggleEl = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 600);
    });
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      {isVisible ? (
        <div className={classes.root} onClick={topFunction} ref={toggleEl}>
          <IconButton>
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      ) : null}
    </>
  );
};

export default TopToggle;

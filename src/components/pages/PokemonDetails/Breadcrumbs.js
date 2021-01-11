import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
    padding: "15px 10px",
    margin: "20px 0",
  },
}))(Chip);

const CustomizedBreadcrumbs = ({ name }) => {
  const history = useHistory();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={() => history.push("/")}
      />
      <StyledBreadcrumb component="a" href="#" label="Pokemons" />
      <StyledBreadcrumb component="a" href="#" label={capitalizeFirstLetter(name)} />
    </Breadcrumbs>
  );
};

export default CustomizedBreadcrumbs;

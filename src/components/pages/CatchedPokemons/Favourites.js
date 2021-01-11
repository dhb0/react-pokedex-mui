import React, { useState } from "react";
import CustomizedBreadcrumbs from "./FavouriteBreadcrumbs";
import PokemonCard from "./PokemonCard";
import MainModal from "./../../layout/MainModal";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

const Favourites = ({ setValue }) => {
  const { favourites } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <CustomizedBreadcrumbs setValue={setValue} />
      {favourites.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => setModalOpen(true)}
          style={{margin:"20px 0 30px 0"}}
        >
          Remove All
        </Button>
      )}
      <Grid container spacing={3} justify="center" alignItems="stretch">
        {favourites === []
          ? "No items"
          : favourites.map((item, index) => {
              return (
                <Grid item lg={4} md={6} sm={12} key={index}>
                  <PokemonCard data={item} key={index} />
                </Grid>
              );
            })}
      </Grid>
      <MainModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        type="unfav"
      />
    </div>
  );
};

export default Favourites;

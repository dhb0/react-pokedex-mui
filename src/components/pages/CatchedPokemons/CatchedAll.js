import React, { useState } from "react";
import CustomizedBreadcrumbs from "./AllBreadcrumbs";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import MainModal from "../../layout/MainModal";

const CatchedAll = () => {
  const { catchedPokemons } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <CustomizedBreadcrumbs />
      {catchedPokemons.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => setModalOpen(true)}
          style={{ margin: "20px 0 30px 0" }}
        >
          Release All
        </Button>
      )}

      <Grid container spacing={3} justify="center" alignItems="stretch">
        {catchedPokemons === []
          ? "No items"
          : catchedPokemons.map((item, index) => {
              return (
                <Grid item lg={4} md={6} sm={12} key={index + 1}>
                  <PokemonCard data={item} key={index} />
                </Grid>
              );
            })}
      </Grid>
      <MainModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        type="release"
      />
    </div>
  );
};

export default CatchedAll;

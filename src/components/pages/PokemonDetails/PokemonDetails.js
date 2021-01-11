import React, { useEffect, useState } from "react";
import CustomizedBreadcrumbs from "./Breadcrumbs";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonDetailsCard from "./PokemonDetailsCard";
import LoadingSpinner from "../../layout/LoadingSpinner";

const PokemonDetails = () => {
  const { name } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setSingleData(response.data);
      setIsLoaded(true);
    });
  }, []);
  return (
    <div>
      <CustomizedBreadcrumbs name={name} />
      {isLoaded ? <PokemonDetailsCard data={singleData} /> : <LoadingSpinner />}
    </div>
  );
};

export default PokemonDetails;

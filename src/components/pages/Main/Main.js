import React, { useState, useMemo, useCallback } from "react";
import MainBreadcrumbs from "./MainBreadcrumbs";
import MainPagination from "./MainPagination";
import { TextField, Button, ButtonGroup } from "@material-ui/core";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import { useSelector, useDispatch } from "react-redux";
import {
  sortData,
  defaultSortData,
  setCurrentPagination,
} from "../../../actions/index";
import CustomizedTables from "./MainTable";
import LoadingSpinner from "../../layout/LoadingSpinner";
import _ from "lodash";

const Main = () => {
  const [searchKey, setSearchKey] = useState("");
  const { dataToDisplay, pokemons, loading } = useSelector((state) => state);

  const filteredData = useMemo(
    () =>
      dataToDisplay.filter((item) => {
        return item.name.toLowerCase().includes(searchKey.toLowerCase());
      }),
    [dataToDisplay, searchKey]
  );
  const dividedData = useMemo(() => _.chunk(filteredData, 50), [filteredData]);

  const dispatch = useDispatch();

  const inputChangeHandler = useCallback(
    (e) => {
      setSearchKey(e.target.value.toLowerCase());
      dispatch(setCurrentPagination(1));
    },
    [dispatch]
  );
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MainBreadcrumbs />
          <TextField
            required
            id="standard-required"
            label="Filter by Name"
            value={searchKey}
            onChange={inputChangeHandler}
          />
          <br />
          <ButtonGroup
            color="primary"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => dispatch(defaultSortData(pokemons))}>
              Default
            </Button>
            <Button onClick={() => dispatch(sortData())}>
              <SortByAlphaIcon />
            </Button>
          </ButtonGroup>
          <div style={{ margin: "10px 0" }}>
            <strong>{filteredData.length}</strong> items found
          </div>
          <CustomizedTables dividedData={dividedData} />
          <MainPagination length={dividedData.length} />
        </>
      )}
    </div>
  );
};

export default Main;

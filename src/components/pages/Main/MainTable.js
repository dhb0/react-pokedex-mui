import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  link: {
    color: "inherit",
  },
});

const CustomizedTables = ({ dividedData }) => {
  const classes = useStyles();
  const { currentPagination } = useSelector((state) => state);
  console.log(dividedData);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {dividedData.length !== 0 &&
            dividedData[currentPagination - 1].map((item, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">
                    <Typography variant="button" gutterBottom>
                      {item.name.toUpperCase()}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" color="secondary">
                      <Link
                        style={{ color: "inherit" }}
                        to={{
                          pathname: `/pokemons/${item.name}`,
                          state: { url: item.url },
                        }}
                      >
                        DETAILS
                      </Link>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(CustomizedTables);

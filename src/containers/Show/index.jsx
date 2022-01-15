import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ROUTE_PATHS } from "../../utils/PathNames";

const Show = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="d-flex">
              <Link to={ROUTE_PATHS.plotter}>Show dialog</Link>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Show;

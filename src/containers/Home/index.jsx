import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Linktag from "../../components/Linktag";
import { ROUTE_PATHS } from "../../utils/PathNames";

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="d-flex">
              <Linktag to={ROUTE_PATHS.plotter} text={"Show dialog"}></Linktag>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

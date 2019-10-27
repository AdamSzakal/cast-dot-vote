import React from "react";
import Grid from "./components/grid/Grid";
import Voter from "./components/voter/Voter";
import Header from "./components/header/Header";
import GridItem from "./components/grid/GridItem";

import "./reset.css";
import "./App.css";
import "./utils.css";

function App() {
  return (
    <div>
      <Grid>
        <GridItem>
          <Header />
        </GridItem>
      </Grid>
      <Grid>
        <GridItem>
          <Voter />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

import React from "react";
import Grid from "./components/grid/Grid";
import Voter from "./components/voter/Voter";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import GridItem from "./components/grid/GridItem";
import Form from "./components/form/Form";

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

import React from "react";
import Voter from "./components/voter/Voter";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Poll from "./components/poll/Poll";

function App() {
  return (
    <div>
      <Header />
      <Voter />
      <Button />
    </div>
  );
}

export default App;

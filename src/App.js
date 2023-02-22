import React, { useState, useEffect } from "react";
import Karakter from "./components/Karakter";
import "./App.css";
import axios from "axios";
import { response } from "msw";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [param, setParam] = useState("");
  const [swChars, setswChars] = useState();

  function getAPIData(p) {
    axios
      .get("https://swapi.dev/api/people/", { params: { search: p } })
      .then((response) => {
        setswChars(response.data.results);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function aramaYap(e) {
    // console.log(e.target.value);
    setParam(e.target.value);
    getAPIData(e.target.value);
  }

  useEffect(() => {
    getAPIData(param);
  }, []);

  return (
    <div className="App">
      <form>
        <input
          className="input"
          type="search"
          placeholder="SEARCH"
          onChange={aramaYap}
        />
      </form>
      <h1 className="Header">Star Wars Major Characters List</h1>
      <Karakter swChars={swChars} param={param} />
    </div>
  );
};

export default App;

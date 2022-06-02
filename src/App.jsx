import React, { useContext } from "react";
import Nav from "./components/Nav/Nav";
import AppRouter from "./router";
import { globalContext } from "./context/globalState";
import "./app.scss";

function App() {
  const { state, dispatch } = useContext(globalContext);

  return (
    <div className="app">
      <Nav />
      <AppRouter />
      {state.modalToDisplay}
    </div>
  );
}

export default App;

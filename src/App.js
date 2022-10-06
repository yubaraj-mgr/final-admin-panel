import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <div>
      Hello World{" "}
      <Button variant="danger">
        Some Button <i class="fa-solid fa-clock"></i>
      </Button>
    </div>
  );
};

export default App;

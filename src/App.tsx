import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TestPage } from "./pages/Test";

const App: FC = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen text-white bg-gray-800">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TestPage } from "./pages/Test";
import { TokenPage } from "./pages/Token";

const App: FC = () => {
  return (
    <div
      className="absolute top-0 left-0 w-screen min-h-screen text-white bg-gray-800"
      style={{ height: "max-content" }}
    >
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/token" component={TokenPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

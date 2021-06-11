import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";

const App: FC = () => {
  return (
    <div className="w-auto h-screen text-white bg-gray-600">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

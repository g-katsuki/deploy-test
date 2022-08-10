import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Page1 from "./components/Page1"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/page1/`} element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
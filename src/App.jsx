  import React from "react";
  import { Route, Routes } from "react-router-dom";
  import Layout from "./components/Layout";
  import Home from "./pages/Home";
  import Katalog1 from "./pages/Katalog1";
  import Katalog2 from "./pages/Katalog2";
  import Katalog3 from "./pages/Katalog3";

  const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/katalog1" element={<Katalog1 />} />
          <Route path="/katalog2" element={<Katalog2 />} />
          <Route path="/katalog3" element={<Katalog3 />} />
        </Route>
      </Routes>
    );
  };

  export default App;

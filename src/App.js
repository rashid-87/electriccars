import { Routes, Route } from "react-router-dom";
import { Catalog, Charging, Accordion, Information, Notfount } from "./pages";
import { Main, Layout } from "./components";

import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="charging" element={<Charging />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="information" element={<Information />} />
          <Route path="*" element={<Notfount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

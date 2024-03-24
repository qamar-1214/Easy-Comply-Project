import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Integration from "./Pages/Integration";
import MarketPlace from "./Pages/MarketPlace";
import Usage from "./Pages/Usage";
import Verification from "./Pages/Verification";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/verification" element={<Verification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

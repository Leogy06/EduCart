import Dashboard from "./pages/Dashboard";
import Container from "./components/layouts/Container";
import { Route, Routes } from "react-router-dom";
import Carts from "./pages/Carts";
import Items from "./pages/Items";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/browse" element={<Items />} />
      </Routes>
    </Container>
  );
};

export default App;

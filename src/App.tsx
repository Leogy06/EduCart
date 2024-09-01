import Dashboard from "./pages/Dashboard";
import SidePanel from "./components/layouts/SidePanel";

const App = () => {
  return (
    <div>
      <SidePanel />
      <div className=" ms-24">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

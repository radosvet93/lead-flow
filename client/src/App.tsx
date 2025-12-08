import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

const App = () => {

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted">
      <Header />
      <div className="p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

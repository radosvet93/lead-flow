import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Prospects from "./components/Prospects";
import Header from "./components/Header";

// Create a client
const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Prospects />
    </QueryClientProvider>
  );
};

export default App;

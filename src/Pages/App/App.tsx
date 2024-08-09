import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import "./App.css";
import MyLibraries from "../MyLibraries";
import Navbar from "../../Components/Navbar";
import { ShoppingCartProvider } from "../../Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-libraries", element: <MyLibraries /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
};

export default App;

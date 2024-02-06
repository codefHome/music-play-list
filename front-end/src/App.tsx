import { useRoutes } from "react-router";
import routes from "./routes";
import './App.css'



function App() {
  const matchedRoute = useRoutes(
    routes.map((route) => ({
      ...route,
    })),
  );

  return matchedRoute;
}

export default App

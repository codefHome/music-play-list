import { useLocation, useRoutes } from "react-router";
import routes from "./routes";
import "./App.css";
import Header from "./Header";

function App() {
  const location = useLocation();
  const matchedRoute = useRoutes(
    routes.map((route) => ({
      ...route,
    }))
  );

  return (
    <>
      {location.pathname !== "/" && <Header />}
      {matchedRoute}
    </>
  );
}

export default App;

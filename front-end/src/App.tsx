import { Navigate, useLocation, useRoutes } from "react-router";
import routes, { RouteConfig } from "./routes";
import "./App.css";
import Header from "./Header";
import { publicPages } from "./utils/common";
import { deleteToken, getToken } from "./utils/sessionUtils";
import { removeUserId } from "./utils/localStorage";

const publicPagesSet = new Set(publicPages);
const logoutUser = () => {
  deleteToken();
  removeUserId();
};
const ProtectedRoute = ({ element, ...props }: RouteConfig) => {
  const isAuthenticated = !!getToken();

  if (!isAuthenticated && !publicPagesSet.has(props.path)) {
    logoutUser();
    return <Navigate to="/" />;
  }

  if (isAuthenticated && publicPagesSet.has(props.path)) {
    return <Navigate to="/home" />;
  }

  return element;
};
function App() {
  const location = useLocation();
  const matchedRoute = useRoutes(
    routes.map((route) => ({
      ...route,
      // element: <ProtectedRoute {...route} />,
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

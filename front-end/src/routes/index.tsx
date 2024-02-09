import React from "react";
import AddSongView from "../pages/AddSongView";
import ViewListOfSong from "../pages/ViewListOfSongs";
import StatView from "../pages/StatView";
import AuthView from "../pages/AuthView";

export type RouteConfig = {
  path: string;
  element: React.ReactElement;
  children?: RouteConfig[];
};

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <AuthView />,
  },
  {
    path: "/add-song",
    element: <AddSongView />,
  },
  {
    path: "/view-songs",
    element: <ViewListOfSong />,
  },

  {
    path: "/view-Statistics",
    element: <StatView />,
  },
];

export default routes;

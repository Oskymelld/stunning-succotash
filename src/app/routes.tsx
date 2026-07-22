import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "project/:slug", Component: Project },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
    ],
  },
]);

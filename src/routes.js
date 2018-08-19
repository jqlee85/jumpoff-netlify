import Blog from "./components/Blog/Blog";
import SinglePost from "./components/SinglePost/SinglePost";
import Home from "./components/Home/Home";
import SinglePage from "./components/SinglePage/SinglePage";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    props: {},
    component: SinglePage
  },
  {
    path: "/blog/:post_slug",
    props: {},
    component: SinglePost
  },
  {
    path: "/blog",
    exact: true,
    props: {},
    component: Blog
  },
  {
    path: "/work",
    exact: true,
    props: {},
    component: SinglePage
  },
  {
    path: "/resume",
    exact: true,
    props: {},
    component: SinglePage
  }
];

export default routes;

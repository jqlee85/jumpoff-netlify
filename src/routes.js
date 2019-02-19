import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import SinglePost from "./components/SinglePost/SinglePost";
import Home from "./components/Home/Home";
import SinglePage from "./components/SinglePage/SinglePage";
import Contact from "./components/Contact/Contact";
import SingleProject from "./components/SingleProject/SingleProject";
import WorkHTMLCSSJS from "./components/WorkHTMLCSSJS/WorkHTMLCSSJS";
import WorkReactJS from "./components/WorkReactJS/WorkReactJS";
import WorkWordPress from "./components/WorkWordPress/WorkWordPress";

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
    path: "/contact",
    exact: true,
    props: {},
    component: Contact
  },
  {
    path: "/blog/:post_slug",
    props: {},
    component: SinglePost
  },
  {
    path: "/portfolio/:post_slug",
    props: {},
    component: SingleProject
  },
  {
    path: "/blog",
    exact: true,
    props: {},
    component: Blog
  },
  {
    path: "/portfolio",
    exact: true,
    props: {},
    component: Portfolio
  },
  {
    path: "/work",
    exact: true,
    props: {},
    component: SinglePage
  },
  {
    path: "/work/html-css-js",
    props: {},
    component: WorkHTMLCSSJS
  },
  {
    path: "/work/wordpress",
    props: {},
    component: WorkWordPress
  },
  {
    path: "/work/react-js",
    props: {},
    component: WorkReactJS
  },
  {
    path: "/resume",
    exact: true,
    props: {},
    component: SinglePage
  }
];

export default routes;

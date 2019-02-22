import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import SinglePost from "./components/SinglePost/SinglePost";
import Home from "./components/Home/Home";
import SinglePage from "./components/SinglePage/SinglePage";
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
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
    component: AboutPage
  },
  {
    path: "/contact",
    exact: true,
    props: {},
    component: ContactPage
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
    path: "/resume",
    exact: true,
    props: {},
    component: SinglePage
  }
];

export default routes;

import { lazy, LazyExoticComponent } from "react";
// import {LazyPage1, LazyPage2, LazyPage3} from '../01-Lazyload/pages'
import { NoLazy } from '../01-Lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayaout"*/ '../01-Lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No Lazy",
  },
];

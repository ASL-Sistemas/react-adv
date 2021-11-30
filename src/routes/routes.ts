import { lazy, LazyExoticComponent } from "react";
// import {LazyPage1, LazyPage2, LazyPage3} from '../01-Lazyload/pages'

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const lazy1 = lazy(() => import(/*webpackChunkName: "LazyLoad1"*/ '../01-Lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/*webpackChunkName: "LazyLoad1"*/ '../01-Lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/*webpackChunkName: "LazyLoad1"*/ '../01-Lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    component: lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: lazy3,
    name: "Lazy-3",
  },
];

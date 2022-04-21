// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/login')}),
    "exact": true
  },
  {
    "path": "/demo",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/demo')}),
    "exact": true
  },
  {
    "path": "/home",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/home')}),
    "exact": true
  },
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/user')}),
    "exact": true
  },
  {
    "path": "/home/video",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home__videoPage' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/home/videoPage')}),
    "exact": true
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/index')}),
    "routes": [
      {
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/Users/bloodclaster/Desktop/github/sbwy/lsjDesign/src/pages/home')}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

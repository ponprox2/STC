import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
// import HomeLayout from 'src/layouts/HomeLayout';
import AuthProtect from 'src/components/Auth/AuthProtect';
import DashboardLayout from 'src/layouts/DashboardLayout';
// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  guard: AuthProtect,
  layout: DashboardLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('src/views/general/DashboardAppView'))
    },
    // {
    //   exact: true,
    //   path: '/',
    //   component: lazy(() => import('src/views/home/LandingPageView'))
    // },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;

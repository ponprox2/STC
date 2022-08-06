import NProgress from 'nprogress';
// import AppRoutes from './AppRoutes';
import { PATH_APP, PATH_PAGE } from './paths';
// import HomeRoutes from './HomeRoutes';
import LoadingScreen from 'src/components/LoadingScreen';
// import GuestProtect from 'src/components/Auth/GuestProtect';
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation
} from 'react-router-dom';
import React, { Suspense, Fragment, lazy, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import LandingPageLayout from 'src/layouts/LandingPageLayout';
import HomeLayout from 'src/layouts/HomeLayout';
import { element } from 'prop-types';

// ----------------------------------------------------------------------

const nprogressStyle = styled((theme) => ({
  '@global': {
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        top: 0,
        left: 0,
        height: 2,
        width: '100%',
        position: 'fixed',
        zIndex: theme.zIndex.snackbar,
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 0 2px ${theme.palette.primary.main}`
      },
      '& .peg': {
        right: 0,
        opacity: 1,
        width: 100,
        height: '100%',
        display: 'block',
        position: 'absolute',
        transform: 'rotate(3deg) translate(0px, -4px)',
        boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
      }
    }
  }
}));

function RouteProgress(props) {
  nprogressStyle();

  NProgress.configure({
    speed: 500,
    showSpinner: false
  });

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, []);

  return <Route {...props} />;
}

export function renderRoutes(routes = []) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={
                <Guard>
                  <Layout>
                    {route.routes ? renderRoutes(route.routes) : <Component />}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

const routes = [
  // Others Routes
  // {
  //   exact: true,
  //   guard: GuestProtect,
  //   path: PATH_PAGE.auth.login,
  //   component: lazy(() => import('src/views/auth/LoginView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.auth.loginUnprotected,
  //   component: lazy(() => import('src/views/auth/LoginView'))
  // },
  // {
  //   exact: true,
  //   guard: GuestProtect,
  //   path: PATH_PAGE.auth.register,
  //   component: lazy(() => import('src/views/auth/RegisterView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.auth.registerUnprotected,
  //   component: lazy(() => import('src/views/auth/RegisterView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.auth.resetPassword,
  //   component: lazy(() => import('src/views/auth/ResetPasswordView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.auth.verify,
  //   component: lazy(() => import('src/views/auth/VerifyCodeView'))
  // },

  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.app1,
    component: lazy(() => import('src/views/errors/Page404View'))
  },

  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/Page404View'))
  },
  {
    exact: true,
    path: '/500',
    component: lazy(() => import('src/views/errors/Page500View'))
  },
  // {
  //   exact: true,
  //   path: PATH_PAGE.comingSoon,
  //   component: lazy(() => import('src/views/pages/ComingSoonView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.maintenance,
  //   component: lazy(() => import('src/views/pages/MaintenanceView'))
  // },
  // {
  //   exact: true,
  //   path: PATH_PAGE.payment,
  //   component: lazy(() => import('src/views/pages/PaymentView'))
  // },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_APP.root,
    component: () => <Navigate to="cashbook/home" />
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.debtReminder,
    component: lazy(() => import('src/views/pages/DebtReminderView'))
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.shortenVerifyDebtReminder,
    component: lazy(() => import('src/views/pages/VerifyDebtReminderView'))
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.verifyDebtReminder,
    component: lazy(() => import('src/views/pages/VerifyDebtReminderView'))
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.shortenCashBookVerifyDebtReminder,
    component: lazy(() =>
      import('src/views/pages/CashBookVerifyDebtReminderView')
    )
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.CashBookVerifyDebtReminder,
    component: lazy(() =>
      import('src/views/pages/CashBookVerifyDebtReminderView')
    )
  },
  {
    exact: true,
    layout: LandingPageLayout,
    path: PATH_PAGE.cashbookDebtReminder,
    component: lazy(() => import('src/views/pages/CashBookDebtReminderView'))
  },
  {
    exact: true,
    layout: HomeLayout,
    path: PATH_PAGE.cashBookHomePage,
    component: lazy(() =>
      import('src/views/pages/CashBookHomeView/CashBookHomePage')
    )
  },
  {
    exact: true,
    layout: HomeLayout,
    path: PATH_PAGE.QRCodeScreen,
    component: lazy(() => import('src/views/pages/QRView/LoginPage'))
  },
  {
    exact: true,
    layout: HomeLayout,
    path: PATH_PAGE.shortenCashBookHomePage,
    component: lazy(() =>
      import('src/views/pages/CashBookHomeView/CashBookHomePage')
    )
  }

  // {
  //   exact: true,
  //   layout: LandingPageLayout,
  //   path: PATH_PAGE.updateView,
  //   component: lazy(() =>
  //     import(
  //       'src/views/pages/CashBookHomeView/CashBookUpdateView/CashBookUpdate'
  //     )
  //   )
  // }

  // App Routes
  // AppRoutes,

  // Home Routes
  // HomeRoutes
];

export default routes;

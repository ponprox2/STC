// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = {
  auth: '/auth',
  app: ''
};

export const PATH_PAGE = {
  app1: '/app',
  auth: {
    root: ROOTS.auth,
    login: path(ROOTS.auth, '/login'),
    loginUnprotected: path(ROOTS.auth, '/login-unprotected'),
    register: path(ROOTS.auth, '/register'),
    registerUnprotected: path(ROOTS.auth, '/register-unprotected'),
    resetPassword: path(ROOTS.auth, '/reset-password'),
    verify: path(ROOTS.auth, '/verify')
  },
  debtReminder: '/:id',
  cashbookDebtReminder: '/:id',
  verifyDebtReminder: '/verify/:id',
  shortenVerifyDebtReminder: '/v/:id',
  CashBookVerifyDebtReminder: '/verify/:id',
  shortenCashBookVerifyDebtReminder: '/v/:id',
  shortenCashBookHomePage:'/cashbook',
  cashBookHomePage: '/cashbook/home',
  QRCodeScreen:'/cashbook/login',

  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  payment: '/payment',
  // updateView:'/cashbook/update/'
};

export const PATH_HOME = {
  components: '/components',
  cloud: 'https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0',
  purchase: 'https://material-ui.com/store/items/minimal-dashboard/',
  dashboard: ROOTS.app
};

export const PATH_APP = {
  root: '/',
  general: {
    root: path(ROOTS.app, '/'),
    dashboard: path(ROOTS.app, '/dashboard'),
    analytics: path(ROOTS.app, '/dashboard/analytics'),
    storeRedirect: path(ROOTS.app, '/store-redirect')
  },
  management: {
    root: path(ROOTS.app, '/management'),
    user: {
      root: path(ROOTS.app, '/management/user'),
      profile: path(ROOTS.app, '/management/user/profile'),
      cards: path(ROOTS.app, '/management/user/card'),
      list: path(ROOTS.app, '/management/user/list'),
      account: path(ROOTS.app, '/management/user/account')
    }
  },
  components: {
    root: path(ROOTS.app, '/components'),
    accordion: path(ROOTS.app, '/components/accordion'),
    alert: path(ROOTS.app, '/components/alert'),
    autocomplete: path(ROOTS.app, '/components/autocomplete'),
    avatar: path(ROOTS.app, '/components/avatars'),
    badge: path(ROOTS.app, '/components/badges'),
    breadcrumbs: path(ROOTS.app, '/components/breadcrumbs'),
    buttons: path(ROOTS.app, '/components/buttons'),
    chip: path(ROOTS.app, '/components/chips'),
    dialog: path(ROOTS.app, '/components/dialogs'),
    textfield: path(ROOTS.app, '/components/text-fields'),
    label: path(ROOTS.app, '/components/labels'),
    lists: path(ROOTS.app, '/components/lists'),
    menu: path(ROOTS.app, '/components/menu'),
    pagination: path(ROOTS.app, '/components/pagination'),
    pickers: path(ROOTS.app, '/components/pickers'),
    popover: path(ROOTS.app, '/components/popover'),
    progress: path(ROOTS.app, '/components/progress'),
    rating: path(ROOTS.app, '/components/rating'),
    selectionControls: path(ROOTS.app, '/components/selection-controls'),
    snackbar: path(ROOTS.app, '/components/snackbars'),
    slider: path(ROOTS.app, '/components/slider'),
    stepper: path(ROOTS.app, '/components/steppers'),
    tabs: path(ROOTS.app, '/components/tabs'),
    table: path(ROOTS.app, '/components/table'),
    timeline: path(ROOTS.app, '/components/timeline'),
    tooltip: path(ROOTS.app, '/components/tooltips'),
    transferList: path(ROOTS.app, '/components/transfer-list'),
    treeView: path(ROOTS.app, '/components/tree-view'),

    // Extra
    copyToClipboard: path(ROOTS.app, '/extra-components/copy-to-clipboard'),
    multiLanguage: path(ROOTS.app, '/extra-components/multi-language')
  }
};

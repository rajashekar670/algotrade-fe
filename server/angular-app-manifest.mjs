
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/algotrade-fe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/algotrade-fe/login"
  },
  {
    "renderMode": 2,
    "route": "/algotrade-fe/register"
  },
  {
    "renderMode": 2,
    "route": "/algotrade-fe/create-strategy"
  },
  {
    "renderMode": 2,
    "route": "/algotrade-fe/create-strategy/short-straddle"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23685, hash: 'b60b5367604df2e443083e48bda6997bac25effa74dbc97296371dc4ca5ff2b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17091, hash: '24fa3456c2380523d48ea7596fc7b3f8f9580fb1cc1054a557b846bd13348e42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 121286, hash: '4367c18d65291f9aadc40d6998dc5661f7b3e3f578f184b92dde8cea9abcc95b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'create-strategy/index.html': {size: 66258, hash: '213900bbb13a48ccf024fb5c043eb5d1b8b0279e1a69142db1ab270e4557c019', text: () => import('./assets-chunks/create-strategy_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 119558, hash: '3ab8ae53dab00d24e4b9393d7eba4e4d9c7e0cb1f18a2f87563b12ec91db5a26', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'create-strategy/short-straddle/index.html': {size: 205701, hash: 'ab53028cacc6cb8abfe032a0277cf490e5a4c75e48ce2e4ee1b0ff1932ecd852', text: () => import('./assets-chunks/create-strategy_short-straddle_index_html.mjs').then(m => m.default)},
    'styles-URF4TVC7.css': {size: 7147, hash: 'keGu+H2ZGCI', text: () => import('./assets-chunks/styles-URF4TVC7_css.mjs').then(m => m.default)}
  },
};

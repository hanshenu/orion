Package.describe({
  name: 'orionjs:materialize',
  summary: 'Materialize theme for orion admin',
  version: '1.0.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'meteor-platform',
    'orionjs:core',
    'less',
    'iron:layout@1.0.7',
    'aldeed:autoform@5.1.2',
    'nicolaslopezj:tabular-materialize',
    'useraccounts:materialize@1.8.1',
    'zimme:iron-router-active@1.0.4',
    'gildaspk:autoform-materialize@0.0.18'
    ]);

  api.imply([
    'orionjs:core',
    'iron:layout',
    'aldeed:autoform',
    'useraccounts:materialize',
    'zimme:iron-router-active'
    ]);

  api.addFiles([
    'init.js',
    'tabular.js'
    ]);

  api.addFiles([
    'views/layout/layout.html',
    'views/layout/layout.js',
    'views/layout/layout.less',
    'views/sidebar/sidebar.html',
    'views/sidebar/sidebar.less',
    'views/sidebar/sidebar.js',
    'views/accounts/login.html',
    'views/accounts/register-with-invitation.html',
    'views/accounts/index.html',
    'views/accounts/password.html',
    'views/accounts/profile.html',
    'views/accounts/profile.js',
    'views/accounts/accounts.less',
    'views/accounts/accounts.html',
    'views/accounts/roles.html',
    'views/accounts/invite.html',
    'views/config/update.html',
    'views/config/update.js',
    'views/dictionary/update.html',
    'views/dictionary/update.js',
    'views/collections/index.html',
    'views/collections/index.js',
    'views/collections/index.less',
    'views/collections/create.html',
    'views/collections/create.js',
    'views/collections/update.html',
    'views/collections/update.js',
    'views/collections/delete.html',
    'views/pages/index.html',
    'views/pages/create.html',
    'views/pages/delete.html',
    'views/pages/update.html',
    'views/pages/pages.js',
    'views/misc/file.html',
    'views/misc/misc.js',
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
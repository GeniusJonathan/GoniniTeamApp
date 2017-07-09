// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCyR0M8-MaL__bUyQNLBkSQCODAdP1qSTk',
    authDomain: 'goniniteamapp.firebaseapp.com',
    databaseURL: 'https://goniniteamapp.firebaseio.com',
    projectId: 'goniniteamapp',
    storageBucket: 'goniniteamapp.appspot.com',
    messagingSenderId: '612760126930'
  }
};

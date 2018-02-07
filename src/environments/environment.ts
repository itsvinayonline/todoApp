// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC26e8wxcuNnubvKjdAp_RYrqYW9FwrdAQ',
    authDomain: 'todolistapp-d776a.firebaseapp.com',
    databaseURL: 'https://todolistapp-d776a.firebaseio.com',
    projectId: 'todolistapp-d776a',
    storageBucket: 'todolistapp-d776a.appspot.com',
    messagingSenderId: '1000453151930'
  }
};

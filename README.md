# dot-org

The web application for `remoteshiva.org`.

## Quick Start

1. For Firebase support: `npm install -g firebase-tools`
2. `firebase login`
3. `yarn config set ignore-engines true`
4. `yarn install`, then change to packages/functions and run `yarn install` for server-side Firebase functions
5. Run `yarn dev`


## Deployment
Run `yarn deploy dev` or `yarn deploy prod` to deploy to Firebase Hosting

## Stack

### Front end
* React/TypeScript/Babel/Webpack
* `styled-components` + Tailwind UI
* `react-i18next`
* Peruse the `package.json` for more detail!

### Back end
* TODO: more detail here

## Firebase
### Functions
TypeScript support didn't work when I tried it, so Firebase Functions are intentionally written in JS.
Functions aren't designed for yarn, so some tweaks are required to get them to work with yarn.
Changes made:
- Ran `yarn config set ignore-engines true` to resolve [an error](https://stackoverflow.com/a/57747503)
- Added `"private": true` to packages.json [so workspaces can be added](https://classic.yarnpkg.com/en/docs/workspaces) and setup [no hoist](https://stackoverflow.com/a/59593707)

#### References
* [Setting up the project](https://dev.to/renatobentorocha/setup-a-react-js-project-with-typescript-eslint-and-prettier-without-create-react-app-l6i)
* [React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)


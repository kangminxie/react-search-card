# react-search-card
A simple deploy demo for react.js project

click https://MountKingX.github.io/react-search-card to see

Right now, the search/filter input is for client-side only, which is limited by current querying (every time same result is returned)


### Deploy notes:
* install gh-pages in project: `npm install --save gh-pages` (npm) or `yarn add gh-pages` (yarn)
* add "homepage": "https://[github-username].github.io/[repo-name]" in package.json
* add "predeploy": "npm run build", "deploy": "gh-pages -d build" to "scripts" in package.json for npm; for yarn => "predeploy": "yarn build"
* in local machine, run `npm run deploy` (npm) or `yarn deploy` (yarn) to publish
* push code to remote master branch
* go to "https://github.com/[github-username]/[repo-name]", click settings then make sure gh-pages branch is selected for "GitHub Pages" section

Now published site should be availble at "https://[github-username].github.io/[repo-name]"

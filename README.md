# react-search-card
A simple deploy demo for pure react.js project

Click https://mountkingx.github.io/react-search-card/ to see

Right now, the search/filter input is for client-side search only, which is limited by current querying (every time same result is returned)


### Deploy notes:
* install gh-pages in project: `npm install --save gh-pages` (npm) or `yarn add gh-pages` (yarn)
* add "homepage": "https://[github-username].github.io/[repo-name]" in package.json
* add "predeploy": "npm run build", "deploy": "gh-pages -d build" to "scripts" in package.json for npm; for yarn => "predeploy": "yarn build"
* in local machine, run `npm run deploy` (npm) or `yarn deploy` (yarn) command to publish (generated files for publish)
* push updated code to remote master branch
* visit the repo site - "https://github.com/[github-username]/[repo-name]", click settings then make sure gh-pages branch is selected for "GitHub Pages" section

Now the published site should be availble at "https://[github-username].github.io/[repo-name]"

- Original code source from: https://www.udemy.com/complete-react-developer-zero-to-mastery

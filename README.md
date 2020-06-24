# docker-wp-theme
1 boilerplate for creating wp themes in a docker environment with webpack and stuff

## how to use
- get [docker](https://docs.docker.com/get-docker/) with docker-compose and [node.js](https://nodejs.org/)
- optional: get [yarn](https://yarnpkg.com/) for maximum emoji support (on some oses)
- clone or download this repo
- optional but recommended: adjust theme folder name in the `docker-compose.yml` file
- optional: also make adjustments to ports etc if you want to run multiple wordpress instances
- run `npm install` or `yarn install` on your command line of choice
- get your wordpress and database up and running with `docker-compose up`
- start up dev server (browsersync proxy) with `yarn start`
- create build with `yarn build`

special thx to [n1r4ul](https://www.github.com/n1ru4l) cuz he a good boi


# Deployer's Guide

## Setup

Creating server:

```sh
heroku create -n impeachment-tweet-analysis-web

# or connecting to existing server:
# heroku git:remote -a impeachment-tweet-analysis-web
```

Customizing buildpacks:

```sh
heroku buildpacks:remove heroku/nodejs
heroku buildpacks:add mars/create-react-app
```

Customizing the build:

```sh
heroku config:set NODE_MODULES_CACHE=false -r heroku-web
heroku config:set NODE_MODULES_CACHE=false -r heroku-web-staging
```

Configuring env vars:

```sh
heroku config:set REACT_APP_API_URL="https://your-api.herokuapp.com"
```
> NOTE: with the react buildpack, need to re-deploy [AFTER](https://github.com/mars/create-react-app-buildpack/issues/178) setting env vars in order for them to be recognized

## Deploying

Deploying:

```sh
git push heroku master
#git push heroku mybranch:master
```

Deploying will run "scripts/build" from "package.json".

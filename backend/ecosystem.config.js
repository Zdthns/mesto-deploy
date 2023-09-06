const dotenv = require("dotenv");
dotenv.config({path: './.env'});

const {DEPLOY_USER, DEPLOY_HOST, DEPLOY_REF, DEPLOY_REPOSITORY, DEPLOY_PATH} =  process.env;

module.exports = {
  apps : [{
    name   : 'api-service',
    script : "./dist/app.js"
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'pre-deploy': `scp ./*.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm i && npm run build',
    },
  },
}

import * as constants from '../../config/constants'
console.log(constants, 'constants server');
const env = process.env.NODE_ENV || constants.DEVELOPMENT

if (env === constants.DEVELOPMENT) {
  const envConfig = require('./config.json')[env]
  Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])
}

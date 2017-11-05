import { DEVELOPMENT } from './constants'

const env = process.env.ENV || DEVELOPMENT

if (env === DEVELOPMENT) {
  const envConfig = require('./config.json')[env]
  Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])
}

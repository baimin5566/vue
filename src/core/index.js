import config from './config'
import { initGlobalAPI } from './global-api/index'
import Vue from './instance/index'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: () => config._isServer
})

Vue.version = '2.0.0-beta.1'

export default Vue
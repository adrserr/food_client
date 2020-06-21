import config, { ConfigState } from './config'
import auth, { AuthState } from './auth'

export { auth, config }

export default interface AppState {
  auth: AuthState
  config: ConfigState
}

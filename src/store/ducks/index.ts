import auth, { AuthState } from './auth'

export { auth }

export default interface AppState {
  auth: AuthState
}

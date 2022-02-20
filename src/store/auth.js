import { registerUser, loginUser } from '../reducers/auth.js'

export default {
    state: {
        user: null,
        token: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        },
        logout(state) {
            state.user = null
            state.token = null
        }
    },
    actions: {
        registerUser,
        loginUser
    },
    getters: {
        getUser: state => state.user,
        isLoggedIn: state => state.user && state.token
    },
}
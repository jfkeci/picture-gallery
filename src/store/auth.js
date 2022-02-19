import { registerUser, loginUser } from '../reducers/auth.js'

export default {
    state: {
        currentUser: '620c9552c2d04fceef7f044c'
    },
    mutations: {
        setCurrentUserFromStorage(state) {
            let user = localStorage.getItem('user')
            if (user) {
                state.user = user.id
            } else {
                state.user = null
            }
        },
        setCurrentUser(state, user) {
            state.currentUser = user
        },
        logout() {
            localStorage.setItem('user', null)
        }
    },
    actions: {
        registerUser,
        loginUser
    },
    getters: {
        getCurrentUser: state => state.currentUser,
        isLoggedIn: state => state.currentUser != null
    },
}
export default {
    state: {
        currentUser: '620c9552c2d04fceef7f044c'
    },
    mutations: {
        setCurrentUser(state, user) {
            state.currentUser = user
        }
    },
    actions: {},
    getters: {
        getCurrentUser: state => state.currentUser
    }
}
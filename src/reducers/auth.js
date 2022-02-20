import axios from 'axios'

export const registerUser = async ({ commit }, user) => {
    commit('setLoading', true)
    axios.post(`/user/register`, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
    }).then((res) => {
        commit('setUser', res.data.user._id)
        commit('setToken', res.data.token)
        commit('setMessage', {
            text: 'Successfully registered ' + res.data.user.name,
            type: 'success'
        })
        commit('setLoading', false)
        commit('hideDialog')
    }).catch(err => {
        commit('setLoading', false)
        switch (err.response.status) {
            case 400:
                commit('setMessage', {
                    text: err.response.data.message,
                    type: 'error'
                })
                break;
            default:
                commit('setMessage', {
                    text: 'Something went wrong',
                    type: 'error'
                })
                break;
        }
    })
}

export const loginUser = async ({ commit }, user) => {
    axios.post(`/user/login`, {
        email: user.email,
        password: user.password,
    }).then((res) => {
        commit('setUser', res.data.user._id)
        commit('setToken', res.data.token)
        localStorage.setItem('user', {
            id: res.data.user._id,
            time: Date.now()
        })
        commit('setMessage', {
            text: 'Successfully logged in',
            type: 'success'
        })
        commit('setLoading', false)
        commit('hideDialog')
    })
}
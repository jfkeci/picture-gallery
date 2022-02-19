import axios from 'axios'
let url = 'http://localhost:5001/user'

export const registerUser = async (state, user) => {
    state.commit('setLoading', true)
    axios.post(`${url}/register`, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
    }).then((res) => {
        state.commit('setMessage', {
            text: 'Successfully registered ' + res.data.user.name,
            type: 'success'
        })
        state.commit('setLoading', false)
        state.commit('hideDialog')
    }).catch(err => {
        state.commit('setLoading', false)
        switch (err.response.status) {
            case 400:
                state.commit('setMessage', {
                    text: err.response.data.message,
                    type: 'error'
                })
                break;
            default:
                state.commit('setMessage', {
                    text: 'Something went wrong',
                    type: 'error'
                })
                break;
        }
    })
}

export const loginUser = async (state, user) => {
    axios.post(`${url}/login`, {
        email: user.email,
        password: user.password,
    }).then((res) => {
        state.commit('setCurrentUser', res.data.user._id)
        localStorage.setItem('user', {
            id: res.data.user._id,
            time: Date.now()
        })
        state.commit('setMessage', {
            text: 'Successfully logged in',
            type: 'success'
        })
        state.commit('setLoading', false)
        state.commit('hideDialog')
    })
}
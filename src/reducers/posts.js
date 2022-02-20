import axios from 'axios'

export const getPosts = async (state, param) => {
    state.commit('setLoading', true)
    if (param.type == 'search') {
        console.log('filter', param.filter)
    }
    await axios.get('/posts')
        .then((res) => {
            state.commit('setPosts', res.data)
            state.commit('setLoading', false)
        }).catch((error) => {
            state.commit('setLoading', false)
            console.log(error)
        })
}

export const getPost = async (state, id) => {
    await axios.get(`/posts/${id}`)
        .then((res) => {
            state.commit('setCurrentPost', res.data)
            state.commit('setLoading', false)
        }).catch((err) => {
            this.$store.commit("setLoading", false);
            switch (err.response.status) {
                case 404:
                    this.$store.commit("setMessage", {
                        text: "No post found",
                        type: "error",
                    });
                    break;
                default:
                    this.$store.commit("setMessage", {
                        text: "Something went wrong",
                        type: "error",
                    });
                    break;
            }
        });
}

export const saveNewPost = async (state, post) => {
    state.commit('setLoading', true)
    await axios.post('/posts', post)
        .then((res) => {
            console.log(res)
            state.commit('hideDialog')
            state.commit('addPost', res.data)
            state.commit('setLoading', false)
            state.commit('setMessage', {
                text: 'Successfully saved',
                type: 'success'
            })
        }).catch(() => {
            state.commit('setLoading', false)
            state.commit('setMessage', {
                text: 'Something went wrong',
                type: 'error'
            })
        })
}

export const updatePost = async (state, post) => {
    state.commit('setLoading', true)
    await axios.patch(`/posts/${post._id}`, post)
        .then((res) => {
            console.log(res)
            state.commit('hideDialog')
            // state.commit('replacePost', res.data)
            state.commit('setLoading', false)
            state.commit('setMessage', {
                text: 'Successfully updated',
                type: 'success'
            })
        }).catch(() => {
            state.commit('setLoading', false)
            state.commit('setMessage', {
                text: 'Something went wrong',
                type: 'error'
            })
        })
}

export const toggleLike = async (state, post) => {
    state.commit('setLoading', false)
    if (!state.getters.isLoggedIn) {
        state.commit('setAction', 'login');
        state.commit('showDialog')
        return;
    }
    await axios.patch(`/posts/like/${post._id}/${state.getters.getUser}`)
        .then((res) => {
            let updatedPost = res.data
            state.commit('replacePost', updatedPost)
        }).catch((error) => {
            console.log(error)
        })
}

export const deletePost = async (state, postId) => {


    state.commit('setLoading', true)

    await axios.delete(`/posts/${postId}`)
        .then(() => {
            state.commit('deletePost', postId)
            state.commit('setLoading', false)
            state.commit('hideDialog')
        }).catch(err => {
            state.commit('setLoading', false)
            state.commit('hideDialog')
            switch (err.response.status) {
                case 404:
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
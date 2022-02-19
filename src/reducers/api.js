import axios from 'axios'
let url = 'http://localhost:5001/posts'

export const getPosts = async (state, param) => {
    state.commit('setLoading', true)
    if (param.type == 'search') {
        console.log('filter', param.filter)
    }
    await axios.get(url)
        .then((res) => {
            state.commit('setPosts', res.data)
            state.commit('setLoading', false)
        }).catch((error) => {
            state.commit('setLoading', false)
            console.log(error)
        })
}

export const getPost = async (state, id) => {
    await axios.get(`${url}/${id}`)
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
    await axios.post(url, post)
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

export const toggleLike = async (state, post) => {
    await axios.patch(`${url}/like/${post._id}/${state.getters.getCurrentUser}`)
        .then((res) => {
            let updatedPost = res.data

            let posts = state.getters.getPosts;

            let index = posts.indexOf(post)

            posts[index] = updatedPost

            state.commit('setPosts', posts)
        }).catch((error) => {
            state.commit('setLoading', false)
            console.log(error)
        })
}

export const deletePost = async (state, postId) => {
    state.commit('setLoading', true)

    await axios.delete(`${url}/${postId}`)
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

export const commentPost = async (state, comment) => {
    await axios.post(`http://localhost:5001/comments/${comment.postId}`, {
        text: comment.text,
        createdBy: comment.createdBy
    }).then((res) => {
        state.commit('addComment', res.data)
        state.commit('hideDialog')
        state.commit('setLoading', false)
    }).catch(err => {
        state.commit('setLoading', false)
        state.commit('hideDialog')
        switch (err.response.status) {
            case 404:
                state.commit('setMessage', {
                    text: 'No post found',
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

export const deleteComment = async (state, comment) => {
    await axios.delete(`http://localhost:5001/comments/${comment.postId}/${comment._id}`)
        .then((res) => {
            state.commit('setCurrentPost', res.data.post)
            state.commit('setLoading', false)
            state.commit('hideDialog')
        }).catch(err => {
            state.commit('hideDialog')
            state.commit('setLoading', false)
            switch (err.response.status) {
                case 404:
                    state.commit('setMessage', {
                        text: 'No item found',
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

export const updateComment = async (state, comment) => {
    await axios.patch(`http://localhost:5001/comments/${comment.postId}/${comment._id}`, {
        text: comment.text
    }).then((res) => {
        state.commit('setCurrentPost', res.data.post)
        state.commit('setLoading', false)
        state.commit('hideDialog')
    }).catch(err => {
        state.commit('hideDialog')
        state.commit('setLoading', false)
        switch (err.response.status) {
            case 404:
                state.commit('setMessage', {
                    text: 'No item found',
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
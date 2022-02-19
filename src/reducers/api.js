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

export const saveNewPost = async (state, post) => {
    state.commit('setLoading', true)
    await axios.post(url, {
        title: post.title,
        description: post.description,
        tags: post.tags.split(','),
        selectedFile: post.selectedFile,
        createdBy: state.getters.getCurrentUser
    }).then((res) => {
        console.log(res)
        state.commit('setLoading', false)
        //state.posts.push(res.data)
    }).catch((err) => {
        console.log(err)
        state.commit('setLoading', false)
    })
}

export const toggleLike = async (state, post) => {
    axios.patch(`${url}/like/${post._id}/${state.getters.getCurrentUser}`)
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

    axios.delete(`${url}/${postId}`)
        .then((res) => {
            console.log(res.data)
            state.commit('deletePost', postId)
            state.commit('setLoading', false)
        }).catch((error) => {
            state.commit('setLoading', false)
            console.log(error)
        })
}

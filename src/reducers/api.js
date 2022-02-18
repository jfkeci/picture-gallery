import axios from 'axios'
let url = 'http://localhost:5001/posts'

export const getPosts = async (state, param) => {
    if (param.type == 'search') {
        console.log('filter', param.filter)
    }
    state.commit('setloading', true)
    await axios.get(url)
        .then((res) => {
            state.commit('setPosts', res.data)
            state.commit('setloading', false)
        }).catch(err => console.log(err))
}

export const saveNewPost = async (state, post) => {
    state.commit('setloading', true)
    await axios.post(url, {
        title: post.title,
        description: post.description,
        tags: post.tags.split(','),
        selectedFile: post.selectedFile,
        createdBy: state.getters.getCurrentUser
    }).then((res) => {
        console.log(res.data)
        state.commit('setloading', false)
        //state.posts.push(res.data)
    })
}

export const toggleLike = async (state, post) => {
    axios.patch(`${url}/like/${post._id}/${state.getters.getCurrentUser}`)
        .then((res) => {
            let updatedPost = res.data

            let posts = state.getters.getPosts;

            let index = posts.indexOf(post)

            posts[index] = updatedPost

            console.log(state.getters.getPosts)
            state.commit('setPosts', posts)
            console.log(state.getters.getPosts)
        }).catch((error) => {
            console.log(error)
        })
}

export const deletePost = async (state, postId) => {
    state.commit('setloading', true)

    axios.delete(`${url}/${postId}`)
        .then((res) => {
            console.log(res.data)
            state.commit('deletePost', postId)
            state.commit('setloading', false)

        })
}

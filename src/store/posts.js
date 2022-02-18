const url = 'http://localhost:5001/posts'
import axios from 'axios'

export default {
    state: {
        currentPost: 'this is the first post ',
        posts: [],
        postsLoading: false
    },
    mutations: {
        setCurrentPost(state, currentPost) {
            state.currentPost = currentPost
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        addPost(state, post) {
            state.posts.push(post)
        },
        setPostsLoading(state, loading) {
            state.postsLoading = loading
        }
    },
    getters: {
        getCurrentPost: state => state.currentPost,
        getPosts: state => state.posts,
        getPostsLoading: state => state.postsLoading,
        getPostCount: state => state.posts.length,
        hasPosts: state => state.posts.length > 0,
    },
    actions: {
        async getPosts(state, param) {
            if (param.type == 'search') {
                console.log('filter', param.filter)
            }
            state.commit('setPostsLoading', true)
            await axios.get(url)
                .then((res) => {
                    state.commit('setPosts', res.data)
                    state.commit('setPostsLoading', false)
                }).catch(err => console.log(err))
        }
    },
    modules: {}
}
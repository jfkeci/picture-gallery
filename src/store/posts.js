
import { getPosts, saveNewPost, toggleLike, deletePost } from '../reducers/api.js'
//import {getComments, saveComment, updateComment, deleteCommet} from '../reducers/api.js'

export default {
    state: {
        currentPost: null,
        posts: [],
        loading: false
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
        setloading(state, loading) {
            state.loading = loading
        },
        updatePost(state, post) {
            let index = state.posts.findIndex((obj => obj._id == post._id))
            state.posts[index] = post
        },
        deletePost(state, postId) {
            state.posts = state.posts.filter((post) => post._id != postId);
        }
    },
    getters: {
        getCurrentPost: state => state.currentPost,
        getPosts: state => state.posts,
        getloading: state => state.loading,
        getPostCount: state => state.posts.length,
        hasPosts: state => state.posts.length > 0
    },
    actions: {
        getPosts,
        saveNewPost,
        toggleLike,
        deletePost
    },
    modules: {}
}
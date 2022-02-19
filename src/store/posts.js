
import { getPosts, saveNewPost, toggleLike, getPost, deletePost } from '../reducers/api.js'
import { commentPost, deleteComment, updateComment } from '../reducers/api.js'

export default {
    state: {
        currentPost: null,
        dialogPost: null,
        posts: [],
    },
    mutations: {
        setCurrentPost(state, currentPost) {
            state.currentPost = currentPost
        },
        setDialogPost(state, dialogPost) {
            state.dialogPost = dialogPost
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        addPost(state, post) {
            state.posts = [post, ...state.posts]
        },
        updatePost(state, post) {
            let index = state.posts.findIndex((obj => obj._id == post._id))
            state.posts[index] = post
        },
        deletePost(state, postId) {
            state.posts = state.posts.filter((post) => post._id != postId);
        },
        addComment(state, comment) {
            state.currentPost.comments.push(comment)
        }
    },
    getters: {
        getCurrentPost: state => state.currentPost,
        getDialogPost: state => state.dialogPost,
        getPosts: state => state.posts,
        getPostCount: state => state.posts.length,
        hasPosts: state => state.posts.length > 0
    },
    actions: {
        getPosts,
        saveNewPost,
        toggleLike,
        deletePost,
        getPost,
        commentPost,
        deleteComment,
        updateComment
    },
    modules: {}
}
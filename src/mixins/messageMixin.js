import Message from '../components/Message'
import _ from 'lodash'

export default {
    components: {
        Message
    },
    methods: {
        setMessage(message, type = 'success') {
            let newMessage = {
                text: message,
                type: type
            }
            this.$store.commit('setMessage', newMessage)
        },
        emitMessage(message, type = 'success') {
            this.$emit('emit-message', message, type)
        }
    },
    watch: {
        message: {
            handler: _.debounce(function () {
                this.$store.commit('setMessage', false)
            }, 5000),
            deep: true,
        },
    },
}
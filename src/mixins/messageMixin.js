import Message from '../components/Message'
import _ from 'lodash'

export default {
    components: {
        Message
    },
    data() {
        return {
            message: null
        }
    },
    methods: {
        setMessage(message, type = 'success') {
            this.message = {
                text: message,
                type: type
            }
        },
        emitMessage(message, type = 'success') {
            this.$emit('emit-message', message, type)
        }
    },
    watch: {
        message: {
            handler: _.debounce(function () {
                this.message = null
            }, 5000),
            deep: true,
        },
    },
}
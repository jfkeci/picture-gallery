export default {
    methods: {
        goTo(route, urlParam = null) {
            let params = {
                name: route
            }

            if (urlParam) {
                params['params'] = { urlParam }
            }

            this.$router.push(params)
        },
        goBack() {
            this.$router.go(-1)
        }
    }
}
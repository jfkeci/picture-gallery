export default {
    methods: {
        goTo(route, urlParam = null) {
            let params = {
                name: route
            }

            if (urlParam) {
                params['params'] = { urlParam }
            }

            console.log(params)

            this.$router.push(params)
        },
        goBack() {
            this.$router.go(-1)
        }
    }
}
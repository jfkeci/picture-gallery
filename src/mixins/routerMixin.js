export default {
    methods: {
        goTo(route, urlParam = null) {
            if (urlParam) {
                this.$router.push(`/${route}/${urlParam}`)
            } else {
                this.$router.push(`/${route}`)
            }
        },
        goBack() {
            this.$router.go(-1)
        }
    }
}
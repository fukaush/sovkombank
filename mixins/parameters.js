const parameters = {
    props: ['value'],
    methods: {
        changeParameters(type, value){
            let parameters = Object.assign({}, this.value, {[type]: value})
            this.$emit('input', parameters)
        }
    },
}
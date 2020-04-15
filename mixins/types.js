const types = {
    props: ['type'],
    methods: {
        changeType(type) {
            this.$emit('change-type', type)
        },
        isType(type){
            return this.type === type
        }
    },
}
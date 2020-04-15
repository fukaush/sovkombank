const dropdown = {
    props: ['list', 'index'],
    computed: {
        item(){
            return this.list[this.index]
        },
    },
    methods: {
        selected(index){
            this.$refs.dropdown.style.display = 'none';
            setTimeout(() => {
                this.$refs.dropdown.style.display = '';
                this.$emit('selected', index);
            })
        }
    },
    template:
        `<div class="dropdown">
            <div class="dropdown-item selected">{{item.name}}</div>
            <div class="dropdown-list" ref="dropdown">
                <div class="dropdown-item"
                    v-for="(item, index) in list" 
                    @click="selected(index)">{{item.name}}</div>
            </div>
        </div>`
}
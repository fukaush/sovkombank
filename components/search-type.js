const searchType = {
    mixins: [types],
    computed: {
        slider_button_class(){
            return this.type === 'filter' ? 'start' : 'end'
        }
    },
    template:
        `<div class="search-type">
            <div :class="['search-type__item', {'active': isType('filter')}]" 
                @click="changeType('filter')">
                Основной поиск
            </div>
            <div class="search-type__slider" @click="changeType()">
                <div :class="['search-type__slider-button', slider_button_class]"></div>
            </div>
            <div :class="['search-type__item', {'active': isType('query')}]"
                @click="changeType('query')">
                Искать по названию
            </div>
        </div>`
}
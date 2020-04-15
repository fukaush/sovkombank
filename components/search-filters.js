const searchFilters = {
    data(){
        return {
            city_index: 0,
            method_index: 0,
            property_index: 0,
        }
    },
    mixins: [parameters],
    components: {
        dropdown
    },
    computed: {
        cities: () => [{id: 777, name: 'Москва'}, {id: 999, name: 'Санкт-Петербург'}],
        city(){
            return this.cities[this.city_index]
        },
        methods: () => [{id: 0, name: 'Купить'}, {id: 1, name: 'Продать'}],
        method(){
            return this.methods[this.method_index]
        },
        properties: () => [{id: 12, name: 'Офис'}, {id: 15, name: 'Бизнес-центр'}],
        property(){
            return this.properties[this.property_index]
        },
    },
    template:
        `<div class="search-filters">
            <dropdown class="search-filter"
                      :list="cities"
                      :index="city_index"
                      @selected="city_index = $event"></dropdown>
            <dropdown class="search-filter"
                      :list="methods"
                      :index="method_index"
                      @selected="method_index = $event"></dropdown>
            <dropdown class="search-filter"
                      :list="properties"
                      :index="property_index"
                      @selected="property_index = $event"></dropdown>
            <input type="hidden" name="city_id" :value="city.id">
            <input type="hidden" name="method_id" :value="method.id">
            <input type="hidden" name="property_id" :value="property.id">
        </div>`
}
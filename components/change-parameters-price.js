const changeParametersPrice = {
    data() {
        return {
            currency_index: 0,
        }
    },
    components: {
        dropdown
    },
    mixins: [parameters],
    computed: {
        currencies: () => [{id: 1, name: 'Р/день'}, {id: 2, name: 'Р/месяц'}, {id: 3, name: '$/день'}, {id: 4, name: '$/месяц'}],
        currency(){
            return this.currencies[this.currency_index]
        },
    },
    template:
        `<div class="change-parameters__item">
            <div class="input">
                <input placeholder="От"
                       name="price_from"
                       @change="changeParameters('from', $event.target.value)">
            </div>
            <div class="input">
                <input placeholder="До"
                       name="price_to"
                       @change="changeParameters('to', $event.target.value)">
            </div>
            <dropdown class="input currency-dropdown"
                      :list="currencies"
                      :index="currency_index"
                      @selected="currency_index = $event"></dropdown>
            <input type="hidden" name="currency_id" :value="currency.id">
        </div>`
}
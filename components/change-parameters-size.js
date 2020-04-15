const changeParametersSize = {
    mixins: [parameters],
    template:
        `<div class="change-parameters__item">
            <div class="input">
                <input placeholder="От"
                       name="size_from"
                       @change="changeParameters('from', $event.target.value)">
            </div>
            <div class="input">
                <input placeholder="До"
                       name="size_to"
                       @change="changeParameters('to', $event.target.value)">
            </div>
            <div class="input change-parameters__item-type">
                <span>м<sup>2</sup></span>
            </div>
        </div>`
}

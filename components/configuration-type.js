const configurationType = {
    mixins: [types],
    template:
        `<div class="configuration">
            <div :class="['configuration__item configuration__item-price', {'active': isType('price')}]"
                 @click="changeType('price')">
                <i class="bottom-icons"></i> Цена
            </div>
            <div :class="['configuration__item configuration__item-size', {'active': isType('size')}]"
                 @click="changeType('size')">
                <i class="bottom-icons"></i> Метраж
            </div>
        </div>`
}
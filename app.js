//Это мог быть Single File Component…
const app = new Vue({
    components: {
        dropdown,
        searchFilters,
        searchType,
        configurationType,
        changeParametersPrice,
        changeParametersSize
    },
    data(){
        return {
            q: '',
            search_type: 'filter',
            type: '',
            configuration: {},
        }
    },
    created(){
        this.emptyConfiguration();
    },
    methods: {
        emptyConfiguration(){
            this.configuration = Object.assign({},{
                price: {
                    from: null,
                    to: null
                },
                size: {
                    from: null,
                    to: null
                },
            });
        },
        changeSearchType(type){
            this.emptyConfiguration();
            if(type){
                this.search_type = type;
            } else {
                this.search_type = this.search_type === 'filter' ? 'query' : 'filter';
            }
        },
        changeConfigurationType(type){
            this.emptyConfiguration();
            this.type = this.type === type ? '' : type;
        },
        //Можно проверить введенные данные пользователя, отправить через ajax, …
        testQueryString(){
            return this.q.length > 0
        },
        submit(e){
            if(this.search_type === 'query'){
                if(!this.testQueryString()){
                    alert('Поле не заполнено')
                    e.preventDefault();
                }
            } else {
                const form = new FormData(e.target);
                let object = {};
                form.forEach(function(value, key){
                    object[key] = value;
                });
                const json = JSON.stringify(object);
                alert(json)
            }

        }
    },
    watch: {
        'search_type'(newType){
            if(newType === 'query'){
                this.q = '';
            }
        }
    },
    template:
        `<div class="search-block">
            <div class="top">
                <form @submit="submit">
                    <!--        <form>-->
                    <template v-if="search_type === 'filter'">
                        <div class="line">
                            <div class="left-block">
                                <search-filters></search-filters>
                            </div>
                            <input type="submit" class="search-button" value="Найти">
                        </div>
                        <div class="line change-parameters change-parameters-price" v-if="type === 'price'">
                            <change-parameters-price v-model="configuration.price"></change-parameters-price>
                            <div class="separator"></div>
                            <input type="button" class="change-parameters__button" value="Добавить метраж"
                                   @click="changeConfigurationType('size')"/>
                        </div>
                        <div class="line change-parameters change-parameters-range" v-else-if="type === 'size'">
                            <input type="button" class="change-parameters__button" value="Добавить цену"
                                   @click="changeConfigurationType('price')"/>
                            <div class="separator"></div>
                            <change-parameters-size v-model="configuration.size"></change-parameters-size>
                        </div>
                    </template>
                    <template v-else>
                        <div class="line">
                            <div class="left-block">
                                <div class="input">
                                    <input class="input-search" name="q" v-model="q"
                                           placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)">
                                </div>
                            </div>
                            <input type="submit" class="search-button" value="Найти">
                        </div>
                    </template>
                </form>
            </div>
            <div class="bottom">
                <search-type :type="search_type" @change-type="changeSearchType($event)"></search-type>
                <template v-if="search_type === 'filter'">
                    <configuration-type :type="type" @change-type="changeConfigurationType($event)"></configuration-type>
                </template>
            </div>
        </div>`,
    el: '#app'
});
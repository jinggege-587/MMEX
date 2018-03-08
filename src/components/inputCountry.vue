<template>
    <div class="intl-tel-input el-input inside fl" :style="width">
        <input class="el-input__inner" style="padding-left:44px;" v-model="country" type="text" readonly="">
        <div class="flag-dropdown" @click="countryList()">
            <div class="selected-flag" title="China (中国): +86">
                <div class="flag " :class="sn">
                    <div class="arrow" :class="{up:isUp}"></div>
                </div>
            </div>
            <ul class="country-list" :class="{hide:isCountryList}">
                <li data-dial-name="China (中国)" @click="countryClick('China (中国)','cn')" class="country preferred active" data-dial-code="86" data-country-code="cn">
                    <div class="flag cn"></div><span class="country-name">China (中国)</span><span class="dial-code">+86</span></li>
                <li data-dial-name="United Kingdom" @click="countryClick('United Kingdom','gb')" class="country preferred" data-dial-code="44" data-country-code="gb">
                    <div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'inputCountry',
        data () {
            return {
                msg: '',
                isUp:false,
                isCountryList:true,
                country:'China (中国)',
                sn:'cn',
            }
        },
        props:{
            width:{
                type:Number,
                default:"width"
            }
        },
        watch: {
            country: function (val) {
                this.$emit("listenToChildEvent",val.toString());
            }
        },
        methods:{
            countryList:function(){
                this.isUp = !this.isUp;
                this.isCountryList = !this.isCountryList;
            },
            countryClick:function(data,sn){
                this.country = data;
                this.sn = sn;
            },
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .intl-tel-input {
        position: relative;
        display: inline-block;
        .flag-dropdown {
            position: absolute;
            top: 0;
            bottom: 0;
            cursor: pointer;
            &:hover{
                .selected-flag {
                    background-color: rgba(0,0,0,0.05)
                }
            }
        }
        .flag {
            margin-top: -5px;
            width: 16px;
            height: 11px;
            display: inline-block;
            background: url("../assets/img/flags.png");
            &.cn {
                background-position: -128px -177px;
            }
            &.gb {
                background-position: -176px -22px;
            }
        }
        .selected-flag {
            z-index: 1;
            position: relative;
            width: 38px;
            height: 100%;
            padding: 0 8px 0 0;
            .arrow {
                position: relative;
                top: 50%;
                margin-top: -2px;
                left: 20px;
                width: 0;
                height: 0;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 4px solid #555;
                &.up {
                    border-top: none;
                    border-bottom: 4px solid #555
                }
            }
        }
        .country-list {
            text-align: left;
            list-style: none;
            position: absolute;
            z-index: 2;
            padding: 0;
            margin: 0 0 0 -1px;
            box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
            background-color: white;
            border: 1px solid #ccc;
            width: 430px;
            max-height: 200px;
            overflow-y: scroll;
            .divider {
                padding-bottom: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #ccc
            }
            .flag{
                margin-right: 6px;
                &.gb {
                    background-position: -176px -22px;
                }
            }
            .country {
                line-height: 11px;
                padding: 7px 10px;
                .dial-code {
                    color: #999
                }
                &:hover{
                    background-color: rgba(0,0,0,0.05)
                }
            }
            .country-name {
                margin-right: 6px;
            }
        }
    }
</style>
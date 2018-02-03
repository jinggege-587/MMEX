<template>
    <div class="label-wrapper flex-center">
        <slot name="explain"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            type:String,
            label:{
                type:String
            },
            miximStyle:{
                type:Object,
                default:function() {
                    return {}
                }
            },
            size:{
                type:Number,
                default:4
            }
        },
        computed:{

        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .label-wrapper{
        padding-top:10px;
        color: #666;
        letter-spacing: 0;
        line-height: 16px;
    }
    .label{
        display: inline-block;
        padding-left:17px;
    }
    .label-right{
        text-align: right;
    }
</style>

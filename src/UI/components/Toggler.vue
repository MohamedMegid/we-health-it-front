<template>
    <div class="toggler-component">
        <ul class="toggler-container">
            <li v-for="(el,index) in data" :key="index" :class="{'active':el==activeElement}" @click.prevent="toogleActive(el)">{{el}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            type:Array,
            required:true
        },
        active:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            activeElement:null,
        }
    },
    created(){
        this.activeElement = this.active;
        this.$emit("input",this.activeElement);
    },
    methods:{
        toogleActive(value){
            this.activeElement = value;
            this.$emit("input",this.activeElement);
        }
    },
}
</script>
<style lang="scss" scoped>
.toggler-component{
.toggler-container{
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 34px;

    color: $secondary-color-2;
    background-color:#F6F9F5 ;
    li{
        text-align: center;
        padding: 10px;
        border-radius: 34px;
        flex-grow: 1;
        cursor: pointer;
    }
    .active{
        background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
        color:white
    }
  }
}

</style>

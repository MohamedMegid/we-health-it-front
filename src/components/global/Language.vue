<template>
  <div class="loacale d-flex align-items-center">
        <a class="nav-link p-2 m-1" @click="changeLocale" href="javascript:void(0)">
            <span class="fs-5 me-1 d-xl-block" v-if="local=='ar'">English</span>
            <span class="fs-5 me-1  d-xl-block" v-else>عربي</span>
            <i class="fe fe-globe"></i>
        </a>
    </div>
</template>

<script>
export default {
  methods:{
    changeLocale(){
        if(this.local=='en'){
            // this.$i18n.locale = 'ar'
            localStorage.setItem("locale",'ar')
            localStorage.setItem("sashrtl",true)
            this.$router.go(0)
        }
        else if(this.local=='ar'){
            // this.$i18n.locale = 'en'
            localStorage.setItem("locale",'en')
            localStorage.removeItem("sashrtl")
            this.$router.go(0)
        }
    },
  },
}
</script>

<style>
.loacale{
    height: 50px !important;
}
</style>
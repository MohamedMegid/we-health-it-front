<template>
    <div class="authentication">
        <Loader />
        <video autoplay muted loop plays-inline class="bg-video">
            <source src="@/assets/authentication/bg-vid.mp4">
        </video>
        <div class="content">
            <div class="container">
                <div class="row lang-selection">
                    <div class="col-12">
                        <Language />
                    </div>
                </div>
                <div class="row auth-wrapper d-flex justify-content-center align-items-center">
                    <div class="col-md-4 col-lg-6">
                        <div class="app-name d-flex justify-content-center align-items-center">
                            <h1>We Health IT App Dev</h1>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-6">
                        <div class="auth-routes d-flex justify-content-center align-items-center">
                            <router-view class="flex-grow-1"></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Language from '@/components/global/Language';
import Loader from '@/components/global/Loader.vue';
export default {
    components:{
        Language,
        Loader
    },

}
</script>
<style lang="scss" scoped>
.authentication{
    width: 100%;
    height: 100vh;
    position: relative;
    padding:10px;
    .bg-video{
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
        min-width: 100%; 
        min-height: 100%;
    }
    .content{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        min-width: 100%; 
        min-height: 100%;
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        .lang-selection{
            
        }
        .app-name{

        }
        .auth-routes{
        }
        .auth-wrapper{
            min-height: 80vh;
        }
    }
}
@media(min-aspect-ratio:16/9){
    .bg-video{
        width: 100%;
        height: auto;
    }
}
@media(max-aspect-ratio:16/9){
    .bg-video{
        width: auto;
        height: 100%;
    }
}


</style>

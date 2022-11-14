<template>
      <!-- PAGE -->
    <div class="page">
        <Loader />
        <div class="page-main">
            <Header />
            <LeftSidebar />
            <Main>
                <slot></slot>
            </Main>
        </div>
        <RightSidebar />
        <Footer />
        <BackToTop />
    </div>
</template>
<script>
import Loader from '@/components/global/Loader.vue'
import Header  from '@/components/global/layout/Header.vue'
import LeftSidebar  from '@/components/global/layout/LeftSidebar.vue'
import Main  from '@/components/global/layout/Main.vue'
import RightSidebar  from '@/components/global/layout/RightSidebar.vue'
import Footer  from '@/components/global/layout/Footer.vue'
import BackToTop from '@/components/global/BackToTop.vue'

export default {
    components:{
        Loader,
        Header,
        LeftSidebar,
        Main,
        RightSidebar,
        Footer,
        BackToTop
    },
}
</script>

<style>

</style>
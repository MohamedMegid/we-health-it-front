<template>
<fragment>
     
        <div class="page">
          <!-- <div class="page-main" style="width: 81%"> -->
            <div class="page-main" > 
                        <!--APP-header-->

          <TheHeader/>
    
            <!--APP-SIDEBAR-->
           <TheSideNav/>
            <!--app-content open-->
            <div class="main-content app-content mt-0">
              <div class="side-app">
                <!-- CONTAINER -->
                <div class="main-container container-fluid">
                  <!-- PAGE-HEADER -->
                  <div class="page-header">
                    <h1 class="page-title">Empty</h1>
                    <div>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="javascript:void(0)">Pages</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Empty
                        </li>
                      </ol>
                    </div>
                  </div>
                  <!-- PAGE-HEADER END -->
    
                  <!-- ROW-1 OPEN -->
                  <!-- Row -->
                  <div class="row">
                    <div class="col-md-12">


                    </div>
                  </div>
                  <!-- /Row -->
                </div>
                <!-- CONTAINER CLOSED -->
              </div>
            </div>  
            <!--app-content closed-->
          </div>
    
          <!-- Country-selector modal-->
         <CountryModal/>
          <!-- Country-selector modal-->
        </div>
    
        <!-- <div
          style="width: 18.7%"
          class="realTimeRecords position-fixed top-0 end-0"
        >
        <TheAvatarCard/>
    
        <TheRealTimeRecord/>
          <TheNews/>
        </div> -->
</fragment>

</template>

<script>
// import TheAvatarCard from "../components/global/userSkeleton/TheAvatarCard";

// import TheNews from "../components/global/userSkeleton/TheNews";

import CountryModal from "@/components/user/CountryModal";
import $ from "jquery";
import { Fragment } from 'vue-fragment'

export default {
    components: {
    Fragment,
    CountryModal,
   // TheNews,
   // TheAvatarCard,
   // TheRealTimeRecord,
},
  methods: {
 
  },
  mounted() {},
  // updated() {
  //   console.log("update");
  // },
};
</script>

<style lang="scss" scoped>
$border-radius: 35px;
$defaultBackground: #f0f0f5;
$overflow-auto: auto;

// .app-sidebar__overlay{
//   background: #00000069;
// }


// .max-h {
//   max-height: 800px;
  
// }
// .defaultBorderRadius {
//   border-radius: $border-radius;
// }
// .background-white {
//   background: white;
// }

// .header {
//   //overwrite the default
//   border: 0px;
// }

// .realTimeRecords {
//   z-index: 8;
//   height: 100%;

//   .profile-container {
//     height: 7%;
//     min-height: 65px;
//     .profile {
//       min-height: 50px;
//       @extend .defaultBorderRadius;
//       width: 96%;
//       background: #fff;
//       margin-top: 14px;
//     }
//   }
//   .records {
//     height: 55%;
//     background: #fff;
//     width: 96%;
//     @extend .defaultBorderRadius;

//     box-shadow: 0px -7px -2px #77e095;
//   }
//   .news {
//     height: 30%;
//     background: #fff;
//     @extend .defaultBorderRadius;

//     width: 96%;
//   }
// }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

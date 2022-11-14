<template>
  <Fragment>
    <div   v-if="ltr"
      class="sidebar-tab position-absolute customPositionLtr d-md-none"
      id="sidebar-tab"
    >
      <div
        class="vertical-text text-center background p-2"
        @click="toggleSidebar"
      >
        <span> قياسات</span>
        <!-- <span class="arrow vertical-text active"></span> -->
      </div>
    </div>
    <div v-if="ltr"
      data-mdb-toggle="animation"
      class="records rightLtr position-relative overflow-auto"
    >
      <Graphs />
    </div>

    <div    v-if="!ltr"
      class="sidebar-tab position-absolute customPosition d-md-none "
      id="sidebar-tab"
    >
      <div
        class="vertical-text text-center background p-2"
        @click="toggleSidebar"
      >
        <span> CASE MEASUREMENTS</span>
        <!-- <span class="arrow vertical-text active"></span> -->
      </div>
    </div>
    <div  v-if="!ltr"
      data-mdb-toggle="animation"
      class="records right position-relative overflow-auto "
    >
      <Graphs />
    </div>
  </Fragment>
</template>

<script>
import Graphs from "../../user/Graphs.vue";
import $ from "jquery";
import { Fragment } from "vue-fragment";

export default {
  components: { Graphs, Fragment },
  data(){
    return {
      ltr: localStorage.getItem("sashrtl"),
    };
  },
  mounted(){
     this.ltr= localStorage.getItem("sashrtl") },
  watch:{
   ltr(v){
    console.log(v)
   }
  },
  updated(){
    console.log("updated")
  },
  methods: {
    toggleSidebar() {
      if(this.ltr)
      {

        $(".records").toggleClass("negativeRightLtr");
        $("#sidebar-tab").toggleClass("PositiveLeftLtr");
      }
      else
      {

        $(".records").toggleClass("negativeRight");
        $("#sidebar-tab").toggleClass("PositiveLeft");
      }

    },
  },
};
</script>

<style scoped>
.right {
  transition: all 0.5s ease-in-out;
  right: 0;
}

.rightLtr {
  transition: all 0.5s ease-in-out;
  right: 0% !important;
}

.background {
  cursor: pointer;
  font-size: 2vmin !important;
  background: #fff;
  box-shadow: 0px 0px 27px grey;
  width: max-content;
}
#sidebar-tab {
  width: fit-content;
}

.negativeRight {
  transition: all 0.5s ease-in-out;
  right: -95% !important;
}
.customPosition {
  transition: all 0.5s ease-in-out;
  left: 0;
  top: 48%;
}

.PositiveLeft {
  transition: all 0.5s ease-in-out;
  left: 100%;
}

.vertical-text {
  transform: rotate(270deg);
  transform-origin: left 2rem;
  vertical-align: middle;
}

@media only screen and (max-width: 768px) {
  .customPositionLtr {
    transition: all 0.5s ease-in-out;
    left: 26%;
    top: 48%;
  }

  .customPosition {
    transition: all 0.5s ease-in-out;
    left: 100%;
    top: 48%;
  }

  .PositiveLeft {
    transition: all 0.5s ease-in-out;
    left: 0;
    top: 48%;
  }

  .PositiveLeftLtr {
    transition: all 0.5s ease-in-out;
    left: 124% !important;
    top: 48%;
  }

  .right {
    transition: all 0.5s ease-in-out;
    right: -95% !important;
  }

  .rightLtr {
    transition: all 0.5s ease-in-out;
    right: 100% !important;
  }

  .negativeRight {
    transition: all 0.5s ease-in-out;
    right: 0% !important;
  }

  .negativeRightLtr {
    transition: all 0.5s ease-in-out;
    right: 0% !important;
  }
}
</style>

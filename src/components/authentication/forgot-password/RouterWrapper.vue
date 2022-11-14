<template>
  <Base>
    <div class="back-btn mb-3">
      <button type="button" class="btn btn-icon btn-primary btn-sm" @click.prevent="goBack">
        <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <router-view></router-view>
  </Base>
</template>
<script>
import Base from "@/components/global/Base.vue";
export default {
  name: "RouterWrapper",
  components: {
    Base,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

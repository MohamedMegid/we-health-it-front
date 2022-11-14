<template>
  <div
    class="col col-sm-6 align-items-center d-flex border   p-0 justify-content-between radius"
  >
    <span class="ps-3 m-0 font ">
      {{ spanLabel}}
      <span v-if="seconds"> {{ seconds + " " + $t("phoneNumber.seconds") }}</span>
    </span>
    <button @click.prevent="func" class="btn btn-primary btn-pill p-0 h-100">
      {{ buttonLabel }}
    </button>
  </div>
</template>
<i18n src="@/lang/authentication/signUp/step2Phone.json"></i18n>

<script>
export default {

    props:["buttonLabel","spanLabel","seconds","func"]
};
</script>

<style scoped>

.font{
    font-size:.9rem !important
}
</style>

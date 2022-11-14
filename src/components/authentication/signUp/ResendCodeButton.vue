<template>
  <div
    class="col col-sm-6 align-items-center d-flex border   p-0 justify-content-between radius margin-custom"
  >
    <span class="ps-3 m-0 font ">
      {{ spanLabel}}
      <span v-if="seconds"> {{ seconds + " " + $t("phoneNumber.seconds") }}</span>
    </span>
    <button @click.prevent="func" :class="`btn btn-primary ${local === 'en' ? 'btn-custom-resend-ltr' : 'btn-custom-resend-rtl'}`">
      {{ buttonLabel }}
    </button>
  </div>
</template>
<i18n src="@/lang/authentication/signUp/step2Phone.json"></i18n>

<script>
export default {

    props:["buttonLabel","spanLabel","seconds","func", "local"]
};
</script>

<style scoped>

.font{
    font-size:.8rem !important
}

.btn-custom-resend-ltr {
    border-radius: inherit;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.btn-custom-resend-rtl {
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.margin-custom {
    margin: inherit !important;
}

</style>

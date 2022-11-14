<template>
  <div class="phone-verification">
    <h2 class="mb-1 mt-3">{{ $t("title") }}</h2>
    <h6>{{ $t("text") }}</h6>
    <p class="text-muted my-4">{{ $t("hint") }}</p>
    <div class="form-group w-50">
      <input
        v-model.trim="code"
        type="number"
        class="form-control"
        @input="$v.code.$touch()"
        @keyup.enter.prevent="done"
        :placeholder="$t('code.placeholder')"
        :class="{
          'is-invalid':
            $v.code.$invalid && $v.code.$anyDirty && $v.code.$anyError,
        }"
      >
      <div v-if="!$v.code.required && $v.code.$error" class="invalid-feedback">
        {{
          requiredError($t("code.label"))}}
      </div>
      <div v-else-if="!$v.code.numeric && $v.code.$error" class="invalid-feedback">
        {{
          numericError($t("code.label"))}}
      </div>
      <div v-else-if="!$v.code.minLen && $v.code.$error" class="invalid-feedback">
        {{
          minLengthError($t("code.label"),$v.code.$params.minLen.min)}}
      </div>
      <div v-else-if="!$v.code.maxLen && $v.code.$error" class="invalid-feedback">
        {{
          maxLengthError($t("code.label"),$v.code.$params.maxLen.max)}}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
        <div class="remaining-time-wrapper">
            <h6 class="mb-0">
                <strong>{{ $t('remaining')}} :</strong>
                <span class="me-1 text-primary">{{ countDown }} {{ $t('second')}}</span>
            </h6>
        </div>
        <div class="d-flex gap-3">
          <button
            :disabled="countDown != 0"
            class="btn btn-info btn-pill"
            @click.prevent="resend"
          >
          {{ $t("resendBtn") }}
          </button>
          <button
            class="btn btn-primary btn-pill"
            @click.prevent="done"
            >
            {{ $t("doneBtn") }}
          </button>
        </div>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/phoneVerification.json"></i18n>
<script>
import { required,numeric,minLength, maxLength } from "vuelidate/lib/validators";
import { requiredError,numericError,minLengthError, maxLengthError } from "@/validation/errors.js";

export default {
  name: "phoneVerification",
  components: {
  },
  data() {
    return {
      requiredError,
      numericError,
      minLengthError,
      maxLengthError,
      countDown: 60,
      code:null,
    };
  },
  
  validations: {
    code: {
      required,
      numeric,
      minLen:minLength(6),
      maxLen: maxLength(6),
    },
  },
  mounted() {
    this.countDownTimer();
  },
  methods: {
    countDownTimer () {
        if (this.countDown > 0) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }
    },
    resend() {
      if (this.countDown === 0) {
        alert("Your Code Has been successfully sent to your phone")
        this.countDown = 60
        this.countDownTimer();
      }
    },
    done(){
      this.$v.$touch();
      console.log("done")
      if(!this.$v.$invalid){
        this.$router.push({name:'newPassword'})
      }
      else 
        console.log("Fuck You Bitch")
    },
  },
};
</script>
<style lang="scss" scoped>
.phone-verification {
}
</style>

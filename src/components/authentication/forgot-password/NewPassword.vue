<template>
  <div class="new-password">
    <h2 class="mb-0">{{ $t("title") }}</h2>
    <h5>{{ $t("text") }}</h5>
    <div class="form-group w-50">
      <label>{{ $t("password.label") }}</label>
      <div
        class="wrap-input50 input-group"
        :class="locale=='ar'?'input-group-rtl':'input-group-ltr'"

      >
        <a
          href="javascript:void(0)"
          @click="hidePassword=!hidePassword"
          class="input-group-text bg-white text-muted"
          :class="{
          'border-danger':
            $v.password.$invalid &&
            $v.password.$anyDirty &&
            $v.password.$anyError,
        }"
        >
          <i class="zmdi text-muted" :class="hidePassword?'zmdi-eye-off':'zmdi-eye'" aria-hidden="true"></i>
        </a>
        <input
        class="input100 form-control"
        v-model.trim="password"
        :type="hidePassword?'password':'text'"
        @input="$v.password.$touch()"
        :placeholder="$t('password.placeholder')"
        :class="{
          'is-invalid':
            $v.password.$invalid &&
            $v.password.$anyDirty &&
            $v.password.$anyError,
        }"
        />
      </div>
      <div
        v-if="!$v.password.required && $v.password.$error"
        class="invalid-feedback"
      >
        {{ requiredError($t("password.label")) }}
      </div>
      <div
        v-else-if="!$v.password.minLen && $v.password.$error"
        class="invalid-feedback"
      >
        {{
          minLengthError($t("password.label"), $v.password.$params.minLen.min)
        }}
      </div>
      <div
        v-else-if="!$v.password.maxLen && $v.password.$error"
        class="invalid-feedback"
      >
        {{
          maxLengthError($t("password.label"), $v.password.$params.maxLen.max)
        }}
      </div>
    </div>
    <div class="form-group w-50">
      <label>{{ $t("confirmPassword.label") }}</label>
      <div
        class="wrap-input50 input-group"
        :class="locale=='ar'?'input-group-rtl':'input-group-ltr'"
      >
        <a
          href="javascript:void(0)"
          @click="hideConfirmPassword=!hideConfirmPassword"
          class="input-group-text bg-white text-muted"
          :class="{
          'border-danger':
            $v.confirmPassword.$invalid &&
            $v.confirmPassword.$anyDirty &&
            $v.confirmPassword.$anyError,
        }"
        >
          <i class="zmdi text-muted" :class="hideConfirmPassword?'zmdi-eye-off':'zmdi-eye'" aria-hidden="true"></i>
        </a>
        <input
        class="input100 form-control"
        v-model.trim="confirmPassword"
        :type="hideConfirmPassword?'password':'text'"
        @input="$v.confirmPassword.$touch()"
        :placeholder="$t('confirmPassword.placeholder')"
        :class="{
          'is-invalid':
            $v.confirmPassword.$invalid &&
            $v.confirmPassword.$anyDirty &&
            $v.confirmPassword.$anyError,
        }"
        />
      </div>
            <div
        v-if="!$v.confirmPassword.match && $v.confirmPassword.$error"
        class="invalid-feedback"
      >
        {{ sameAsError($t("password.label")) }}
      </div>
    </div>
    <!-- <div class="form-group w-50 password">
      <label>{{ $t("password.label") }}</label>
      <input
        v-model.trim="password"
        type="password"
        class="form-control"
        @input="$v.password.$touch()"
        :placeholder="$t('password.placeholder')"
        :class="{
          'is-invalid':
            $v.password.$invalid &&
            $v.password.$anyDirty &&
            $v.password.$anyError,
        }"
      />
      <div
        v-if="!$v.password.required && $v.password.$error"
        class="invalid-feedback"
      >
        {{ requiredError($t("password.label")) }}
      </div>
      <div
        v-else-if="!$v.password.minLen && $v.password.$error"
        class="invalid-feedback"
      >
        {{
          minLengthError($t("password.label"), $v.password.$params.minLen.min)
        }}
      </div>
      <div
        v-else-if="!$v.password.maxLen && $v.password.$error"
        class="invalid-feedback"
      >
        {{
          maxLengthError($t("password.label"), $v.password.$params.maxLen.max)
        }}
      </div>
    </div> -->
    <!-- <div class="form-group w-50 confirm-password">
      <label>{{ $t("confirmPassword.label") }}</label>
      <input
        v-model.trim="confirmPassword"
        type="password"
        class="form-control"
        @input="$v.confirmPassword.$touch()"
        :placeholder="$t('confirmPassword.placeholder')"
        :class="{
          'is-invalid':
            $v.confirmPassword.$invalid &&
            $v.confirmPassword.$anyDirty &&
            $v.confirmPassword.$anyError,
        }"
        @keyup.enter.prevent="newPassword"
      />
      <div
        v-if="!$v.confirmPassword.match && $v.confirmPassword.$error"
        class="invalid-feedback"
      >
        {{ sameAsError($t("password.label")) }}
      </div>
    </div> -->
    <div class="form-group d-flex justify-content-end gap-3">
      <button class="btn btn-primary btn-pill" @click.prevent="newPassword">
        {{ $t("doneBtn") }}
      </button>
      <button
        class="btn btn-danger btn-pill"
        @click.prevent="$router.push({ name: 'login' })"
      >
        {{ $t("cancelBtn") }}
      </button>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/newPassword.json"></i18n>
<script>
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  sameAsError,
} from "@/validation/errors.js";

export default {
  name: "NewPassword",
  components: {},
  data() {
    return {
      requiredError,
      minLengthError,
      maxLengthError,
      sameAsError,
      ////////////////////////////////
      hidePassword:true,
      hideConfirmPassword:true,
      password: "",
      confirmPassword: "",
    };
  },
  validations: {
    password: {
      required,
      minLen: minLength(8),
      maxLen: maxLength(68),
    },
    confirmPassword: {
      match: sameAs("password"),
    },
  },
  methods: {
    newPassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // alert("Your Password Has been successfully changed");
        this.$router.push({ name: "home" });
      } else console.log("Fuck You Bitch");
    },
  },
};
</script>
<style lang="scss" >
.new-password {
  .input-group-ltr{
    input{
      border-radius:0rem 2rem 2rem 0rem !important
    }
    a{
        border-radius: 2rem 0rem 0rem 2rem !important;
    }
  }
  .input-group-rtl{
    input{
      border-radius:2rem 0rem 0rem 2rem !important
    }
    a{
        border-radius: 0rem 2rem 2rem 0rem !important;
    }
  }
}
</style>

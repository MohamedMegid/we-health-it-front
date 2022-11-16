
<template>
  <div>
    <Base>
      <p class="fw-lighter">{{ $t("Step_2_of_2") }}</p>
      <h1 class="mb-0">{{ $t("signUp") }}</h1>
      <form>
        <div class="form-group mt-4">
          <div class="row justify-content-between">
            <div class="col-md-8">
              <!-- start fullName -->
              <label>
                <strong>{{ $t("fullName") }}</strong>
              </label>
              <input
                type="text"
                class="form-control"
                :placeholder="$t('placeHolder.fullName')"
                v-model.trim="form.fullName"
                @input="$v.form.fullName.$touch()"
                :class="{
                  'is-invalid':
                    $v.form.fullName.$invalid &&
                    $v.form.fullName.$anyDirty &&
                    $v.form.fullName.$anyError,
                }"
              />
              <div
                v-if="!$v.form.fullName.required && $v.form.fullName.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("fullName")) }}
              </div>
              <div
                v-else-if="!$v.form.fullName.valid && $v.form.fullName.$error"
                class="invalid-feedback"
              >
                {{ inputError($t("fullName")) }}
              </div>
            </div>
            <!-- end full name  -->
            <!-- start user name  -->
            <div class="col-md-4">
              <label>
                <strong>{{ $t("username") }}</strong>
              </label>
              <input
                type="text"
                class="form-control"
                :placeholder="$t('placeHolder.username')"
                v-model.trim="form.username"
                :class="{
                  'is-invalid':
                    !$v.form.username.required && $v.form.username.$error,
                }"
              />
              <div
                v-if="!$v.form.username.required && $v.form.username.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("username")) }}
              </div>
            </div>
          </div>
          <!-- end user name  -->
          <!-- start email  -->




          <div class="mt-3">
            <label
              ><strong>{{ $t("emailAddress") }}</strong>
              <small>{{ $t("notRequired") }}</small></label
            >
            <input
              type="text"
              class="form-control"
              :placeholder="$t('placeHolder.emailAddress')"
              v-model.trim="form.email"
              :class="{
                  'is-invalid':
                    !$v.form.email.email && $v.form.email.$error,
                }"
            />

            <div
                v-if=" !$v.form.email.email && $v.form.email.$error"
                class="invalid-feedback"
              >
                {{ inputError($t("emailAddress")) }}
              </div>
          </div>

          <!-- end email  -->
          <!-- start  date picker  -->
          <div class="mt-3">
            <label>
              <strong>{{ $t("birthDate") }}</strong>
            </label>
            <VueDatePicker
              v-model="form.date"
              ref="menu"
              :max-date="new Date().toISOString().substr(0, 10)"
              min-date="1980-01-01"
              @onOpen="menu = true"
              :rtl="false"
              placeholder="Choose date"
              color="#6c5ffc"
              fullscreen-mobile
              :locale="{ lang: '' }"
              @onClose="
                menu = false;
                datePicked = true;
              "
            >
              <!-- 2.6 notation -->
              <template #activator="{ date }">
                <div class="input-group">
                  <input
                    ref="inputDate"
                    class="form-control fc-datepicker hasDatepicker"
                    :value="datePicked ? date : 'YYYY/MM/DD'"
                    type="text"
                    :class="`${
                      local === 'en' ? 'asset-custom-rtl' : 'asset-custom-ltr'
                    } ${
                        $v.form.birthDate.$error &&  !datePicked
                  ? 'is-invalid'
                  : ''
              }`"
                  />
                  <div
                    :class="`input-group-text justify-content-center w-15 ${
                      local === 'en' ? 'asset-custom-ltr' : 'asset-custom-rtl'
                    }`"
                  >
                    <i class="fa fa-calendar tx-16 lh-0 op-6"></i>
                  </div>
                  <div v-if="$v.form.birthDate.$error &&  !datePicked" class="invalid-feedback">
                    {{ requiredError($t("birthDate")) }}
                  </div>
                </div>
              </template>
            </VueDatePicker>
          </div>
          <!-- end date picker  -->
          <!-- start gender -->
          <div class="form-group mt-3">
            <label class="form-label">{{ $t("gender") }}</label>
            <select
              v-model="form.gender"
              required
              :class="`form-select radius bg-white ${
                local === 'en' ? 'arrow' : ''
              } ${
                $v.form.gender.$invalid &&
                $v.form.gender.$anyDirty &&
                $v.form.gender.$anyError
                  ? 'is-invalid'
                  : ''
              }`"
            >
              <option value="gender">
                -- {{ $t("select") }} {{ $t("placeHolder.gender") }} --
              </option>
              <option value="male">{{ $t("placeHolder.male") }}</option>
              <option value="female">{{ $t("placeHolder.female") }}</option>
            </select>
            <div v-if="$v.form.gender.$error" class="invalid-feedback">
              {{ requiredError($t("gender")) }}
            </div>
          </div>
          <!-- end gender  -->
          <p class="pt-3">
            <span class="signup-message-custom"
              >{{ $t("termsText") }}
              <a href="#"> {{ $t("termsLink") }}</a></span
            >
          </p>
          <div class="text-center">
            <button
              @click.prevent="submitButton"
              class="btn btn-primary btn-pill w-50"
            >
              {{ $t("done") }}
            </button>
          </div>
        </div>
      </form>
    </Base>
  </div>
</template>
<i18n src="@/lang/authentication/signUp/step2Email.json"></i18n>
<script>
import Base from "@/components/global/Base.vue";
import { VueDatePicker } from "@mathieustan/vue-datepicker";
/////////////////////////////////////
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import {
  requiredError,
  inputError,
  maxLengthError,
  unauthorizedError,
  minLengthError,
} from "@/validation/errors.js";
/////////////////////////////
import axios from "axios";
import { urls } from "@/backend/urls.js";
export default {
  name: "login",
  components: {
    Base,
    VueDatePicker,
  },
  data() {
    return {
      requiredError,
      inputError,
      unauthorizedError,
      minLengthError,
      maxLengthError,
      interval: null,
      phoneOrEmail: null,
      date: new Date(),
      sendCode: false,
      menu: false,
      datePicked: false,
      seconds: 0,
      form: {
        fullName: "",
        email: "",
        username: "",
        birthDate: "",
        phone: "010",
        phoneNumber: "",
        phoneNumberCode: "",
        date: new Date(),
        gender: "gender",
      },
      submitStatus: "",
    };
  },
  validations: {
    form: {
      fullName: {
        required,
        maxLen: maxLength(40),
      },
      email: {
        email,
      },

      username: {
        required,
        maxLen: maxLength(20),
        valid(value) {
          if (!value) return true;
          if (value.search(/^[a-z0-9_.]+$/g) != -1) return true;
        },
      },



      birthDate: {
        required,
        valid() {
          let value = this.$refs.inputDate.value;
          if (value === "YYYY/MM/DD") return false;
          else true;
          //  // (YYYY-MM-DD)
          //  var g2 = new Date(2019 - 08 - 03);
          //  if (g1.getTime() < g2.getTime())
          //      document.write("g1 is lesser than g2");
          //  else if (g1.getTime() > g2.getTime())
          //      document.write("g1 is greater than g2");
          //  else
          //      document.write("both are equal");
        },
      },
      gender: {
        required,
        valid(value) {
          if (value === "female" || value === "male") return true;
          else return false;
        },
      },
    },
  },
  created() {
    // console.log(urls)
    // create axios instance
    this.myAxios = axios.create({
      baseURL: `${urls.auth.baseUrl}`,
    });
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.menu.$refs.agenda.mode = "year"));
    },
  },
  mounted() {},
  methods: {
    async submitButton() {
      this.$v.$touch();
      //   if (!this.$v.form.$error) {
      //     if (this.phoneOrEmail === "phone")
      //       this.$router.push("/auth/verify-phone");
      //   }
    },
    async resend() {
      if (this.form.phoneNumber) {
        this.sendCode = true;
        clearInterval(this.interval);
        this.seconds = 10;
        this.interval = setInterval(() => {
          this.seconds -= 1;
          if (this.seconds <= 0) clearInterval(this.interval);
        }, 1000);
      } else {
        await this.$v.form.phoneNumber.$touch();
      }
    },
    open() {
      document.querySelector(".vd-picker__input-icon").click();
    },
    setDate() {
      this.form.birthDate = this.form.date;
    },
  },
};
</script>
<style>
.radius {
  border-radius: 35px;
}

@media only screen and (min-width: 600px) {
  .vd-menu__content {
    top: 24% !important;
    left: 48% !important;
  }
}

.signup-message-custom {
  font-weight: 350;
  font-size: 84%;
  display: inline-block;
}
</style>

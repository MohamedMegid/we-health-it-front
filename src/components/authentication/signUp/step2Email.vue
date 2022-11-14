/* eslint-disable */
<template>
  <div>
    <Base>
      <h1 class="mb-0">{{ $t("signUp") }}</h1>

      <form>
        <div class="form-group mt-4">
          <div class="row justify-content-between">
            <div class="col-md-8">
              <label
                ><strong>{{ $t("fullName") }}</strong></label
              >
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
            <div class="col-md-4">
              <label
                ><strong>{{ $t("username") }}</strong></label
              >
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
            />
          </div>

          <div class="mt-3">
            <label
              ><strong>{{ $t("birthDate") }}</strong></label
            >

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
                <div class="input-group pinter ">
                  <input
                    ref="inputDate"
                    class="form-control  fc-datepicker hasDatepicker"
                    :value="datePicked ? date : 'YYYY/MM/DD'"
                    type="text"
                  />
                  <div class="input-group-text">
                    <i class="fa fa-calendar tx-16 lh-0 op-6"></i>
                  </div>
                  <!-- <p
                    class="text-danger"
                    v-if="$refs.inputDate.value === 'YYYY/MM/DD'"
                  >
                    {{ requiredError($t("birthDate")) }}
                  </p> -->
                </div>
              </template>
            </VueDatePicker>
          </div>


          <div class="form-group  mt-3">
            <label class="form-label ">{{ $t("gender") }}</label>
            <select
              v-model="form.gender"
              :class="`form-select form-control ${local === 'en' ? 'arrow' : ''}`"
              required
            >
              <option value="gender">{{ $t("placeHolder.gender") }}</option>
              <option value="male">{{ $t("placeHolder.male") }}</option>
              <option value="female">{{ $t("placeHolder.female") }}</option>
            </select>
            <p class="text-danger" v-if="$v.form.gender.$error">
              {{ requiredError($t("gender")) }}
            </p>
          </div>
          <p class="lead my-3">{{ $t("termsText") + $t("termsLink") }}</p>

          <div class="text-center">
            <button
              @click.prevent="submitButton"
              class="btn btn-primary btn-pill h3"
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
import { mapGetters } from "vuex";
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
      phoneOrEmail: null,
      date: new Date(),
      menu: false,
      datePicked: false,
      form: {
        fullName: "",
        email: "",
        username: "",
        birthDate: "",
        rememberMe: true,
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
        required,
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
    open() {
      document.querySelector(".vd-picker__input-icon").click();
    },

    setDate() {
      this.form.birthDate = this.form.date;
    },
  },
};
</script>

<style >
.arrow {
  background-position: right 0.75rem center !important;
}
.pinter{
  cursor: pointer;
}
@media only screen and (min-width: 600px) {
  .vd-menu__content {
    top: 24% !important;
    left: 48% !important;
  }
}
</style>

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
                        <input type="text" class="form-control" :placeholder="$t('placeHolder.fullName')" v-model.trim="form.fullName" @input="$v.form.fullName.$touch()" :class="{
                          'is-invalid':
                            $v.form.fullName.$invalid &&
                            $v.form.fullName.$anyDirty &&
                            $v.form.fullName.$anyError,
                        }" />
                        <div v-if="!$v.form.fullName.required && $v.form.fullName.$error" class="invalid-feedback">
                            {{ requiredError($t("fullName")) }}
                        </div>
                        <div v-else-if="!$v.form.fullName.valid && $v.form.fullName.$error" class="invalid-feedback">
                            {{ inputError($t("fullName")) }}
                        </div>
                    </div>
                    <!-- end full name  -->
                    <!-- start user name  -->
                    <div class="col-md-4">
                        <label>
                            <strong>{{ $t("username") }}</strong>
                        </label>
                        <input type="text" class="form-control" :placeholder="$t('placeHolder.username')" v-model.trim="form.username" :class="{
                          'is-invalid':
                            !$v.form.username.required && $v.form.username.$error,
                        }" />
                        <div v-if="!$v.form.username.required && $v.form.username.$error" class="invalid-feedback">
                            {{ requiredError($t("username")) }}
                        </div>
                    </div>
                </div>
                <!-- end user name  -->
                <!-- start phone number -->
                <div class="mt-3">
                    <!-- send code -->
                    <div v-if="!sendCode" class="send code">
                        <label>
                            <strong>{{ $t("phoneNumber.label") }}</strong>
                        </label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" v-model="form.phoneNumber.phone" :placeholder="$t('phoneNumber.label')" @input="$v.form.phoneNumbe.$touch()" aria-label="Recipient's username" aria-describedby="button-addon2" :class="{
                              'is-invalid':
                                $v.form.phoneNumbe.$invalid &&
                                $v.form.phoneNumbe.$anyDirty &&
                                $v.form.phoneNumbe.$anyError,
                            }" />
                            <button :class="`btn btn-primary ${local === 'en' ? 'btn-custom-ltr' : 'btn-custom-rtl'}`" type="button" id="button-addon2" @click="resend">
                                {{ $t("phoneNumber.sendCode")}}
                            </button>
                            <div v-if="!$v.form.phoneNumbe.required" class="invalid-feedback">
                                {{ requiredError($t("phoneNumber.label")) }}
                            </div>
                            <div v-else-if="!$v.form.phoneNumbe.valid && $v.form.phoneNumbe.$error" class="invalid-feedback">
                                {{ inputError($t("phoneNumber.label")) }}
                            </div>
                        </div>
                    </div>
                    <!-- after send code active button -->
                    <div v-if="sendCode" class="active">
                        <label>
                            <strong>{{ $t("phoneNumber.label") }}</strong>
                        </label>
                        <input type="text" class="form-control " v-model="form.phoneNumber.phone" @input="$v.form.phoneNumbe.$touch()" :class="{ 'is-invalid': $v.form.phoneNumbe.$invalid }" />
                        <div class="row mt-3">
                            <div class=" col-sm-5 mt-3">
                                <input type="text" class="form-control" :placeholder="$t('phoneNumber.enterCode')" v-model.trim="form.phoneNumber.code" @input="$v.form.phoneNumberCode.$touch()" :class="{
                              'is-invalid':
                                $v.form.phoneNumberCode.$invalid &&
                                $v.form.phoneNumberCode.$anyDirty &&
                                $v.form.phoneNumberCode.$anyError,
                            }" />
                            </div>
                            <div class="col-sm-1"></div>
                            <ResendCodeButton v-if="seconds
                                    <=0" :buttonLabel="$t('phoneNumber.resend')" :spanLabel="$t('phoneNumber.resendTitle')" :function="resend" :seconds="0" :local="local" />
                            <ResendCodeButton v-if="seconds>0" :buttonLabel="$t('phoneNumber.ActiveButton')" :spanLabel="$t('phoneNumber.RemainingTime')" :seconds="seconds" :local="local" />
                        </div>
                    </div>
                </div>
                <!-- end phone number  -->
                <!-- start  date picker  -->
                <div class="mt-3">
                    <label>
                        <strong>{{ $t("birthDate") }}</strong>
                    </label>
                    <VueDatePicker v-model="form.date" ref="menu" :max-date="new Date().toISOString().substr(0, 10)" min-date="1980-01-01" @onOpen="menu = true" :rtl="false" placeholder="Choose date" color="#6c5ffc" fullscreen-mobile :locale="{ lang: '' }" @onClose="
                        menu = false;
                        datePicked = true;
                      ">
                        <!-- 2.6 notation -->
                        <template #activator="{ date }">
                            <div class="input-group">
                                <input ref="inputDate" class="form-control fc-datepicker hasDatepicker" :value="datePicked ? date : 'YYYY/MM/DD'" type="text" :class="{
                                  'is-invalid':
                                    $v.form.birthDate.$invalid &&
                                    $v.form.birthDate.$anyDirty &&
                                    $v.form.birthDate.$anyError,
                                }" />
                                <div class="input-group-text">
                                    <i class="fa fa-calendar tx-16 lh-0 op-6"></i>
                                </div>
                                <div v-if="$v.form.birthDate.$error" class="invalid-feedback">
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
                    <select v-model="form.gender" required :class="`form-select radius ${local === 'en' ? 'arrow' : ''} ${
                        $v.form.birthDate.$invalid &&
                        $v.form.birthDate.$anyDirty &&
                        $v.form.birthDate.$anyError ? 'is-invalid': ''
                    }`">
                        <option value="gender">{{ $t("placeHolder.gender") }}</option>
                        <option value="male">{{ $t("placeHolder.male") }}</option>
                        <option value="female">{{ $t("placeHolder.female") }}</option>
                    </select>
                    <div v-if="$v.form.gender.$error" class="invalid-feedback">
                        {{ requiredError($t("gender")) }}
                    </div>
                </div>
                <!-- end gender  -->
                <p class="pt-3">
                    <span class="signup-message-custom">{{ $t("termsText") }} <a href="#"> {{ $t("termsLink") }}</a></span>
                </p>
                <div class="text-center">
                    <button @click.prevent="submitButton" class="btn btn-primary btn-pill w-50">
                        {{ $t("done") }}
                    </button>
                </div>
            </div>
        </form>
        </Base>
    </div>
</template>
<i18n src="@/lang/authentication/signUp/step2Phone.json"></i18n>
<script>
    import Base from "@/components/global/Base.vue";
    import {
        VueDatePicker
    } from "@mathieustan/vue-datepicker";
    import {
        mapGetters
    } from "vuex";
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
    import {
        urls
    } from "@/backend/urls.js";
    import ResendCodeButton from "./ResendCodeButton.vue";
    export default {
        name: "login",
        components: {
            Base,
            VueDatePicker,
            ResendCodeButton
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
                    phoneNumber: {
                        phone: "",
                        code: "",
                    },
                    date: new Date(),
                    gender: "gender",
                },
                submitStatus: ""
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
                phoneNumbe: {
                    required,
                    valid(value) {
                        if (!value) return true;
                        else if (value.search(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1) return true;
                        else return false;
                    },
                    maxLen: maxLength(15),
                },
                phoneNumberCode: {
                    required,
                    valid(value) {
                        if (!value) return true;
                        else if (value.search(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1) return true;
                        else return false;
                    },
                    maxLen: maxLength(6),
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
            resend() {
                if (this.form.phoneNumber.phone) {
                    this.sendCode = true;
                    clearInterval(this.interval);
                    this.seconds = 10;
                    this.interval = setInterval(() => {
                        this.seconds -= 1;
                        if (this.seconds <= 0) clearInterval(this.interval);
                    }, 1000);
                } else {
                    this.$v.form.phoneNumbe.$touch();
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

    .btn-custom-rtl {
        border-radius: inherit !important;
        border-top-left-radius: 15px !important;
        border-bottom-left-radius: 15px !important;
    }

    .btn-custom-ltr {
        border-radius: inherit !important;
        border-top-right-radius: 15px !important;
        border-bottom-right-radius: 15px !important;
    }

    .signup-message-custom {
        font-weight: 350;
        font-size: 84%;
        display: inline-block;
    }
</style>
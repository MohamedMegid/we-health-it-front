<template>
    <div class="wrap-login100 p-1 asset-radius-sys">
        <Base>
            <p class="gray-light-color-palette">{{ $t("Step_1_of_2") }}</p>
            <h1 class="mb-2 blue-navy-color-palette"><b>{{ $t("signUp") }}</b></h1>
            <p>
                {{ $t("slogan") }}
                <!-- <router-link to="#">{{ $t("signIn") }}</router-link> -->
            </p>
            <form>
                <div class="form-group mt-3" v-if="complaint=3">
                    <label
                        ><strong>{{ $t("form.username.label") }}</strong></label
                    >
                    <div class="flex-grow-1">
                        <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('form.username.placeholder')"
                            v-model.trim="form.username"
                            @input="$v.form.username.$touch()"
                            :class="{
                                'is-invalid':
                                    ( $v.form.username.$invalid &&
                                    $v.form.username.$anyDirty &&
                                    $v.form.username.$anyError ) || (backendError)
                            }"
                        />
                        <div class="invalid-feedback">{{ backendError }}</div>
                        <div
                            v-if="
                                !$v.form.username.required &&
                                    $v.form.username.$error
                            "
                            class="invalid-feedback"
                        >
                            {{ requiredError($t("form.username.label")) }}
                        </div>
                        <div
                            v-if="
                                !$v.form.username.valid &&
                                    $v.form.username.$error
                            "
                            class="invalid-feedback"
                        >
                            {{ inputError($t("form.username.label")) }}
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <label
                            ><strong>{{ $t("form.password.label") }}</strong></label
                        >
                        <div class="flex-grow-1 wrap-input50 input-group">
                            
                            <input
                                :type="hidePassword?'password':'text'"
                                class="form-control"
                                :placeholder="$t('form.password.placeholder')"
                                v-model.trim="form.password"
                                @input="$v.form.password.$touch()"
                                :class="`${
                                    local === 'en'
                                        ? 'custom-password-rtl'
                                        : 'custom-password-ltr'
                                } ${
                                    $v.form.password.$invalid &&
                                    $v.form.password.$anyDirty &&
                                    $v.form.password.$anyError
                                        ? 'is-invalid'
                                        : ''
                                }`"
                            />
                            <a
                                href="javascript:void(0)"
                                @click="hidePassword=!hidePassword"
                                class="input-group-text bg-white text-muted custom-password-eye"
                                :class="`${
                                    local === 'en'
                                        ? 'asset-custom-ltr'
                                        : 'asset-custom-rtl'
                                } ${
                                    $v.form.password.$invalid &&
                                    $v.form.password.$anyDirty &&
                                    $v.form.password.$anyError
                                        ? 'is-invalid'
                                        : ''
                                }`"
                            >
                                <i class="zmdi text-muted blue-navy-color-palette" :class="hidePassword?'zmdi-eye-off':'zmdi-eye'" aria-hidden="true"></i>
                            </a>
                            <div
                                v-if="!$v.form.password.required"
                                class="invalid-feedback"
                            >
                                {{ requiredError($t("form.password.label")) }}
                            </div>

                            <div
                                v-if="!$v.form.password.minLen"
                                class="invalid-feedback"
                            >
                                {{
                                    minLengthError(
                                        $t("form.password.label"),
                                        $v.form.password.$params.minLen.min
                                    )
                                }}
                            </div>

                            <div
                                v-else-if="!$v.form.password.maxLen"
                                class="invalid-feedback"
                            >
                                {{
                                    maxLengthError(
                                        $t("form.password.label"),
                                        $v.form.password.$params.maxLen.max
                                    )
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="g-signin2" @click.prevent="onSignIn"></div>
                    <div class="text-center mt-5">
                        <button
                            type="submit"
                            class="btn btn-primary btn-pill w-50 asset-bg-linear-linear-gradient"
                            @click.prevent="submitButton"
                        >
                            {{ $t("continue") }}
                        </button>
                    </div>
                </div>
                <router-link class="custom-responsive-mob-link blue-light-color-palette" to="/auth/signin">{{ $t("haveAccount") }}</router-link>
                <div><Divider :label="$t('or')"></Divider></div>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center green-color-palette">
                            <i class="fa fa-google"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center green-color-palette">
                            <i class="fa fa-facebook"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center green-color-palette">
                            <i class="fa fa-apple"></i>
                        </div>
                    </a>
                </div>
                <div class="mt-4 custom-responsive-mob-link">
                    <router-link to="/auth">{{
                        $t("business.link")
                    }}</router-link>
                    <span>{{ $t("business.text") }}</span>
                </div>
            </form>
        </Base>
    </div>
</template>
<i18n src="@/lang/authentication/signUp/signUp.json"></i18n>
<script>
import Base from "@/components/global/Base.vue";
import Divider from "@/components/global/Divider";
//import { mapGetters } from "vuex";
/////////////////////////////////////
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import {
    requiredError,
    inputError,
    maxLengthError,
    unauthorizedError,
    minLengthError
} from "@/validation/errors.js";
/////////////////////////////
import axios from "axios";
import { urls } from "@/backend/urls.js";
export default {
    name: "login",
    components: {
        Base,
        Divider
    },
    data() {
        return {
            requiredError,
            inputError,
            unauthorizedError,
            minLengthError,
            maxLengthError,
            hidePassword:true,
            phoneOrEmail: null,
            ////////////////////////
            form: {
                username: "",
                password: ""
            },
            ///////////

            submitStatus: "",
            backendError: ""
        };
    },
    watch: {
        form: {
            handler(newValue, oldValue){
                this.backendError = ""
            },
            deep: true
        }
    },
    created() {
        // console.log(urls)
        // create axios instance
        this.myAxios = axios.create({
            baseURL: `${urls.auth.baseUrl}`
        });
    },
    mounted() {
        const {
            email,
            password,
            phoneNumber
        } = this.$store.getters.getFormDate;
        // console.log(password);
        if (email) this.form.username = email;
        else if (phoneNumber) this.form.username = phoneNumber;
        this.form.password = password ? password : "";
    },
    methods: {
        async submitButton() {
            this.$v.$touch();
            if (!this.$v.form.$error) {
                
                let type = "mobile";
                if (this.phoneOrEmail == "email"){
                    type = "email"
                }

                let data = {
                    "type": type,
                    "signupField": this.form.username,
                    "lang": this.$i18n.locale
                }
                
                let url = `${urls.auth.baseUrl}users/sign-up-step1`;
                this.myAxios
                .post(url, data)
                .then(res=>{
                    localStorage.type = type
                    localStorage.value = this.form.username
                    localStorage.password = this.form.password
                    if (res.data.status == false){
                        this.sendVerification(this.form.username, type)
                    }
                })
                .catch(err=>{
                    this.backendError = err.response.data.error
                })
                
            }
        },
        t() {
            this.$router.go(0);
        },
        sendVerification(value, type) {
            let url = `${urls.auth.baseUrl}users/emailVerification`;
            if (type == "mobile") {
                url = `${urls.auth.baseUrl}users/send-verify-phone`;
            }

            let data = {
                [type]: value,
                "lang": this.$i18n.locale
            }

            this.myAxios
            .post(url, data)
            .then(res=>{
                if (type == "email"){
                    this.$router.push("/auth/complete-signup-phone");
                }
                else if (type == "mobile") {
                    this.$router.push("/auth/verify-phone");
                }
            })
            .catch(err=>{
                this.backendError = err.response.data.error
                if (type == "mobile") { // TODO: Remove
                    this.$router.push("/auth/verify-phone");
                }
            })
        }
    },
    validations: {
        form: {
            username: {
                required,
                valid(value) {
                    if (!value) return true;
                    else if (
                        value.search(
                            /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g
                        ) != -1
                    ) {
                        // email
                        this.phoneOrEmail = "email";
                        return true;
                    }
                     else if (
                        value.search(
                            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi
                        ) != -1
                    ) {
                        this.phoneOrEmail = "phone";
                        return true; //phone number
                    } else return false;
                }
            },
            password: {
                required,
                maxLen: maxLength(30),
                minLen: minLength(8)
            }
        }
    }
};
</script>

<style scoped>
    @media only screen and (max-width: 400px) {
        .w-50 {
            width: 100% !important;
        }
        .custom-responsive-mob-link {
            font-size: smaller !important;
        }
    }
    .custom-password-rtl {
        border-right: none !important;
    }
    .custom-password-ltr {
        border-left: none !important;
        border-top-right-radius: 35px !important;
        border-bottom-right-radius: 35px !important;
    }
    .custom-password-eye {
        border: 1px solid #56c596;
    }
</style>

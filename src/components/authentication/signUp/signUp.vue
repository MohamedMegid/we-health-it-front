<template>
    <div>
        <Base>
            <p class="fw-lighter">{{ $t("Step_1_of_2") }}</p>
            <h1 class="mb-0">{{ $t("signUp") }}</h1>
            <small
                >{{ $t("slogan") }}
                <!-- <router-link to="#">{{ $t("signIn") }}</router-link> -->
            </small>
            <form>
                <div class="form-group mt-4">
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
                                    $v.form.username.$invalid &&
                                    $v.form.username.$anyDirty &&
                                    $v.form.username.$anyError
                            }"
                        />

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

                    <label
                        ><strong>{{ $t("form.password.label") }}</strong></label
                    >
                    <div class="flex-grow-1">
                        <input
                            type="password"
                            class="form-control"
                            :placeholder="$t('form.password.placeholder')"
                            v-model.trim="form.password"
                            @input="$v.form.password.$touch()"
                            :class="{
                                'is-invalid':
                                    $v.form.password.$invalid &&
                                    $v.form.password.$anyDirty &&
                                    $v.form.password.$anyError
                            }"
                        />
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

                    <div class="text-center mt-5">
                        <button
                            type="submit"
                            class="btn btn-primary btn-pill h3"
                            @click.prevent="submitButton"
                        >
                            {{ $t("continue") }}
                        </button>
                    </div>
                </div>
                <router-link to="#">{{ $t("haveAccount") }}</router-link>
                <div><Divider :label="$t('or')"></Divider></div>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-google"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-facebook"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-apple"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-twitter"></i>
                        </div>
                    </a>
                </div>
                <div class="mt-4">
                    <router-link to="/auth">{{
                        $t("business.link")
                    }}</router-link>
                    {{ $t("business.text") }}
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

            phoneOrEmail: null,
            ////////////////////////
            form: {
                username: "",
                password: ""
            },
            ///////////

            submitStatus: ""
        };
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
            // console.log(urls.auth.baseUrl);
            this.$v.$touch();
            if (!this.$v.form.$error) {
                if (this.phoneOrEmail === "phone") {
                    this.$store.dispatch("setFormData", {
                        type: "phone",
                        email: null,
                        phoneNumber: this.form.username,
                        password: this.form.password
                    });
                    

                    this.$router.push("/auth/verify-phone");
                }

                if (this.phoneOrEmail === "email") {
                    this.$store.dispatch("setFormData", {
                        type: "email",
                        phoneNumber: null,
                        email: this.form.username,
                        password: this.form.password
                    });
                    let url = `${urls.auth.baseUrl}users/check-email-exist`;
                    console.log(url);
                    this.myAxios
                    .post(url, {email:this.form.username})
                    .then(res=>{
                        // console.log(res.data.isEmailExist)
                    })
                    .catch(err=>{
                      console.log(err)
                      // this.httpErrorCodesHandling(err);
                    })
                    this.$router.push("/auth/complete-signup-phone");
                }
            }
        },
        t() {
            this.$router.go(0);
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
                    } else if (
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

<style lang="scss" scoped></style>

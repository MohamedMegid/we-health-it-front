<template>
    <div>
        <Base>
            <div class="back-btn mb-3">
                <button @click="back" class="btn btn-icon btn-primary btn-sm">
                    <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
                </button>
            </div>
            <h3 class="mb-0">{{ $t("verifyHeader") }}</h3>
            <p class="pt-3">
                <span class="verify-message-custom">{{ $t("verifyMessage") }}</span>
                <!-- <router-link to="#">{{ $t("signIn") }}</router-link> -->
            </p>
            <form>
                <div class="d-flex justify-content-between">
                    <div class="d-flex justify-content-start">
                        <div>
                            <input
                                type="text"
                                class="form-control w-80 code-responsive-custom"
                                :placeholder="$t('inputPlaceHolder')"
                                v-model.trim="code"
                                @input="$v.code.$touch()"
                                :class="{
                                    'is-invalid':
                                        $v.code.$invalid &&
                                        $v.code.$anyDirty &&
                                        $v.code.$anyError
                                }"
                            />
                            <div v-if="!$v.code.maxLen" class="invalid-feedback">
                                {{
                                    maxLengthError(
                                        $t("inputPlaceHolder"),
                                        $v.code.$params.maxLen.max
                                    )
                                }}
                            </div>
                            <div class="">
                                <small><b>{{ $t("RemainingTime") + " " }}</b>

                                    {{ seconds + " " + $t("seconds") }}</small
                                >
                            </div>
                        </div>
                    </div>
                    <div class="buttons d-flex gap-2 h-100 mt-5 justify-content-end">
                        <button
                            @click.prevent="doneButton"
                            class="btn btn-primary btn-pill"
                        >
                            <small>{{ $t("done") }}</small>
                        </button>

                        <button
                            @click.prevent="resend"
                            class="btn btn-primary btn-pill"
                        >
                            <small>{{ $t("resend") }}</small>
                        </button>
                    </div>

                </div>
            </form>
        </Base>
    </div>
</template>
<i18n src="@/lang/authentication/signUp/VerifyPhone.json"></i18n>
<script>
import Base from "@/components/global/Base.vue";
/////////////////////////////////////
import { required, maxLength } from "vuelidate/lib/validators";
import { requiredError, maxLengthError } from "@/validation/errors.js";
/////////////////////////////
import axios from "axios";
import { urls } from "@/backend/urls.js";
export default {
    name: "login",
    components: {
        Base
    },
    data() {
        return {
            requiredError,
            maxLengthError,
            ////////////////////////
            code: "",
            seconds: 0,
            interval: null
            ///////////
        };
    },
    mounted() {
        this.adjustTimer();
    },

    validations: {
        code: {
            required,
            maxLen: maxLength(6)
        }
    },
    created() {
        // console.log(urls)
        // create axios instance
        // this.myAxios = axios.create({
        //   baseURL: `${urls.auth.baseUrl}`,
        // });
    },
    methods: {
        async submitButton() {
            this.$v.$touch();
        },
        doneButton() {
            // this.myAxios = axios.create({
            //   baseURL: `${urls.auth.baseUrl}`,
            // });
            this.$router.push("/auth/complete-signup-email");
        },
        back() {
            console.log("back");
            this.$router.go(-1);
        },

        resend() {
            clearInterval(this.interval);
            this.adjustTimer();

        },
        adjustTimer(){
            this.seconds = 120;
            this.interval = setInterval(() => {
                this.seconds -= 1;
                if (this.seconds <= 0) clearInterval(this.interval);
            }, 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
    .verify-message-custom {
        font-weight: 300;
        font-size: 65%;
        display: inline-block;
    }
    .btn {
        min-width: unset !important;
    }
    @media only screen and (max-width: 500px) {
        .btn {
            margin-top: 30px !important;
        }
        .code-responsive-custom {
            width: 200% !important;
        }
    }
</style>

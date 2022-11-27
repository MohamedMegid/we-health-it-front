<template>
    <div>
        <Base>
            <div class="back-btn mb-5">
                <button @click="back" class="btn btn-icon btn-primary btn-sm asset-bg-green-linear-gradient w-10">
                    <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
                </button>
            </div>
            <h3 class="mb-3"><b>{{ $t("verifyHeader") }}</b></h3>
            <p>{{ $t("verifyMessage") }}</p>
            <form>
                <div class="d-flex justify-content-between">
                    <div class="d-flex justify-content-start">
                        <div>
                            <input
                                type="number"
                                class="form-control w-90 code-responsive-custom"
                                :placeholder="$t('inputPlaceHolder')"
                                v-model.trim="code"
                                @input="$v.code.$touch()"
                                :class="{
                                    'is-invalid':
                                        ( $v.code.$invalid &&
                                        $v.code.$anyDirty &&
                                        $v.code.$anyError ) || (backendError)
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
                            <div
                                v-if="
                                    !$v.code.required &&
                                        $v.code.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ requiredError($t("code")) }}
                            </div>
                            <div v-if="backendError" class="invalid-feedback">
                                {{ backendError }}
                            </div>
                            <div class="mt-2">
                                <p><b>{{ $t("RemainingTime") + " " }}

                                    <span class="green-color-palette">{{ seconds + " " + $t("seconds") }}</span></b></p
                                >
                            </div>
                        </div>
                    </div>
                    <div class="buttons d-flex gap-2 h-100 mt-6 justify-content-end">
                        <button
                            @click.prevent="doneButton"
                            class="btn btn-primary asset-bg-green-linear-gradient asset-radius-sys"
                        >
                            {{ $t("done") }}
                        </button>

                        <button
                            @click.prevent="resend"
                            class="btn btn-primary asset-radius-sys asset-bg-linear-linear-gradient"
                        >
                            {{ $t("resend") }}
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
            interval: null,
            backendError: null
            ///////////
        };
    },
    watch: {
        code: {
            handler(newValue, oldValue){
                this.backendError = null
            }
        }
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
        // create axios instance
        this.myAxios = axios.create({
          baseURL: `${urls.auth.baseUrl}`,
        });
    },
    methods: {
        async submitButton() {
            this.$v.$touch();
        },
        doneButton() {
            this.$v.$touch();
            if (!this.$v.$error) {
                let url = `${urls.auth.baseUrl}users/verify-phone`;

                let data = {
                    "mobile": localStorage.value,
                    "code": this.code,
                    "lang": this.$i18n.locale
                }

                this.myAxios
                .post(url, data)
                .then(res=>{
                    this.$router.push("/auth/complete-signup-email");
                })
                .catch(err=>{
                    this.backendError = err.response.data.error
                })
            }
        },
        back() {
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

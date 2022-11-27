<template>
    <div>
        <Base>
            <p class="gray-light-color-palette">{{ $t("Step_2_of_2") }}</p>
            <h1 class="mb-2 blue-navy-color-palette">
                <b>{{ $t("signUp") }}</b>
            </h1>
            <form>
                <div class="form-group mt-4">
                    <div class="row justify-content-between">
                        <div class="col-md-7">
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
                                v-if="
                                    !$v.form.fullName.required &&
                                    $v.form.fullName.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ requiredError($t("fullName")) }}
                            </div>
                            <div
                                v-else-if="
                                    !$v.form.fullName.valid &&
                                    $v.form.fullName.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ inputError($t("fullName")) }}
                            </div>
                        </div>
                        <!-- end full name  -->
                        <!-- start user name  -->
                        <div class="col-md-5">
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
                                        !$v.form.username.required &&
                                        $v.form.username.$error,
                                }"
                            />
                            <div
                                v-if="
                                    !$v.form.username.required &&
                                    $v.form.username.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ requiredError($t("username")) }}
                            </div>
                        </div>
                    </div>
                    <!-- end user name  -->
                    <!-- start email  -->
                    <!-- start phone number -->
                    <div class="mt-3" v-if="step1Type == 'email'">
                        <!-- send code -->
                        <div v-if="!sendCode" class="send code">
                            <label>
                                <strong>{{ $t("phoneNumber.label") }}</strong>
                            </label>
                            <div class="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control mobile-field"
                                    v-model.trim="form.phoneNumber"
                                    :placeholder="$t('phoneNumber.label')"
                                    @input="$v.form.phoneNumber.$touch()"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    :class="`${
                                        local === 'en'
                                            ? 'asset-custom-rtl'
                                            : 'asset-custom-ltr'
                                    } ${
                                        $v.form.phoneNumber.$invalid &&
                                        $v.form.phoneNumber.$anyDirty &&
                                        $v.form.phoneNumber.$anyError
                                            ? 'is-invalid'
                                            : ''
                                    }`"
                                />

                                <button
                                    :class="`btn btn-primary ${
                                        local === 'en'
                                            ? 'asset-custom-ltr'
                                            : 'asset-custom-rtl'
                                    }`"
                                    type="button"
                                    id="button-addon2"
                                    @click="resend"
                                >
                                    {{ $t("phoneNumber.sendCode") }}
                                </button>
                                <!-- start small error massage for phoneNumber -->
                                <div
                                    v-if="
                                        !$v.form.phoneNumber.required &&
                                        $v.form.phoneNumber.$error
                                    "
                                    class="invalid-feedback"
                                >
                                    {{ requiredError($t("phoneNumber.label")) }}
                                </div>
                                <div
                                    v-else-if="
                                        !$v.form.phoneNumber.valid &&
                                        $v.form.phoneNumber.$error
                                    "
                                    class="invalid-feedback"
                                >
                                    {{ inputError($t("phoneNumber.label")) }}
                                </div>
                                <div
                                    v-else-if="!$v.form.phoneNumber.maxLen"
                                    class="invalid-feedback"
                                >
                                    {{
                                        maxLengthError(
                                            $t("phoneNumber.label"),
                                            $v.form.phoneNumber.$params.maxLen
                                                .max
                                        )
                                    }}
                                </div>

                                <div
                                    v-else-if="!$v.form.phoneNumber.minLen"
                                    class="invalid-feedback"
                                >
                                    {{
                                        minLengthError(
                                            $t("phoneNumber.label"),
                                            $v.form.phoneNumber.$params.minLen
                                                .min
                                        )
                                    }}
                                </div>

                                <!-- end small error massage for phoneNumber -->
                            </div>
                        </div>
                        <!-- after send code active button -->
                        <div v-if="sendCode" class="active">
                            <label>
                                <strong>{{ $t("phoneNumber.label") }}</strong>
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model.trim="form.phoneNumber"
                                :class="`${
                                    local === 'en'
                                        ? 'asset-custom-rtl'
                                        : 'asset-custom-ltr'
                                } ${
                                    $v.form.phoneNumber.$invalid &&
                                    $v.form.phoneNumber.$anyDirty &&
                                    $v.form.phoneNumber.$anyError
                                        ? 'is-invalid'
                                        : ''
                                }`"
                            />
                            <div
                                v-if="
                                    !$v.form.phoneNumber.required &&
                                    $v.form.phoneNumber.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ requiredError($t("phoneNumber.label")) }}
                            </div>
                            <div
                                v-else-if="
                                    !$v.form.phoneNumber.valid &&
                                    $v.form.phoneNumber.$error
                                "
                                class="invalid-feedback"
                            >
                                {{ inputError($t("phoneNumber.label")) }}
                            </div>

                            <div class="row mt-3">
                                <div class="col-sm-5 mt-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        :placeholder="
                                            $t('phoneNumber.enterCode')
                                        "
                                        v-model.trim="form.phoneNumberCode"
                                        @input="
                                            $v.form.phoneNumberCode.$touch()
                                        "
                                        :class="{
                                            'is-invalid':
                                                $v.form.phoneNumberCode
                                                    .$invalid &&
                                                $v.form.phoneNumberCode
                                                    .$anyDirty &&
                                                $v.form.phoneNumberCode
                                                    .$anyError,
                                        }"
                                    />
                                </div>
                                <div class="col-sm-1"></div>
                                <ResendCodeButton
                                    v-if="seconds <= 0"
                                    :buttonLabel="$t('phoneNumber.resend')"
                                    :spanLabel="$t('phoneNumber.resendTitle')"
                                    :func="resend"
                                    :seconds="0"
                                />
                                <ResendCodeButton
                                    v-if="seconds > 0"
                                    :buttonLabel="
                                        $t('phoneNumber.ActiveButton')
                                    "
                                    :spanLabel="$t('phoneNumber.RemainingTime')"
                                    :seconds="seconds"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- end phone number  -->
                    <div class="mt-3" v-if="step1Type == 'mobile'">
                        <label>
                            <strong>{{ $t("emailAddress") }}</strong>
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('placeHolder.emailAddress')"
                            v-model.trim="form.email"
                            :class="{
                                'is-invalid':
                                    !$v.form.email.email &&
                                    $v.form.email.$error,
                            }"
                        />

                        <div
                            v-if="!$v.form.email.email && $v.form.email.$error"
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
                                        placeholder="YYYY/MM/DD"
                                        :value="
                                            datePicked ? date : ''
                                        "
                                        type="text"
                                        :class="`${
                                            local === 'en'
                                                ? 'asset-custom-rtl'
                                                : 'asset-custom-ltr'
                                        } ${
                                            $v.form.birthDate.$error &&
                                            !datePicked
                                                ? 'is-invalid'
                                                : ''
                                        }`"
                                    />
                                    <div
                                        :class="`input-group-text asset-bg-linear-linear-gradient justify-content-center w-15 ${
                                            local === 'en'
                                                ? 'asset-custom-ltr'
                                                : 'asset-custom-rtl'
                                        }`"
                                    >
                                        <i
                                            class="fa fa-calendar tx-16 lh-0 op-6"
                                        ></i>
                                    </div>
                                    <div
                                        v-if="
                                            $v.form.birthDate.$error &&
                                            !datePicked
                                        "
                                        class="invalid-feedback"
                                    >
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
                        <select @change="setSelectFirstOption"
                            v-model="form.gender"
                            class="form-select"
                            required
                            :class="`asset-radius-sys bg-white ${
                                local === 'en' ? 'arrow' : ''
                            } ${
                                $v.form.gender.$invalid &&
                                $v.form.gender.$anyDirty &&
                                $v.form.gender.$anyError
                                    ? 'is-invalid'
                                    : ''
                            }`"
                        >
                            <option value="" selected="selected" disabled>
                                -- {{ $t("select") }}
                                {{ $t("placeHolder.gender") }} --
                            </option>
                            <option value="male">
                                {{ $t("placeHolder.male") }}
                            </option>
                            <option value="female">
                                {{ $t("placeHolder.female") }}
                            </option>
                        </select>
                        <div
                            v-if="$v.form.gender.$error"
                            class="invalid-feedback"
                        >
                            {{ requiredError($t("gender")) }}
                        </div>
                    </div>
                    <!-- end gender  -->
                    <p class="pt-3">
                        <span
                            >{{ $t("termsText") }}
                            <a href="javascript:void(0)"> {{ $t("termsLink") }}</a></span
                        >
                    </p>
                    <div class="text-center">
                        <button
                            @click.prevent="submitButton"
                            class="btn btn-primary btn-pill w-50 asset-bg-linear-linear-gradient"
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
    requiredIf
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
            step1Type: localStorage.type,
            form: {
                fullName: "",
                email: "",
                username: "",
                phoneNumber: "",
                phoneNumberCode: "",
                birthDate: "",
                date: "2020-05-06",
                gender: "",
                password: ""
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
                    if (!value) return false;
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
            phoneNumber: {
                required: requiredIf(function(form){
                    if (localStorage.type == "email") {
                        return true
                    }
                }),
                valid(value) {
                    if (!value) return true;
                    else if (
                        value.search(
                            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi
                        ) != -1
                    )
                        return true;
                    else return false;
                },
                minLen: minLength(11),
                maxLen: maxLength(11),
            },

            phoneNumberCode: {
                required,
                valid(value) {
                    if (!value) return true;
                    else if (
                        value.search(
                            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi
                        ) != -1
                    )
                        return true;
                    else return false;
                },
                minLen: minLength(6),
                maxLen: maxLength(6),
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
            val &&
                setTimeout(() => (this.$refs.menu.$refs.agenda.mode = "year"));
        }
    },
    mounted() {
        this.$nextTick(function () {
            $( "select" ).css("color", "#56c596ad")
        })

        if (localStorage.type == 'mobile') {
            this.form.phoneNumber = localStorage.value
            this.form.phoneNumberCode = "111111"
        }
        else if (localStorage.type == 'email') {
            this.form.email = localStorage.value
        }

        this.form.password = localStorage.password
    },
    methods: {
        async submitButton() {
            console.log('da5l')
            this.form.birthDate = this.form.date
            this.$v.$touch();
            if (!this.$v.form.$error) {
                let data = {
                    "username": this.form.username,
                    "gender": this.form.gender,
                    "fullname": this.form.fullName,
                    "dob": this.form.date,
                    "mobile": this.form.phoneNumber,
                    "password": this.form.password,
                    "email": this.form.email,
                    "lang": this.$i18n.locale
                }
                
                let url = `${urls.auth.baseUrl}users/register`;
                this.myAxios
                .post(url, data)
                .then(res=>{
                    localStorage.removeItem("type");
                    localStorage.removeItem("value");
                    localStorage.removeItem("password");
                })
                .catch(err=>{
                    // this.backendError = err.response.data.error
                })
            }
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

        setSelectFirstOption() {
            $( "select" ).css("color", "#3a956f")
        }
    },
};
</script>
<style>
    @media only screen and (min-width: 600px) {
        .vd-menu__content {
            top: 24% !important;
            left: 48% !important;
        }
    }
</style>

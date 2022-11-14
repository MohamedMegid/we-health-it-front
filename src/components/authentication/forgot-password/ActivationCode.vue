<template>
  <div class="activation-code">
    <h2 class="mb-1 mt-3">{{ $t("title") }}</h2>
    <h6>{{ $t("text") }}</h6>
    <form>
        <div class="custom-controls-stacked">
            <label class="custom-control custom-radio-md">
                <input
                type="radio"
                class="custom-control-input"
                name="verification-method"
                value="email"
                v-model="choose"
                />
                <span class="custom-control-label">
                    <strong>Email:</strong>
                    <small class="text-muted me-1">{{hideEmail(user.email)}}</small>
                </span>
            </label>
            <label class="custom-control custom-radio-md">
                <input
                type="radio"
                class="custom-control-input"
                name="verification-method"
                value="phone"
                v-model="choose"
                />
                <span class="custom-control-label">
                    <strong>Phone:</strong>
                    <small class="text-muted me-1">{{ hidePhone(user.nationalNumber) }}</small>
                </span>
            </label>
        </div>
        <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary btn-pill" 
                @click.prevent="sendActivation">
                    {{ $t('nextBtn') }}
                </button>
        </div>
    </form>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/activationCode.json"></i18n>
<script>
import {hideEmail,hidePhone} from '@/helpers/utilities'
export default {
  name: "ActivationCode",
  components: {},
  data() {
    return {
        hideEmail,
        hidePhone,
        choose:"email",
        user:{
            email:'mahmoudhamed.1195@gmail.com',
            nationalNumber:'+201007631871',
            phone:'',
        }
    };
},
    methods:{
        sendActivation() {
            if(this.choose=="email"){
                this.sendToMail();
            }
            else{
                this.sendToPhone();
            }
        },
        sendToMail() {
            console.log("email Has been sent")
            this.$router.push({name:"emailVerification"})
        },
        sendToPhone() {
            console.log("code Has been sent")
            this.$router.push({name:"phoneVerification"})
        }
    }
};
</script>
<style lang="scss" scoped>
.activation-code {
 
}
</style>

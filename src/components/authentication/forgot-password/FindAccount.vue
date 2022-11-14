<template>
  <div class="find-account">
        <h2 class="mb-1 mt-3">{{ $t('title') }}</h2>
        <h6>{{ $t('text') }}</h6>
        <form>
            <div class="form-group mt-4">
                <label><strong>{{ $t('form.username.label') }}</strong></label>
                <div class="d-flex gap-3 align-items-sm-start flex-wrap flex-sm-nowrap">
                    <div class="flex-grow-1">
                        <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('form.username.placeholder')"
                            v-model.trim="form.username"
                            @input="$v.form.username.$touch()"
                            :class="{
                                'is-invalid':
                                $v.form.username.$invalid && $v.form.username.$anyDirty && $v.form.username.$anyError
                            }"
                            @keyup.enter.prevent="checkUSerExist"
                        >
                        <div v-if="!$v.form.username.required && $v.form.username.$error" class="invalid-feedback">
                            {{requiredError($t('form.username.label'))}}
                        </div>
                        <div v-if="!$v.form.username.valid && $v.form.username.$error" class="invalid-feedback">
                            {{inputError($t('form.username.label'))}}
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary btn-pill" @click.prevent="checkUSerExist">
                            {{ $t('nextBtn') }}
                        </button>
                    </div>
                </div>
            </div>
        </form>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/findAccount.json"></i18n>
<script>
import {required} from "vuelidate/lib/validators";
import {requiredError,inputError,unauthorizedError}from "@/validation/errors.js";
/////////////////////////////
import axios from 'axios';
import {urls} from "@/backend/urls.js";
export default {
    name: 'login',
    components:{
    },
    data(){
        return {
            requiredError,
            inputError,
            unauthorizedError,
            ////////////////////////
            form:{
                username:'',
                password:'',
                rememberMe:true,
            },
            ///////////
            user:{
                profile:require('@/assets/authentication/user.jpg'),
                name:"Mahmoud Hamed",
            },
            isValidUsername:false,
            submitStatus:''
            
        }
    },
    validations:{
        form:{
            username:{
                required,
                valid(value){
                    if(!value)
                        return true
                    else if (value.search( /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g) != -1)
                        return true
                    else if (value.search( /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1)
                        return true
                    else if (value.search( /^[a-z0-9_.]+$/g) != -1)
                        return true
                    else
                        return false
                },
            },
        },
    },
    created(){
        this.myAxios =axios.create({
            baseURL: `${urls.auth.baseUrl}`,
        });
    },
    methods:{
        checkUSerExist(){
            this.isValidUsername = false;
            this.$v.form.username.$touch()
            if (this.$v.form.username.$invalid) {
                this.isValidUsername = false;
            } else {
                this.isValidUsername = true;
                this.$router.push({name:"accountPreview"})
            }
            
        },
    }
}
</script>
<style lang="scss" scoped>
.find-account {
    .form-wrapper{

    }
}

</style>

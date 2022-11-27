<template>
  <div class="login">
    <Base v-if="!isValidUsername">
        <h1 class="mb-0">{{ $t('signIn') }}</h1>
        <span>{{ $t('first') }} <router-link to="#">{{ $t('signUp') }}</router-link></span>
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
                        <div v-else-if="!$v.form.username.valid && $v.form.username.$error" class="invalid-feedback">
                            {{inputError($t('form.username.label'))}}
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary btn-pill" @click.prevent="checkUSerExist">
                            {{ $t('continue') }}
                        </button>
                    </div>
                </div>
            </div>
            <router-link :to="{name:'findAccount'}" >{{ $t('forgetPassword') }}</router-link>
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
                <router-link to="#">{{$t('business.link')}}</router-link> {{$t('business.text')}}
            </div>
        </form>
    </Base>

    <Base v-if="isValidUsername">
        <div class="user text-center">
            <div class="avatar avatar-xxl brround my-custom-avatar">
                <img alt="avatar" :src="user.profile" class="brround">
            </div>
            <div class="main-chat-msg-name">
                <h5 class="mb-1 text-dark fw-semibold">{{user.name}}</h5>
            </div>
        </div>
        <form>
            <div class="form-group mt-4">
                <label><strong>{{ $t('form.password.label') }}</strong></label>
                <div class="d-flex gap-3 align-items-sm-start flex-wrap flex-sm-nowrap">
                    <div class="flex-grow-1 d-flex flex-column justify-content-center">
                        <input
                            type="password"
                            class="form-control"
                            :placeholder="$t('form.password.placeholder')"
                            v-model.trim="form.password"
                            @input="$v.form.password.$touch()"
                            :class="{
                                'is-invalid':
                                $v.form.password.$invalid && $v.form.password.$anyDirty && $v.form.password.$anyError
                            }"
                            @keyup.enter.prevent="signIn"
                        >
                        <div v-if="!$v.form.password.required && $v.form.password.$error" class="invalid-feedback">
                            {{requiredError($t('form.password.label'))}}
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary btn-pill" @click.prevent="signIn" >
                            {{ $t('signIn') }}
                        </button>
                    </div>
                </div>
            </div>
            <router-link :to="{name:'forgot-password'}" >{{ $t('forgetPassword') }}</router-link>
            <div class="form-group mt-2">
                <label class="custom-switch">
                    <input type="checkbox" 
                    name="custom-switch-checkbox" 
                    class="custom-switch-input" 
                    v-model="form.rememberMe">
                    <span class="custom-switch-indicator"></span>
                    <span class="custom-switch-description">{{$t('stay')}}</span>
                </label>
            </div>
            <div><Divider :label="$t('or')"></Divider></div>
            <div class="mt-4  d-flex justify-content-center align-items-center">
                <span><i class="fa fa-refresh fa-lg" aria-hidden="true"></i></span> 
                <a class="nav-link text-primary" @click="reset" >{{$t('differentAccount')}}</a>
            </div>
        </form>
    </Base>
  </div>
</template>
<i18n src="@/lang/authentication/login/login.json"></i18n>

<script>
import Base from '@/components/global/Base.vue'
import Divider from '@/components/global/Divider'
/////////////////////////////////////
import {required} from "vuelidate/lib/validators";
import {requiredError,inputError,unauthorizedError}from "@/validation/errors.js";
/////////////////////////////
import axios from 'axios';
import {urls} from "@/backend/urls.js";
export default {
    name: 'login',
    components:{
        Base,
        Divider,
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
            password:{
                required,
                
            },
        },
    },
    created(){
        // console.log(urls)
        // create axios instance
        this.myAxios =axios.create({
            baseURL: `${urls.auth.baseUrl}`,
        });
    },
    methods:{
        async checkUSerExist(){
            this.isValidUsername = false;
            this.$v.form.username.$touch()
            if (this.$v.form.username.$invalid) {
                this.isValidUsername = false;
            } else {
                this.isValidUsername = true;
                await this.$nextTick();
            }
            
        },
        signIn(){
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                 if(this.$route.name==="businessLogin")
                {
                     // increase step count
                         this.$root.$refs.formWizard.nextTab()
                      return
                }
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                this.submitStatus = 'OK'
                this.$router.push({name:'home'})
                }, 500)
            }
        },
        reset(){
            // this.$v.$reset();
            // this.isValidUsername=false;
            // this.forms={
            //     username:'',
            //     password:'',
            //     rememberMe:true,
            // };
            // this.user={
            //     profile:require('@/assets/authentication/user.jpg'),
            //     name:"Mahmoud Hamed",
            // };
            this.$router.go({name:"login"})
        },
    }
}
</script>

<style lang="scss" scoped>
.login {

}
</style>

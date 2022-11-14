<template>
  <div class="account-preview">
    <div class="d-flex justify-content-between mt-3">
        <div>
            <h2 class="mb-1">{{ $t('title') }}</h2>
            <h6>{{ $t('text') }}</h6>
        </div>
        <div class="user text-center">
            <div class="avatar avatar-xxl brround my-custom-avatar">
                <img alt="avatar" :src="user.profile" class="brround">
            </div>
            <div class="main-chat-msg-name">
                <h5 class="mb-1 text-dark fw-semibold">{{user.name}}</h5>
            </div>
        </div>
    </div>
        <div class="mt-3 d-flex justify-content-end gap-2">
            <button type="submit" class="btn btn-primary btn-pill" 
            @click.prevent="goNext">
                {{ $t('yesBtn') }}
            </button>
            <button type="submit" class="btn btn-danger btn-pill" 
            @click.prevent="tryAgain">
                {{ $t('tryBtn') }}
            </button>
        </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/accountPreview.json"></i18n>
<script>
export default {
  name: 'AccountPreview',
  data(){
    return {
      user:{
          profile:require('@/assets/authentication/user.jpg'),
          name:"Mahmoud Hamed",
      },
    }
  },
  methods:{
    tryAgain(){
      this.$router.push({name:'findAccount'})
    },
    goNext(){
      this.$router.push({name:'activationCode'})
    },
  }
};
</script>
<style lang="scss" scoped>
.account-preview {

}

</style>

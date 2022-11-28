<template>
    <div class="upload-file">
        <button @click.prevent="clickInput" :class="className">{{label}}</button>
        <input @change="getFile" class="upload-file-input" ref="uploadFileInput" type="file" accept="image/*">
    </div>
</template>
<script>
export default {
    props:['label','className'],
    data(){
        return {
            fileInput:'',
        }
    },
    mounted(){
        this.fileInput=this.$refs.uploadFileInput;
    },
    methods:{
        clickInput(){
            this.fileInput.click();
        },
        getFile(){
            this.$emit('input',this.fileInput.files[0])
        }
    },
}
</script>
<style lang="scss" scoped>
.upload-file{
    .upload-file-input{
        display: none !important;
    }
}
</style>
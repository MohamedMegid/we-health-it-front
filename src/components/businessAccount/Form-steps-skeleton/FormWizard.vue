<template>
  <div>
    <ul class="steps has-content-centered  is-rtl" style="direction: ltr;">
      <li
        class="steps-segment "
        v-for="tab in tabs"
        :class="{ 'is-active': tab.isActive }"
        v-bind:key="tab.name"
      >
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="is-size-4">{{ tab.name }}</p>
          <p>{{ tab.info }}</p>
        </div>
      </li>
    </ul>
    <div class="tab-details">
      <slot :formData="formData"></slot>
    </div>
    <br />
    <div class="field is-grouped">
      <div class="control" v-if="currentActive > 0">
        <button @click="previousTab()" class="button is-primary">
          Previous
        </button>
      </div>
      <div class="control" v-if="currentActive < totalTabs - 1">
        <button @click="nextTab()" class="button is-link">Next</button>
      </div>
      <div class="control" v-if="currentActive == totalTabs - 1">
        <button @click="submit()" class="button is-success">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-wizard",

  data() {
    return {
      tabs: [],
      currentActive: 0,
      totalTabs: 0,
      formData: {
        name: "",
        email: "",
        about: "",
        gender: "",
        reference: "",
        terms: "",
      },
    };
  },

  created() {
    this.tabs = this.$children;
    this.$root.$refs.formWizard =this
},

mounted() {
     this.totalTabs = this.tabs.length;
  },
  updated(){
   },

  methods: {
    previousTab() {
      this.currentActive--;
      console.log(this.tabs)
      this.tabs.forEach((tab) => {
        tab.isActive = false;
      });
      this.tabs[this.currentActive].isActive = true;
    },

    nextTab() {
      //Validate input
      this.currentActive++;
      this.tabs.forEach((tab) => {
        tab.isActive = false;
      });

      this.tabs[this.currentActive].isActive = true;
    },

    submit() {},
  },
};
</script>

<style></style>

<template>
  <div class="card">
    <form-wizard>
      <template v-slot="{ formData }">
        <tab name="Login" info="" :selected="true" :formData="formData">
          <div id="form-step-1">
            <div class="row">
              <div class="col-md-3 col-1"></div>
              <div class="col-md-6 card col-10">
                <Login />
              </div>
            </div>
          </div>
        </tab>
        <tab name="Category">
          <div class="px-5">
            <Category />
          </div>
        </tab>
        <tab name="Specialty" info="">
          <div class="px-5">
            <Specialty />
          </div>
        </tab>

        <tab name="Registration" info="">
          <Registration />
        </tab>

        <tab name="Confirm" info="">
          <confirm />
        </tab>
      </template>
    </form-wizard>
  </div>
</template>

<script>
import FormWizard from "@/components/businessAccount/Form-steps-skeleton/FormWizard.vue";
import Tab from "@/components/businessAccount/Form-steps-skeleton/Tab.vue";
import Category from "@/components/businessAccount/steps-components/Category.vue";
import Specialty from "@/components/businessAccount/steps-components/Specialty.vue";
import Registration from "@/components/businessAccount/steps-components/Registration.vue";
import Confirm from "@/components/businessAccount/steps-components/Confirm.vue";
import Login from "@/components/authentication/login/Login.vue";

export default {
  components: {
    FormWizard,
    Tab,
    Login,
    Category,
    Specialty,
    Registration,
    Confirm,
    Login,
    Login,
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none !important;
}

@import "bulma/bulma.sass";
@import "bulma-steps-component/bulma-steps.sass";

[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="wizard1" role="application" class="wizard clearfix">
    <div class="steps clearfix">
      <ul role="tablist">
        <li
          role="tab"
          class="first current"
          aria-disabled="false"
          aria-selected="true"
        >
          <a id="wizard1-t-0" href="#wizard1-h-0" aria-controls="wizard1-p-0"
            ><span class="current-info audible">current step: </span
            ><span class="number">1</span>
            <span class="title">Personal Information</span></a
          >
        </li>
        <li role="tab" class="disabled" aria-disabled="true">
          <a id="wizard1-t-1" href="#wizard1-h-1" aria-controls="wizard1-p-1"
            ><span class="number">2</span>
            <span class="title">Billing Information</span></a
          >
        </li>
        <li role="tab" class="disabled last" aria-disabled="true">
          <a id="wizard1-t-2" href="#wizard1-h-2" aria-controls="wizard1-p-2"
            ><span class="number">3</span>
            <span class="title">Payment Details</span></a
          >
        </li>
      </ul>
    </div>
    <div class="content clearfix">
      <h3 id="wizard1-h-0" tabindex="-1" class="title current">
        Personal Information
      </h3>
      <section
        id="wizard1-p-0"
        role="tabpanel"
        aria-labelledby="wizard1-h-0"
        class="body current"
        aria-hidden="false"
      >
        <div class="control-group form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control required" placeholder="Name" />
        </div>
        <div class="control-group form-group">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control required"
            placeholder="Email Address"
            autocomplete="new-password"
          />
        </div>
        <div class="control-group form-group">
          <label class="form-label">Phone Number</label>
          <input
            type="number"
            class="form-control required"
            placeholder="Number"
          />
        </div>
        <div class="control-group form-group mb-0">
          <label class="form-label">Address</label>
          <input
            type="text"
            class="form-control required"
            placeholder="Address"
          />
        </div>
      </section>
      <h3 id="wizard1-h-1" tabindex="-1" class="title">Billing Information</h3>
      <section
        id="wizard1-p-1"
        role="tabpanel"
        aria-labelledby="wizard1-h-1"
        class="body"
        aria-hidden="true"
        style="display: none"
      >
        <div class="table-responsive mg-t-20">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td class="text-end">$792.00</td>
              </tr>
              <tr>
                <td><span>Totals</span></td>
                <td class="text-end text-muted"><span>$792.00</span></td>
              </tr>
              <tr>
                <td><span>Order Total</span></td>
                <td>
                  <h2 class="price text-end mb-0">$792.00</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <h3 id="wizard1-h-2" tabindex="-1" class="title">Payment Details</h3>
      <section
        id="wizard1-p-2"
        role="tabpanel"
        aria-labelledby="wizard1-h-2"
        class="body"
        aria-hidden="true"
        style="display: none"
      >
        <div class="form-group">
          <label class="form-label">CardHolder Name</label>
          <input
            type="text"
            class="form-control"
            id="name1"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Card number</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for..."
            />
            <span class="input-group-text btn btn-info shadow-none mb-0">
              <i class="fa fa-cc-visa"></i> &nbsp;
              <i class="fa fa-cc-amex"></i> &nbsp;
              <i class="fa fa-cc-mastercard"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="form-group mb-sm-0">
              <label class="form-label">Expiration</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="MM"
                  name="expiremonth"
                />
                <input
                  type="number"
                  class="form-control"
                  placeholder="YY"
                  name="expireyear"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group mb-0">
              <label class="form-label"
                >CVV <i class="fa fa-question-circle"></i
              ></label>
              <input type="number" class="form-control" required="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="actions clearfix">
      <ul role="menu" aria-label="Pagination">
        <li class="disabled" aria-disabled="true">
          <a href="#previous" role="menuitem">Previous</a>
        </li>
        <li aria-hidden="false" aria-disabled="false">
          <a href="#next" role="menuitem">Next</a>
        </li>
        <li aria-hidden="true" style="display: none">
          <a href="#finish" role="menuitem">Finish</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/login/login.json"></i18n>

<script>
import Base from "@/components/global/Base.vue";
import Divider from "@/components/global/Divider";
/////////////////////////////////////
import { required } from "vuelidate/lib/validators";
import {
  requiredError,
  inputError,
  unauthorizedError,
} from "@/validation/errors.js";
/////////////////////////////
import axios from "axios";
import { urls } from "@/backend/urls.js";
export default {
  name: "login",
  components: {
    //    Base,
  //  Divider,
  },
  data() {
    return {
      requiredError,
      inputError,
      unauthorizedError,
      ////////////////////////
      form: {
        username: "",
        password: "",
        rememberMe: true,
      },
      ///////////
      user: {
        profile: require("@/assets/authentication/user.jpg"),
        name: "Mahmoud Hamed",
      },
      isValidUsername: false,
      submitStatus: "",
    };
  },
  validations: {
    form: {
      username: {
        required,
        valid(value) {
          if (!value) return true;
          else if (
            value.search(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g) != -1
          )
            return true;
          else if (
            value.search(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1
          )
            return true;
          else if (value.search(/^[a-z0-9_.]+$/g) != -1) return true;
          else return false;
        },
      },
      password: {
        required,
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
  methods: {
    async checkUSerExist() {
      this.isValidUsername = false;
      this.$v.form.username.$touch();
      if (this.$v.form.username.$invalid) {
        this.isValidUsername = false;
      } else {
        this.isValidUsername = true;
        await this.$nextTick();
      }
    },
    signIn() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.$router.push({ name: "home" });
        }, 500);
      }
    },
    reset() {
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
      this.$router.go({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
}
</style>

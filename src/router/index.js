import Vue from "vue";
import VueRouter from "vue-router";
//import error from "../views/ErrorView.vue";
// import User from "../views/User.vue";
Vue.use(VueRouter);

function lazyLoadView(view) {
  return () => import(`@/views/${view}.vue`);
}

function lazyLoadComponent(view) {
  return () => import(`@/components/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoadView("Home"),
  },

  {
    path: "/auth",
    name: "authentication",
    component: lazyLoadView("Authentication"),
    // beforeEnter(to, from, next) {
    //   if (isAuthenticated()) return next("/clinic");
    //   return next();
    // },
    children: [
      {
        alias: "",
        path: "login",
        name: "login",
        component: lazyLoadComponent("authentication/login/Login"),
      },
      {
        path: "signup",
        name: "signup",
        component: lazyLoadComponent("authentication/signUp/signUp"),
      },
      {
        path: "verify-phone",
        name: "VerifyPhone",
        component: lazyLoadComponent("authentication/signUp/VerifyPhone"),
      },
      {
        path: "complete-signup-email",
        name: "completeSignup",
        component: lazyLoadComponent("authentication/signUp/step2Email"),
      },
      {
        path: "complete-signup-phone",
        name: "completeSignup",
        component: lazyLoadComponent("authentication/signUp/step2Phone"),
      },
      // {
      //   path: "register",
      //   component: lazyLoadComponent("authentication/register/EmptyRegister"),
      //   children: [
      //     {
      //       path: "",
      //       name: "register",
      //       component: lazyLoadComponent("authentication/register/Register"),
      //     },
      //     {
      //       path: "email-verify",
      //       name: "registerEmailVerify",
      //       component: lazyLoadComponent("authentication/register/EmailVerify"),
      //     },
      //     {
      //       path: "phone-verify",
      //       name: "registerPhoneVerify",
      //       component: lazyLoadComponent("authentication/register/PhoneVerify"),
      //     },
      //   ],
      // },
      {
        path: "forgot-password",
        name: "forgotPassword",
        component: lazyLoadComponent(
          "authentication/forgot-password/RouterWrapper"
        ),
        children: [
          {
            alias: "",
            path: "find-account",
            name: "findAccount",
            component: lazyLoadComponent(
              "authentication/forgot-password/FindAccount"
            ),
          },
          {
            path: "account-preview",
            name: "accountPreview",
            component: lazyLoadComponent(
              "authentication/forgot-password/AccountPreview"
            ),
          },
          {
            path: "activation-code",
            name: "activationCode",
            component: lazyLoadComponent(
              "authentication/forgot-password/ActivationCode"
            ),
          },
          {
            path: "email-verification",
            name: "emailVerification",
            component: lazyLoadComponent(
              "authentication/forgot-password/EmailVerification"
            ),
          },
          {
            path: "phone-verification",
            name: "phoneVerification",
            component: lazyLoadComponent(
              "authentication/forgot-password/phoneVerification"
            ),
          },
          {
            path: "new-password",
            name: "newPassword",
            component: lazyLoadComponent(
              "authentication/forgot-password/NewPassword"
            ),
          },
        ],
      },

      {
        path: "/business",
        name: "business",
        component: lazyLoadView("Business"),
        // beforeEnter(to, from, next) {
        //     if (isAuthenticated())
        //         return next({ name: "chooseCategory" })
        //     return next()
        // },
         children: [{
                alias: "/business",
                path: "business-login",
                name: "businessLogin",
                component: lazyLoadComponent("businessAccount/Login"),
            },
        //     {
        //         path: "choose-category",
        //         name: "chooseCategory",
        //         component: lazyLoadComponent("business/ChooseCategory"),
        //     },
        //     {
        //         path: "choose-clinic",
        //         name: "chooseClinic",
        //         component: lazyLoadComponent("business/ChooseClinic"),
        //     },
        //     {
        //         path: "clinic-registeration/:id",
        //         name: "clinicRegistration",
        //         component: lazyLoadComponent("business/ClinicRegistration"),
        //         params: true,
        //     },
        //     {
        //         path: "verify-branch/:id",
        //         name: "verifyBranch",
        //         component: lazyLoadComponent("business/VerifyBranch"),
        //         params: true,
        //  },
         ],
    },

    ],
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

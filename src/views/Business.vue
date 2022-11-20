<template>
  <div class="business">
    <div class="bg-vid">
      <video autoplay muted loop>
        <source src="../assets/authentication/bg-vid.mp4" />
      </video>
    </div>
    <div class="content">
      <div
        class="
          container
          d-flex
          justify-content-center
          align-items-center
          w-100
          p-2
        "
      >
        <div class="custom-container w-100 p-4">
          <div
            class="
              header
              d-flex
              justify-content-between
              align-items-center
              my-3
            "
          >
            <div
              class="back-icon d-flex justify-content-center align-items-center"
              @click="goBack"
            >
              <i class="pi pi-angle-left"></i>
            </div>
            <div class="lang-selection">
              <!-- <Dropdown

                placeholder="Select a languages"
              /> -->
            </div>
          </div>
          <div class="logo my-3">
            <h1 class="text-center">Health App</h1>
          </div>
          <transition name="slide" mode="out-in">
            <div
              class="
                form-content
                d-flex
                justify-content-center
                align-items-center
                mb-4
              "
            >
              <router-view></router-view>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Steps from "primevue/steps";
export default {
  components: {

  },
  data() {
    return {
      selectedLanguage: "",
      languages: [
        { name: "English", code: "en" },
        { name: "عربي", code: "ar" },
      ],
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      id: "",
      steps: [],
    };
  },
  watch: {
    "$route.params"() {
      this.setStepsModel();
    },
  },
  created() {
    if (this.local == "ar")
      this.selectedLanguage = { name: "عربي", code: "ar" };
    else
      this.selectedLanguage = { name: "English", code: "en" };
    this.setStepsModel();
  },
  methods: {
    getLanguage() {
      localStorage.setItem("lang", this.selectedLanguage.code);
      location.reload();
    },
    goBack() {
      this.$router.go(-1);
    },
    setStepsModel() {
      this.id = this.$route.params.id ? this.$route.params.id : "";
      if (this.local=='ar')
        this.steps = [
          {
            to: "/business",
            label: "تسجيل الدخول ",
          },
          {
            to: "/business/choose-category",
            label: "النوع",
          },
          {
            to: "/business/choose-clinic",
            label: "التخصص",
          },
          {
            to: `/business/clinic-registeration/${this.id}`,
            label: "تسجيل عيادة",
          },
          {
            to: `/business/verify-branch/${this.id}`,
            label: "تأكيد",
          },
        ];
      else
        this.steps = [
          {
            to: "/business",
            label: "Login",
          },
          {
            to: "/business/choose-category",
            label: "Category",
          },
          {
            to: "/business/choose-clinic",
            label: "Speciality",
          },
          {
            to: `/business/clinic-registeration/${this.id}`,
            label: "Registeration",
          },
          {
            to: `/business/verify-branch/${this.id}`,
            label: "Confirm",
          },
        ];
    },
  },
};
</script>
<style lang="scss" scoped>
.business {
  width: 100%;
  height: 100%;
  .bg-vid {
    width: 100%;
    height: 100%;
    video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  .content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    // backdrop-filter: blur(10px);
    min-height: 100px;
    overflow-y: auto;
    .custom-container {
      background-color: white;
      border-radius: 34px;
      .header {
        .lang-selection {
        }
        .back-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-image: linear-gradient(
            160deg,
            // $gradient-color-2,
            // $gradient-color-1
          );
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
          i {
            color: white !important;
            font-size: 40px;
          }
        }
      }
      .logo {
        h1 {
         // color: $tradmark-color;
          text-align: center;
        }
      }
      .form-content {
        min-height: calc(100vh - 310px);
      }
    }
  }
}

// animation

.slide-enter-active {
  transition-duration: 0.7s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 1000px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0px;
}
</style>

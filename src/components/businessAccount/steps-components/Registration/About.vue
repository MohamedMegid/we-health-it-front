<template>
  <div class="row custom-row mt-2">
    <div class="col-12">
      <h3 class="mb-4">{{ lang[local].about }}</h3>
    </div>
    <div class="col-4">
      <Aside :toggler="toggler" @toggle="toggle"></Aside>
    </div>
    <div class="col-8">
      {{ toggler }}
      <main class="custom-transition">
        <!-- <transition name="fade" mode="out-in"> -->
        <div
          class=" location"
          :class="`${toggler == 'Location' ? 'active' : 'd-none'}`"
          key="Location"
        >
          <LocationSection :data="data" ref="locationSection"></LocationSection>
        </div>
        <div
          class=" email"
          :class="`${toggler == 'Email' ? 'active' : 'd-none'}`"
          key="Email"
        >
          <EmailSection :data="data" ref="emailSection"></EmailSection>
        </div>
        <div
          class=" phone"
          :class="`${toggler == 'Phone Number' ? 'active' : 'd-none'}`"
          key="Phone Number"
        >
          <!-- <PhoneSection
            :data="data"
            :initPhone="initPhone"
            @chechPhone="chechPhone"
            ref="phoneSection"
          ></PhoneSection> -->
          <PhoneSection :data="data"></PhoneSection>
        </div>
        <div class=" website"
        :class="`${toggler == 'Website' ? 'active' : 'd-none'}`"

         key="Website">
          <WebsiteSection :data="data" ref="websiteSection"></WebsiteSection>
        </div>
        <div
          class=" business-hours"
          :class="`${toggler == 'Business Hours' ? 'active' : 'd-none'}`"
          key="Business Hours"
        >
          <BusinessHoursSection
            :data="data"
            :initDays="initDays"
            ref="businessHoursSection"
          ></BusinessHoursSection>
        </div>
        <div
          class=" waiting-time"
          :class="`${toggler == 'Waiting Time' ? 'active' : 'd-none'}`"
          key="Waiting Time"
        >
          <WaitingTimeSection
            :data="data"
            ref="waitingTimeSection"
          ></WaitingTimeSection>
        </div>
        <div
          class=" isurance-company"
          :class="`${toggler == 'Insurance Company' ? 'active' : 'd-none'}`"
          key="Isurance Company"
        >
          <InsuranceCompaniesSection
            ref="isuranceSection"
            :data="data"
            :initCompany="initCompany"
          ></InsuranceCompaniesSection>
        </div>
        <div
          class=" fees"
          :class="`${toggler == 'Fees' ? 'active' : 'd-none'}`"
          key="Fees"
        >
          <FeesSection :data="data" ref="feesSection"></FeesSection>
        </div>
        <!-- </transition> -->
      </main>
    </div>
  </div>
</template>

<script>
import BusinessHoursSection from "./About/BusinessHoursSection.vue";
import EmailSection from "./About/EmailSection.vue";
import InsuranceCompaniesSection from "./About/InsuranceCompaniesSection.vue";
import LocationSection from "./About/LocationSection.vue";
import PhoneSection from "./About/PhoneSection.vue";
import WaitingTimeSection from "./About/WaitingTimeSection.vue";
import WebsiteSection from "./About/WebsiteSection.vue";
import Aside from "./About/Aside.vue";
import FeesSection from "./About/FeesSection.vue";

export default {
  components: {
    LocationSection,
    EmailSection,
    PhoneSection,
    WebsiteSection,
    BusinessHoursSection,
    WaitingTimeSection,
    InsuranceCompaniesSection,
    Aside,
    FeesSection,
  },

  data() {
    return {
      toggler: "Location",
      lang: {
        en: {
          register: "Clinic Registeration",
          terms: {
            text: "accept",
            link: "terms and conditions",
          },
          about: "About",
          next: "Next",
        },
        ar: {
          register: "تسجيل عيادة",
          terms: {
            text: "اقبل",
            link: "الشروط و الاحكام",
          },
          about: "عن العيادة",
          next: "التالي",
        },
      },
      id: "",
      subOptions: [],
      data: {
        title: "newtitle",
        // name: {
        //   arabic: "",
        //   english: "",
        // },
        // branchType: {},
        // title: {},
        // speciality: {
        //   arabic: "",
        //   english: "",
        //   subspeciality: [],
        // },
        // serviceType: [],
        // description: "",
        // location: {
        //   address: "",
        //   zipCode: "",
        //   state: {
        //     arabic: "",
        //     english: "",
        //     city: {},
        //   },
        //   coordinates: {},
        // },
        // email: "",
        // phone: [],
        // website: {
        //   website: "",
        //   facebook: "",
        //   youtube: "",
        //   instagram: "",
        //   whatsapp: "",
        // },
        // businessHours: {
        //   saturday: [],
        //   sunday: [],
        //   monday: [],
        //   tuesday: [],
        //   wednesday: [],
        //   thursday: [],
        //   friday: [],
        // },
        // waitingTime: {
        //   time: "",
        //   unit: {},
        // },
        // insuranceCompanies: [],
        // fees: {
        //   amount: "",
        //   currency: {},
        // },
        // acceptedAgreement: false,
      },
      initPhone: {
        mobileNumber: "",
        init: {
          phoneNumber: "",
          nationalNumber: "",
        },
      },
      initDays: {
        saturday: {
          From: "",
          To: "",
        },
        sunday: {
          From: "",
          To: "",
        },
        monday: {
          From: "",
          To: "",
        },
        tuesday: {
          From: "",
          To: "",
        },
        wednesday: {
          From: "",
          To: "",
        },
        thursday: {
          From: "",
          To: "",
        },
        friday: {
          From: "",
          To: "",
        },
      },
      initCompany: {
        init: {
          arabic: "",
          english: "",
        },
      },
      images: {
        profileImages: {
          profile: "",
          cover: "",
        },
      },
      invalid: true,
      checkPhone: false,
    };
  },

  methods: {
    toggle(value) {
      this.toggler = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes scale-display {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes scale-display--reversed {
  0% {
    display: block;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    display: block;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    display: none;
    opacity: 0;
    transform: scale(0);
  }
}
.clinic-registeration {
  width: 100%;
  .custom-row {
    min-height: 50vh;
    .custom-transition {
      .section {
        transition: height 5s ease-in-out;
        animation: scale-display--reversed 0.5s;
        // animation-fill-mode:backwards;
        animation-direction: alternate;
      }
      .active {
        display: block;
        animation: scale-display 0.5s;
        // animation-fill-mode:backwards;
        animation-direction: alternate;
      }
    }
  }
}
// fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

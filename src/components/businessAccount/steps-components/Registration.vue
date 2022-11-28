<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-lg-6 order-2 order-lg-1">
        <div class="card-body">
          <div class="form-row">
            <div class="row col-md-3 mb-4">
              <label class="form-label">{{ $t("labelClinic.label") }}</label>
            </div>
            <div class="col-md-1"></div>
            <div class="form-group col-md-4 mb-0">
              <div class="form-group">
                <input
                  v-model="form.arabicName"
                  type="text"
                  class="form-control"
                  id="name2"
                  :placeholder="$t('labelClinic.placeHolderArabic')"
                />
              </div>
            </div>
            <div class="form-group col-md-4 mb-0">
              <div class="form-group">
                <input
                  v-model="form.englishName"
                  type="text"
                  class="form-control"
                  id="name2"
                  :placeholder="$t('labelClinic.placeHolderEnglish')"
                />
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <label class="col-md-3 form-label">{{
              $t("titleTypes.label")
            }}</label>
            <div class="col-md-9">
              <!-- select2
             >

             </select2> -->
            </div>
          </div>
          <div class="row mb-4">
            <label class="col-md-3 form-label">{{
              $t("branchTypes.label")
            }}</label>
            <div class="col-md-9">
              <!-- select2
             >

             </select2> -->
            </div>
          </div>

          <div class="row mb-4">
            <label class="col-md-3 form-label">{{
              $t("Specialties.label")
            }}</label>
            <div class="col-md-9">
              <!-- select2
             >

             </select2> -->
            </div>
          </div>
          <div class="row mb-4">
            <label class="col-md-3 form-label">{{
              $t("serviceTypes.label")
            }}</label>
            <div class="col-md-9">
              <!-- select2
             >

             </select2> -->
            </div>
          </div>

          <div class="row mb-4">
            <label class="col-md-3 form-label">{{
              $t("description.label")
            }}</label>
            <div class="col-md-9">
              <div class="form-group">
                <textarea
                  name=""
                  class="form-control"
                  :placeholder="$t('description.placeholder')"
                  style="resize: none"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- <div class="form-footer mt-2">
           <a href="javascript:void(0)" class="btn btn-primary"
             >Confirm Details</a
           >
         </div> -->
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <ProfileImages />
      </div>
    </div>
    <div class="row custom-row mt-2">
      <About />
    </div>
  </div>
</template>
<i18n src="@/lang/businessAccount/Registration.json"></i18n>

<script>
//import Multiselect from "vue-multiselect";
import About from "./Registration/About.vue";
import ProfileImages from "./Registration/ProfileImages.vue";

export default {
  components: { ProfileImages, ProfileImages, About },
  data() {
    return {
      //   serviceTypeOptions: Object.values(this.$t("serviceTypes.options")),
      form: {
        englishName: "",
        arabicName: "",
      },
      Specialties: [],
      serviceType: [],
      SpecialtiesOptions: [
        "all",
        "options",
        "selected",
        "multiple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "showLabels",
        "onChange",
        "touched",
      ],
    };
  },
  created() {},
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "template/assets/plugins/multipleselect/multiple-select.js"
    );
    document.head.appendChild(externalScript);

    let x = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "template/assets/plugins/multipleselect/multi-select.js"
    );
    document.head.appendChild(x);
  },

  methods: {
    selectAll(selectedOption) {
      if (selectedOption === this.SpecialtiesOptions[0]) {
        this.SpecialtiesOptions.map((option) => {
          if (
            option !== this.SpecialtiesOptions[0] &&
            !this.Specialties.includes(option)
          ) {
            this.Specialties.push(option);
          }
        });
      }
    },
    remove(removedOption) {
      if (removedOption === this.SpecialtiesOptions[0]) {
        this.SpecialtiesOptions.map((option) => {
          this.Specialties.pop(option);
        });
      }
    },
  },
};
</script>

<style>
.multiselect__tags {
  border-radius: 35px !important;
}
</style>

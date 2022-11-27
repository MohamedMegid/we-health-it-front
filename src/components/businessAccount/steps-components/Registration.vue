<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card-body">
        <div class="form-row">
          <div class="row col-md-3 mb-4">
            <label class="form-label">{{ $t("labelClinic.label") }}</label>
          </div>
          <div class="col-md-1"></div>

          <div class="form-group col-md-4 mb-0">
            <BasicInput
              type="text"
              :label="false"
              :required="true"
              :placeholder="$t('labelClinic.placeHolderArabic')"
            />
          </div>
          <div class="form-group col-md-4 mb-0">
            <BasicInput
              type="text"
              :label="false"
              :required="true"
              :placeholder="$t('labelClinic.placeHolderEnglish')"
            />
          </div>
        </div>

        <div class="row mb-4">
          <label class="col-md-3 form-label">{{
            $t("titleTypes.label")
          }}</label>
          <div class="col-md-9">
            <DropDown :label="false" :options="$t('titleTypes.options')" />
          </div>
        </div>
        <div class="row mb-4">
          <label class="col-md-3 form-label">{{
            $t("branchTypes.label")
          }}</label>
          <div class="col-md-9">
            <DropDown :label="false" :options="$t('branchTypes.options')" />
          </div>
        </div>

        <div class="row mb-4">
          <label class="col-md-3 form-label">{{
            $t("Specialties.label")
          }}</label>
          <div class="col-md-9">
            <!-- <Multiselect
              v-model="Specialties"
              :options="SpecialtiesOptions"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              @select="selectAll"
              @remove="remove"
              placeholder="Pick some"
            ></Multiselect> -->
            <div class="ms-parent custom-multiselect" style="width: 73.5781px;"><button type="button" class="ms-choice"><span class="placeholder"></span><div class=""></div></button><div class="ms-drop bottom" style="display: none;"><ul style="max-height: 250px;"><li class="ms-select-all"><label><input type="checkbox" data-name="selectAll"> [Select all]</label></li><li class="" style="background-color: #5e2dd8 ; color: #ffffff;"><label class=""><input type="checkbox" data-name="selectItem" value="1"><span>January</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="2"><span>February</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="3"><span>March</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="4"><span>April</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="5"><span>May</span></label></li><li class="" style="background-color: #32cafe; color: #ffffff;"><label class=""><input type="checkbox" data-name="selectItem" value="6"><span>June</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="7"><span>July</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="8"><span>August</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="9"><span>September</span></label></li><li class="" style="background-color: #ff7088; color: #ffffff;"><label class=""><input type="checkbox" data-name="selectItem" value="10"><span>October</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="11"><span>November</span></label></li><li class=""><label class=""><input type="checkbox" data-name="selectItem" value="12"><span>December</span></label></li><li class="ms-no-results" style="display: none;">No matches found</li></ul></div></div>
          </div>
        </div>
        <div class="row mb-4">
          <label class="col-md-3 form-label">{{
            $t("serviceTypes.label")
          }}</label>
          <div class="col-md-9">
            <!-- <Multiselect
              v-model="serviceType"
              :options="serviceTypeOptions"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              @select="selectAll"
              @remove="remove"
              :placeholder='$t("serviceTypes.label")'
            ></Multiselect> -->
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
      
    <ProfileImages/> 

    </div>
  </div>
</template>
<i18n src="@/lang/businessAccount/Registration.json"></i18n>

<script>
//import Multiselect from "vue-multiselect";
import BasicInput from "../Registration/BasicInput.vue";
import DropDown from "../Registration/DropDown.vue";
import ProfileImages from "../Registration/ProfileImages.vue";
 
export default {
  data() {
    return {
      serviceTypeOptions: Object.values(this.$t("serviceTypes.options")),
      Specialties: [],
      serviceType:[],
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
  created() {
   
  },
  mounted(){
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', "template/assets/plugins/multipleselect/multiple-select.js")
        document.head.appendChild(externalScript)

                let x = document.createElement('script')
        externalScript.setAttribute('src', "template/assets/plugins/multipleselect/multi-select.js")
        document.head.appendChild(x)

 
  },
  components: { DropDown, BasicInput, ProfileImages, ProfileImages },
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

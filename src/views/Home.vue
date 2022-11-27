<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-danger my-4">RedFoxes</h1>
        <!-- PAGE-HEADER -->
        <div class="page-header">
          <h1 class="page-title">Welcome To RedFoxes Dashboard</h1>
          <div>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </div>
        </div>
        <!-- PAGE-HEADER END -->
      </div>
    </div>

<Registration/>

    <!-- <div>
      <label class="typo__label">Single select</label>
      <multiselect
        v-model="value"
        :options="options"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        @select="selectAll"
        @remove="remove"
        placeholder="Pick some"
      ></multiselect>
    </div> -->
  </Page>
</template>

<script>
import Page from "@/components/global/layout/Page.vue";
import Multiselect from "vue-multiselect";
import Registration from '@/components/businessAccount/steps-components/Registration.vue';

export default {
  name: "Home",
  data() {
    return {
      value: [],
      options: [
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
  watch: {
    // value: {
    //   handler(v) {
    //     console.log(v);
    //     console.log(v.includes("all"));
    //     if (v.includes("all")) this.value = [...this.options];
    //     else this.value = [...v];
    //   },
    // },
  },
  components: {
    Page,
    Registration,
   // Multiselect,
  },
  methods: {
    selectAll(selectedOption) {
      if (selectedOption === "all") {
        console.log(this.value);

        this.options.map((option) => {
          if (option !== "all" && !this.value.includes(option)) {
            this.value.push(option);
          }
        });
      }
    },
    remove(removedOption) {
      console.log(removedOption);
      if (removedOption === "all") {
        this.options.map((option) => {
          this.value.pop(option);
        });
      }
    },
  },
};
</script>

<style></style>

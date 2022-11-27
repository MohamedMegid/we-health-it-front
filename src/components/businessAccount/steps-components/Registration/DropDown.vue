<template>
  <div class="form-group">
    <label v-if="label" class="form-label"
      >{{ label }} <span v-if="required" class="text-red">*</span></label
    >
    <select
      class="form-control form-select"
      data-bs-placeholder="Select"
      tabindex="-1"
    >
      <option v-for="(option, index) in selectOptions" :key="index">
        {{ option }}
      </option>
    </select>
    {{ options.length }}
  </div>
</template>

<script>
export default {
  props: ["label", "options" ,"required"],
  data() {
    return {
      selectOptions: Object.values(this.options),
    };
  },
 
};
</script>

<style></style>

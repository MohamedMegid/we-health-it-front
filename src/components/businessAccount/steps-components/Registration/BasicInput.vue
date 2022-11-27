<template>
  <div class="form-group">
    <label v-if="label" class="form-label"
      >{{ label }} <span v-if="required" class="text-red">*</span></label
    >
    <input
      :type="type"
      class="form-control"
      id="name2"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "label", "required"],
};
</script>

<style></style>

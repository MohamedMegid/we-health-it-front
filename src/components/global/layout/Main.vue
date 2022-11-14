<template>
  <!--app-content open-->
  <div class="main-content app-content mt-0">
    <div class="side-app">
      <!-- CONTAINER -->
      <div class="main-container container-fluid">
        <!-- MAIN-CONTENT -->
        <slot></slot>
        <!-- MAIN-CONTENT -->
      </div>
      <!-- CONTAINER END -->
    </div>
  </div>
  <!--app-content close-->
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style>
.side-app {
    position: relative;
    top: 75px;
}
</style>

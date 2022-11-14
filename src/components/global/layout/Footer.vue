<template>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5 class="text-center mb-0">
            <strong class="text-danger me-1">RedFoxes</strong> 
            <small>{{year}} All rights reserved.</small>
          </h5>
        </div>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->
</template>

<script>
export default {
  data(){
    return {
      year:new Date().getFullYear()
    }
  }
};
</script>

<style></style>

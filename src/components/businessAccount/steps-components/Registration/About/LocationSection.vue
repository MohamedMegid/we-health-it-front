<template>
  <div class="card-body p-0">
    <div class="row">
      <div class="col-md-4">
        <div class="input-group">
          <div class="input-group-text">
            <i class="fa fa-clock-o tx-16 lh-0 op-6"></i>
          </div>
          <input
            class="form-control"
            id="datepicker-date"
            placeholder="Date Range"
            type="text"
          />
        </div>
      </div>
      <div class="col-md-4 mt-4 mt-md-0">
        <div class="input-group">
          <div class="input-group-text">
            <span class="fa fa-clock-o tx-16 lh-0 op-6"></span>
          </div>
          <input
            class="form-control"
            id="datepicker-month"
            placeholder="Month Range"
            type="text"
          />
        </div>
      </div>
      <div class="col-md-4 mt-4 mt-md-0">
        <div class="input-group">
          <div class="input-group-text">
            <span class="fa fa-clock-o tx-16 lh-0 op-6"></span>
          </div>
          <input
            class="form-control"
            id="datepicker-year"
            placeholder="Year Range"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>

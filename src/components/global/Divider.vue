<template>
    <hr class="hr-text" :data-content="label" />
</template>
<script>
export default {
    props:['label']
}
</script>
<style lang="scss" scoped>
      .hr-text {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: white;
        text-align: center;
        height: 1.5em;
        opacity: 0.8;
        margin:10px 0px;
        &:before {
          content: "";
          // use the linear-gradient for the fading effect
          // use a solid background color for a solid bar
          background: linear-gradient(
            to right,
            transparent,
            #56c596,
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
          padding: 0 0.5em;
          line-height: 1.5em;
          // this is really the only tricky part, you need to specify the background color of the container element...
          font-weight:bold ;
          background-color: #ffff;
        }
      }
</style>
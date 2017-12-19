<template>
  <div class="christmas-main">
    <div class="video">
      <video width="100%" height="100%" autoplay muted loop src="/static/1.mp4"></video>
    </div>
    <div class="snowflake">
      <div class="snowflake-1">
        <img style="width: 100%;position: absolute; bottom: 0;" src="/static/xuehua.png" alt="">
      </div>
      <!--<div class="snowflake-2">-->
      <!--<img src="/static/xuehua.png" alt="">-->
      <!--</div>-->
      <!--<div class="snowflake-3">-->
      <!--<img src="/static/xuehua.png" alt="">-->
      <!--</div>-->
      <!--<div class="snowflake-4">-->
      <!--<img src="/static/xuehua.png" alt="">-->
      <!--</div>-->
    </div>
    <div class="lighting"></div>
    <div class="snowing"></div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {},
    data () {
      return {}
    },
    components: {},
    watch: {},
    methods: {},
    computed: {},
    created () {
    },
    mounted () {
    }
  }
</script>
<style scoped>
  .christmas-main {
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 99%;
  }

  .christmas-main .video, .christmas-main .snowflake, .christmas-main .lighting, .christmas-main .snowing, .snowflake-1, .snowflake-2, .snowflake-3, .snowflake-4{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .snowflake .snowflake-1 {
    /*transform: rotate(90deg);*/
  }

  .snowflake .snowflake-2 {
  }

  .snowflake .snowflake-3 {
  }

  .snowflake .snowflake-4 {
  }

</style>

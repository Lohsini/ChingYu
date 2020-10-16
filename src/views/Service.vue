<template>
  <div class="service">
    <div class="container">
      <div class="test">
        <h1>服務內容</h1>
        <h1>開發中</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.service{
  min-height: 92vh;
  .container{
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .test{
      background-color: rgba(0, 0, 0, 0.08);
      height: 90%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>

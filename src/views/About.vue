<template>
  <div class="about">
    <banner />
    <div class="container">
      <div class="test">
        <p>慶宇汽車位於新竹市區，距離新竹火車站約3-5分鐘車程，在地開業將近30年，擁有豐富的經驗與精湛的技術。</p>
        <p>主要服務項目是汽車保養與維修、鈑金烤漆、汽車買賣等，廠內擁有最新車輛電腦診斷系統，服務不限車子廠牌。</p>
        <p>歡迎預約保養您的愛車</p>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner_about.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    banner,
  },
};
</script>

<style lang="scss" scoped>
.about{
  min-height: 92vh;
  .container{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .test{
      // background-color: rgba(0, 0, 0, 0.08);
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>

<template>
  <div class="service">
    <div class="container">
      <div class="test">
        <h1>服務內容</h1>
        <div class="pic">
          <img :src="pic" alt="pic">
        </div>
        <div class="group row">
          <h2>保養</h2>
          <h2>引擎</h2>
          <h2>鈑金</h2>
        </div>
        <div class="group row">
          <h2>烤漆</h2>
          <h2>電機</h2>
          <h2>冷氣</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pic from '../assets/pic2.jpg';

export default {
  data() {
    return {
      pic,
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
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1{
        margin-bottom: 30px;
      }
      .group{
        h2{
          margin: 30px;
          border-bottom: black 2px solid;
          padding: 20px;
          padding-bottom: 10px;
        }
      }
      .pic{
        max-width: 600px;
        padding: 0 10px;
        img{
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 550px){
  .service{
    height: 100%;
    .container{
      height: 100%;
      margin: 50px auto;
      .test{
        height: 100%;
        padding: 50px 0;
        h1{
          margin-bottom: 30px;
        }
        .group{
          display: block;
          h2{
            margin: 0px;
            padding: 50px 60px 20px;
          }
        }
      }
    }
  }
}
</style>

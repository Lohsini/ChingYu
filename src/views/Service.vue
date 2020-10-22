<template>
  <div class="service">
    <div class="container">
      <div class="test">
        <h1>服務內容</h1>
        <div class="pic">
          <img :src="pic" alt="pic">
        </div>
        <div class="group row">
          <h2><router-link to="/reservation">保養</router-link></h2>
          <h2><router-link to="/reservation">引擎</router-link></h2>
          <h2><router-link to="/reservation">鈑金</router-link></h2>
          <h2><router-link to="/reservation">烤漆</router-link></h2>
          <h2><router-link to="/reservation">電機</router-link></h2>
          <h2><router-link to="/reservation">冷氣</router-link></h2>
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
  @media screen and (max-width: 992px){
    min-height: 93.8vh;
  }
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
        max-width: 600px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        h2{
          margin: 30px;
          border-bottom: black 2px solid;
          padding: 20px;
          padding-bottom: 10px;
          a{
            text-decoration: none;
            color: inherit;
          }
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
      }
    }
  }
}
</style>

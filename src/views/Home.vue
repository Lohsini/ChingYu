<template>
  <div class="home" :style="{ backgroundImage: 'url(' + background + ')' }">
    <div class="background">

      <!-- <div class="container">
        <div class="row">
          <div class="left col-md-7">
            <div class="pic">
              <img :src="factory" alt="factory">
            </div>
          </div>
          <div class="right col-md-5">
            <div class="content">
              <h1>公司名稱</h1>
              <h2>歡迎光臨</h2>
              <h3>welcome</h3>
              <button class="btn btn-warning">GO！</button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <slideshow />
  </div>
</template>

<script>
import background from '@/assets/background.jpg';
import factory from '@/assets/factory.jpg';

export default {
  name: 'Home',
  data() {
    return {
      background,
      factory,
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.home{
  background-size: cover;
  .background{
    background: rgba(255, 255, 255, 0.7);
    min-height: 92vh;
    display: flex;
    align-items: center;

    // -----------------
    .conrainer{
      .row{
        // .left{
        //   .pic{
        //     width: 100%;
        //     img{
        //       width: 100%;
        //     }
        //   }
        // }

        .right{
          display: flex;
          justify-content: center;
          align-items: center;
          .content{
            // display: flex; //上面有align-items: center;就不用這一排
            // flex-direction: column; //上面有align-items: center;就不用這一排
            // justify-content: center; //上面有align-items: center;就不用這一排
          }
        }
      }
    }
  }
}
</style>

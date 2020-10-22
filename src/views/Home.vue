<template>
  <div class="home" :style="{ backgroundImage: 'url(' + background + ')' }">
    <div class="background">

      <div class="container">
        <div class="row">
          <div class="txt col-md-12 col-lg-6">
            <div class="content">
              <h1><span>慶宇汽車</span> 保養修理廠</h1>
              <h3>歡迎您來本店保養您的愛車</h3>
              <h3>請撥打預約電話 0928205868</h3>
              <h3>或是直接線上預約</h3>
              <router-link to="/reservation" class="btn">去預約！</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background from '@/assets/bg.jpg';
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
    background: rgba(255, 255, 255, 0.6);
    min-height: 92vh;
    @media screen and (max-width: 992px){
      min-height: 93.8vh;
    }
    display: flex;
    align-items: center;

    .container{
      height: 92vh;
      .row{
        height: 92vh;
        .txt{
          background-color: rgba(255, 255, 255, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          .content{
            // text-shadow: 2px 2px 1px rgb(255, 255, 255);
            h1{
              font-size: 3rem;
              font-weight: 600;
              margin-bottom: 30px;
              color: rgb(0, 2, 105);
              text-shadow: none;
              // border-bottom: 3px solid rgb(0, 2, 105);
              // padding-bottom: 10px;
            }
            h3{
              font-size: 1.7rem;
              text-align: left;
              font-weight: 600;
            }
            a{
              margin-top: 30px;
              padding: 10px 30px;
              border-radius: 50px;
              font-size: 2rem;
              background-color:#FFB300;
              color: #fff;
              text-shadow: 2px 2px 0px rgb(255, 153, 0);
              font-weight: 600;
            }
            a:hover{
              background-color:#ffbe25;
            }
            @media screen and (max-width: 500px){
              h1{
                span{
                  display: block;
                  margin-bottom: 10px;
                }
                font-size: 2.7rem;
              }
              h3{
                font-size: 1.2rem;
              }
              a{
                font-size: 1.8rem;
              }
            }
          }
        }
      }
    }
  }
}

</style>

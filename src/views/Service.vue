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
    <div class="show-area">
      <h1>實拍照片集</h1>
      <MiniPicture
      :MiniPicture="MiniPicture"/>
    </div>
  </div>
</template>

<script>
import MiniPicture from '@/components/miniPicture.vue';
import pic from '../assets/pic2.jpg';
import pic1 from '../assets/pic1.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import really1 from '../assets/really-1.jpg';
import really2 from '../assets/really-2.jpg';
import really3 from '../assets/really-3.jpg';

export default {
  data() {
    return {
      pic,
      MiniPicture: {
        pictures: [
          {
            name: '儀錶板拆裝+冷氣維修',
            photo: really1,
            id: 1,
          },
          {
            name: '儀錶板拆裝+冷氣維修',
            photo: really2,
            id: 2,
          },
          {
            name: '冷氣維修',
            photo: really3,
            id: 3,
          },
          {
            name: '測試-圖來自網路',
            photo: pic1,
            id: 4,
          },
          {
            name: '測試-圖來自網路',
            photo: pic3,
            id: 5,
          },
          {
            name: '測試-圖來自網路',
            photo: pic4,
            id: 6,
          },
          {
            name: '測試-圖來自網路',
            photo: pic5,
            id: 7,
          },
        ],
      },
    };
  },
  components: {
    MiniPicture,
  },
};
</script>

<style lang="scss" scoped>
.service{
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    .test{
      padding: 50px;
      background-color: rgba(0, 0, 0, 0.08);
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
  .show-area{
    border-top: #ddd solid 1px;
    margin: 50px auto;
    padding: 50px 0;
    h1{
      margin-bottom: 30px;
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

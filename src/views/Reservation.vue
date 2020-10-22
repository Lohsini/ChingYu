<template>
  <div class="reservation">
    <div class="firstpage">
      <Banner :banner="banner"/>

      <div class="content">
        <div class="container">
          <div class="row text-left mx-auto">
            <div class="txt col-12 col-md-6">
              <h2 class="mb-5">快速預約</h2>
              <p><i class="fas fa-mobile-alt mr-3"></i>直撥老闆手機：0928-205868</p>
              <p><i class="fab fa-line mr-3"></i>加老闆LINE ID：0928205868</p>
              <p>以上預約方法可直接與老闆聯繫，歡迎使用。</p>
            </div>

            <div class="txt col-12 col-md-6">
              <h2 class="mb-5">線上預約</h2>
              <p><i class="fas fa-file-alt mr-3"></i>填寫<strong class="text-danger">以下表單</strong>
              <br>我們收到您的預約將會以LINE通知確認，若無LINE通訊軟體，將會以電話或簡訊連絡，敬請留下正確的資料。</p>
              <p><i class="fab fa-facebook mr-3"></i>使用Facebook
              <br>直接私訊粉絲專頁(最上方導覽列及最下方資訊欄都有<i class="fab fa-facebook px-1"></i>圖示，可直接點擊進入)</p>
              <p>以上預約方法將由小編轉達老闆，<strong class="text-danger">建議提前兩天預約</strong>，歡迎使用。</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="form">
      <div class="container">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner.vue';
import Form from '@/components/form.vue';

export default {
  data() {
    return {
      banner: {
        chineseName: '線上預約',
        englishName: 'Reservation',
        background: 'https://picsum.photos/1000/500?random=26',
      },
    };
  },
  components: {
    Banner,
    Form,
  },
};
</script>

<style lang="scss" scoped>
.firstpage {
  height: 92vh;
  @media screen and (max-width: 992px){
    min-height: 93.8vh;
  }
  .content {
    height: 52vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .row {
      .txt{
        h2{
          padding-bottom: 20px;
          border-bottom: 2px solid #333;
        }
      }
    }
  }
}
.form {
  .container {
    margin: auto;
    margin-bottom: 50px;
    background-color: rgba(0, 0, 0, 0.04);
    @media screen and (max-width: 560px){
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 800px){
  .firstpage{
    height: 100%;
    .content{
      height: 100%;
      .container{
        margin: 20px auto;
        .txt{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

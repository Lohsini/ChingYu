<template>
  <div class="information">
     <div class="firstpage">

      <div class="content">
        <div class="container">
          <div class="row text-left mx-auto">

            <div class="txt col-12 col-md-6">
              <div class="test mb-5">
                <h2 class="mb-4">營業時間</h2>
                <p><i class="fas fa-clock mr-3"></i>星期一 ~ 星期六 8:00 ~ 18:00</p>
                <p><i class="fas fa-door-open mr-3"></i>公休日：星期日</p>
              </div>
              <div class="test mb-5">
                <h2 class="mb-4">聯絡方式</h2>
                <p><i class="fas fa-phone mr-3"></i>電話1：03-5255711</p>
                <p><i class="fas fa-phone mr-3"></i>電話2：03-5255710</p>
                <p><i class="fas fa-mobile-alt mr-3"></i>老闆手機：0928-205868</p>
                <p><i class="fab fa-line mr-3"></i>老闆LINE ID：0928205868</p>
                <p><i class="fab fa-facebook mr-3"></i>Facebook搜尋：慶宇汽車保養廠</p>
              </div>
              <div class="test mb-5">
                <h2 class="mb-4">地址位置</h2>
                <p><i class="fas fa-map-marker-alt mr-3"></i>新竹市林森路301號</p>
                <p>四維路橋及振興地下道中間，距新竹火車站約3-5分鐘車程</p>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14487.797275915984!2d120.95277476977535!3d24.79718889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683593a8deb753%3A0x3a9e9b9da52994b9!2z5oW25a6H5rG96LuK57at5L-u5L-d6aSK5bug!5e0!3m2!1szh-TW!2stw!4v1602751429622!5m2!1szh-TW!2stw"></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.firstpage {
  // min-height: 92vh;
  .content {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    .container{
      margin: 20px auto;
      .row {
        .txt{
          margin-top: 20px;
          .test{
            h2{
              padding-bottom: 10px;
              border-bottom: 2px solid #333;
            }
          }
        }
        .map{
          height: 100%;
          iframe {
            border: none;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px){
  .firstpage{
    height: 100%;
    .content{
      height: 100%;
      .container{
        .txt{
        }
        .map{
          height: 300px;
      }
      }
    }
  }
}
</style>

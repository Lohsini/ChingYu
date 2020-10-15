<template>
  <div class="information">
     <div class="firstpage">

      <div class="content">
        <div class="container">
          <div class="row text-left mx-auto">

            <div class="txt col-12 col-md-6">
              <div class="test mb-5">
                <h2 class="mb-4">營業資訊</h2>
                <p><i class="fas fa-phone mr-3"></i>直撥老闆手機：0928-205868</p>
                <p><i class="fab fa-line mr-3"></i>加老闆LINE ID：0928205868</p>
                <p>以上預約方法可直接與老闆聯繫，歡迎使用。</p>
              </div>
              <div class="test">
                <h2 class="mb-4">營業資訊</h2>
                <p><i class="fas fa-phone mr-3"></i>直撥老闆手機：0928-205868</p>
                <p><i class="fab fa-line mr-3"></i>加老闆LINE ID：0928205868</p>
                <p>以上預約方法可直接與老闆聯繫，歡迎使用。</p>
              </div>
              <div class="test">
                <h2 class="mb-4">營業資訊</h2>
                <p><i class="fas fa-phone mr-3"></i>直撥老闆手機：0928-205868</p>
                <p><i class="fab fa-line mr-3"></i>加老闆LINE ID：0928205868</p>
                <p>以上預約方法可直接與老闆聯繫，歡迎使用。</p>
              </div>
            </div>

            <div class="txt col-12 col-md-6">
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
  height: 92vh;
  .content {
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .row {
      .txt{
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
</style>

<template>
  <div class="banner">
    <div class="background">
      <div class="container">
        <div class="txt text-center">
          <h1 class="mb-4">線上預約</h1>
          <h2 class="mb-0">Reservation</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 40vh;
  background-image: url(https://picsum.photos/1000/500?random=26);
  background-repeat: no-repeat;
  background-size: cover;
  .background {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    .container {
      max-width: 700px;
      height: 100%;
      background-color: rgba(240, 248, 255, 0.5);
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .txt {
        color: #fff;
        text-shadow: 3px 2px 10px #000;
        h1 {
          font-size: 3.5rem;
        }
        h2 {
          font-size: 2.5rem;
        }
      }
    }
  }
}

@media screen and (max-width: 800px){
  .banner{
    height: 30vh;
  }
}

@media screen and (max-width: 500px) {
  .banner .background {
    .container {
      .txt {
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>

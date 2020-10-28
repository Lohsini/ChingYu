<template>
  <div class="banner-pic">
    <div class="wrapper">
      <div class="bannertext">
        <div class="banner-text">
          <div
            class="wrapper"
            :class="{ 'cover': true }"
            :style="{ backgroundImage: 'url(' + pic + ')' }"
          >
            <div class="container" :class="{ 'dark': true }">
              <div class="txt">
                <h1>
                  <span>慶宇汽車</span> 保養修理廠
                </h1>
                <h2>關於我們</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pic from '../assets/pic3.jpg';

export default {
  data() {
    return {
      pic,
    };
  },
};
</script>

<style scoped lang="scss">
.banner-pic {
  position: relative;
  .wrapper {
    display: flex;
    .bannertext {
      width: 100%;
      .wrapper {
        width: 100%;
        height: 42vh;
        // height: 300px;
        .container {
          display: flex;
          justify-content: center;
          margin: auto;
          height: 100%;
          .txt {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            h1 {
              position: relative;
              font-size: 3.5rem;
              border-bottom: solid 2px;
              padding-bottom: 10px;
              margin-bottom: 0.3em;
              font-weight: 600;
            }
            h2 {
              font-size: 2.5rem;
              margin: 0 auto;
            }
          }
        }
      }
    }
    .cover {
      background-size: cover;
    }
    .dark {
      background-color: rgba(0, 0, 0, 0.6);
      background: rgba(255, 255, 255, 0.6);
      color: #fff;
      color: #000;
      text-shadow: 3px 2px 10px #000;
      text-shadow: 3px 2px 10px #fff;
    }
  }
}
@media screen and (max-width: 500px) {
  .banner-text .wrapper {
    .container {
      .txt {
        h1{
          span{
            display: block;
            margin-bottom: 10px;
          }
          font-size: 2.7rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .banner-text .wrapper {
    .container {
      .txt {
        h1{
          span{
            display: block;
            margin-bottom: 10px;
          }
        }
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
}

</style>

<template>
  <div>
    <footer>
      <div class="footer">
        <div class="container">
          <div class="content">
            <div class="footer-item item-name">
              <h1>慶宇汽車 保養修理廠</h1>
              <div class="pic">
                <img :src="factory" alt="factory">
              </div>
            </div>
            <div class="footer-item item-contact">
              <h1>聯絡方式</h1>
              <nav>
                <p><i class="fas fa-phone"></i>聯絡電話：03-5255711</p>
                <p><i class="fas fa-mobile-alt"></i>老闆手機：0928-205868 (快速聯繫)</p>
                <p><i class="fas fa-map-marker-alt"></i>地址：新竹市林森路301號</p>
                <!-- <p><i class="far fa-envelope-open"></i>客服信箱：abdhsk123@gmail.com</p> -->
              </nav>
            </div>
            <div class="footer-item item-map">
              <h1>網站地圖</h1>
              <nav>
                <router-link to="/"><i class="fas fa-angle-right"></i>首頁</router-link>
                <router-link to="/about"><i class="fas fa-angle-right"></i>關於我們</router-link>
                <router-link to="/service"><i class="fas fa-angle-right"></i>服務內容</router-link>
                <router-link to="/information"><i class="fas fa-angle-right"></i>營業資訊</router-link>
                <router-link to="/reservation"><i class="fas fa-angle-right"></i>線上預約</router-link>
              </nav>
            </div>
            <div class="footer-item item-icon">
              <ul class="navbar-nav">
                <li>
                  <a href="https://www.facebook.com/yuwei921224"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-line"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        Copyright &copy; 2020 慶宇汽車 保養修理廠
      </div>
    </footer>
  </div>
</template>

<script>
import factory from '@/assets/factory.jpg';

export default {
  data() {
    return {
      factory,
    };
  },
};
</script>

<style lang="scss" scoped>
footer{
  .footer{
    background-color:#202020;
    .content{
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
      padding-bottom: 50px;
      .footer-item{
        color: #fff;
        h1{
          font-size: 1.2rem;
          border-bottom: 2px dotted #fff;
          padding-bottom: 10px;
          margin-bottom: 30px;
        }
        .pic{
          max-width: 250px;
          margin: auto;
          img{
            width: 100%;
            object-fit: cover;
          }
        }
        nav{
          display: flex;
          flex-direction: column;
          align-items: start;
          a, p{
            font-size: 0.9rem;
            color: #fff;
            text-decoration: none;
            margin-bottom: 15px;
            i{
              margin-right: 10px;
            }
          }
          a:hover{
            color:#FFB300;
          }
        }
        .navbar-nav{
          ul{
            padding: 0;
            margin: 0;
          }
          li{
            margin-bottom: 5px;
            transition: .2s;
            a{
              color: #fff;
              margin: 0 5px;
              padding: 0;
              i{
                font-size: 2rem;
                padding: 0;
                margin: 0;
                line-height: 1.5;
              }
            }
          }
          @media screen and (min-width: 600px){
            li:hover {
              transform: rotate(20deg);
              transition: transform .2s ease;
            }
          }
        }
      }
    }
  }
  .copyright{
    background-color: #9A0000;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px 0;
  }
}
@media screen and (max-width: 1000px){
  footer .footer .container{
    .item-map{
      display: none;
    }
  }
}

@media screen and (max-width: 700px){
  footer .footer .container{
    .item-name{
      display: none;
    }
  }
}

@media screen and (max-width: 600px){
  footer .footer .container{
    .content{
      flex-direction: column;
      padding-bottom: 30px;
      .item-name{
        display: block;
        margin-bottom: 30px;
      }
      .item-contact{
        margin-bottom: 30px;
      }
      .item-map{
        display: block;
      }
      .item-icon{
        .navbar-nav{
          display: block;
          li{
            float: right;
          }
        }
      }
    }
  }
}

</style>

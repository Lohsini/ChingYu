<template>
  <div>
    <footer>
      <div class="footer">
        <div class="container">
          <div class="footer-item">
            <h4>慶宇汽車 保養修理廠</h4>
            <div class="pic">
              <img :src="factory" alt="factory">
            </div>
          </div>
          <div class="footer-item">
            <h4>聯絡方式</h4>
            <nav>
              <p><i class="fas fa-phone"></i>聯絡電話：03-5255711</p>
              <p><i class="fas fa-phone"></i>老闆手機：0928-205868 (快速聯繫)</p>
              <p><i class="fas fa-map-marker-alt"></i>地址：新竹市林森路301號</p>
              <p><i class="far fa-envelope-open"></i>客服信箱：abdhsk123@gmail.com</p>
            </nav>
          </div>
          <div class="footer-item">
            <h4>網站地圖</h4>
            <nav>
              <router-link to="/"><i class="fas fa-angle-right"></i>首頁</router-link>
              <router-link to="/about"><i class="fas fa-angle-right"></i>關於我們</router-link>
              <router-link to="/service"><i class="fas fa-angle-right"></i>服務內容</router-link>
              <router-link to="/information"><i class="fas fa-angle-right"></i>營業時間</router-link>
              <router-link to="/reservation"><i class="fas fa-angle-right"></i>線上預約</router-link>
            </nav>
          </div>
          <div class="footer-item">
            <ul class="navbar-nav">
              <li>
                <a href=""><i class="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-line"></i></a>
              </li>
            </ul>
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
    .container{
      display: flex;
      justify-content: space-around;
      padding: 50px 0;
      .footer-item{
        color: #fff;
        h4{
          border-bottom: 2px dotted #fff;
          padding-bottom: 10px;
          margin-bottom: 30px;
        }
        .pic{
          width: 250px;
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
          li:hover {
            transform: rotate(20deg);
            transition: transform .2s ease;
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
</style>

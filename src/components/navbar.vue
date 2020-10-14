<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-car mr-3 text-warning"></i>慶宇汽車 保養修理廠</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="text-white"><i class="fas fa-caret-down"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav1">
          <li class="nav-item">
            <router-link class="nav-link after" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link after" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link after" to="/service">服務內容</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link after" to="/information">營業時間</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link after" to="/reservation">線上預約</router-link>
          </li>
        </ul>
        <ul class="navbar-nav nav2">
          <li class="facebook1">
            <a href="" class="nav-link"><i class="fab fa-facebook-square"></i></a>
          </li>
          <li class="facebook2">
            <a href="" class="nav-link"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
nav {
  min-height: 8vh;
  background-color: #262626;
  a{
    color: #fff;
  }
  button{
    outline: none;
  }
  .navbar-nav{
    .nav-item{
      margin: 5px 10px;
    }
    .nav-item a{
      border: dashed 2px transparent;
      border-radius: 50px;
      transition: 0.5s;
    }
    .nav-item:hover a{
      border: dashed 2px #fff;
      transition: border-color .4s;
    }
    .nav-item .activee{
      border: dashed 2px #fff;
    }
  }
  .nav2{
    margin-left: auto;
    li{
      margin: 5px 10px;
      border-radius: 50px;
      transition: .2s;
      a{
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
    .facebook1{
      background-color: #1778F2;
    }
    .facebook2{
      background-color: #00B900;
    }
    li:hover {
      transform: translateY(-5px);
      transition: transform .2s ease;
    }
  }
}
</style>

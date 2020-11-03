<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-car mr-3 text-warning"></i>慶宇汽車 保養修理廠</router-link>
      <button
        id="collapse"
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isActive = !isActive"
      >
        <span class="text-white">
          <i class="fas fa-caret-down" :class="{ 'turn':isActive}"></i></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav1">
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/">首頁</router-link>
          </li>
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/service">服務內容</router-link>
          </li>
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/information">營業資訊</router-link>
          </li>
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/reservation">線上預約</router-link>
          </li>
          <li class="nav-item" @click="remove">
            <router-link class="nav-link after" to="/getform">
            <i class="fas fa-user"></i></router-link>
          </li>
        </ul>
        <ul class="navbar-nav nav2">
          <li class="facebook1">
            <a href="https://www.facebook.com/yuwei921224" class="nav-link"><i class="fab fa-facebook-square"></i></a>
          </li>
          <li class="facebook2">
            <a href="https://line.me/ti/p/W0F_TIdcaD" class="nav-link"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'navbar',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    remove() {
      $('#navbarNavDropdown').removeClass('show');
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.turn{
  transform: rotate(180deg);
}

nav {
  min-height: 8vh;
  @media screen and (max-width: 992px){
    min-height: 100%;
  }
  background-color: #262626;
  a{
    color: #fff;
  }
  button{
    outline: none;
  }
  .navbar-nav{
    @media screen and (max-width: 992px){
      margin: 20px;
    }
    .nav-item{
      margin: 5px 10px;
    }
    .nav-item a{
      border: dashed 2px transparent;
      border-radius: 50px;
      transition: 0.3s;
      @media screen and (max-width: 992px){
        transition: .1s;
      }
    }
    .nav-item:hover a{
      border: dashed 2px #fff;
      transition: border-color .3s;
      @media screen and (max-width: 992px){
        transition: border-color .1s;
      }
    }
    .nav-item .activee{
      border: dashed 2px #fff;
    }
  }
  .nav2{
    margin-left: auto;
    @media screen and (max-width: 992px){
      margin: 20px;
    }
    li{
      margin: 5px 10px;
      border-radius: 10px;
      transition: .2s;
      a{
        padding: 0;
        i{
          font-size: 2rem;
          padding: 5px;
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
      @media screen and (max-width: 992px){
        transform: none;
      }
    }
  }
}
</style>

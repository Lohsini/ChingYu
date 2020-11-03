<template>
  <div class="getform">
    <div class="container py-4">
      <table class="rwd-table">
        <thead>
          <th>NO.</th>
          <th>預約姓名</th>
          <th>車牌號碼</th>
          <th>汽車品牌</th>
          <th>聯絡電話</th>
          <th>服務項目</th>
        </thead>
        <tbody>
          <tr class="orders" v-for="(item, index) in formlist" :key="index">
            <td data-th="NO" @click="openDetail(item)">{{index + 1 }}
                <button class="btn btn-outline-primary btn-sm ml-2" @click="openDetail(item)">
                  看更多</button> </td>
            <td data-th="預約姓名">{{item.name}}</td>
            <td data-th="車牌號碼">{{item.number}}</td>
            <td data-th="汽車品牌">{{item.brand}}</td>
            <td data-th="聯絡電話">{{item.phone}}</td>
            <td data-th="服務項目">{{item.service}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      id="detailInfo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="detailInfoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <!-- header(標題) -->
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="detailInfoLabel">
              <span style="font-weight: 900;">車主：{{infoModalObj.name}} 線上預約資訊</span>
            </h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="fontSize: 2rem;">&times;</span>
            </button>
          </div>

          <!-- body(內容) -->
          <div class="modal-body">
            <div class="orderer-info form-group text-left" v-if="infoModalObj.name">
              <h4>車主資料</h4>

              <div class="info">
                <div class="top">
                  <div>
                    <span>預約姓名：</span>
                    <span>{{ infoModalObj.name }}</span>
                  </div>
                  <div>
                    <span>聯絡電話：</span>
                    <span class="font-weight-bold">{{ infoModalObj.phone }}</span>
                  </div>
                </div>
                <div class="down">
                  <div>
                    <span>LINE ID：</span>
                    <span>{{ infoModalObj.line }}</span>
                  </div>
                  <div>
                    <span>進廠服務項目：</span>
                    <span>{{ infoModalObj.service }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-list form-group">
              <h4>預約資訊</h4>

              <table class="table">
                <tbody>
                  <tr>
                    <td style="width:50%;">車牌號碼：</td>
                    <td>{{ infoModalObj.number }}</td>
                  </tr>
                  <tr>
                    <td>汽車品牌：</td>
                    <td>{{ infoModalObj.brand }}</td>
                  </tr>
                  <tr>
                    <td>預約日期：</td>
                    <td>{{ infoModalObj.date }}</td>
                  </tr>
                  <tr>
                    <td>預約時段：</td>
                    <td>{{ infoModalObj.time }}</td>
                  </tr>
                  <tr>
                    <td>備註：</td>
                    <td>{{ infoModalObj.content }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-sm bg-dark text-white"
            data-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      formlist: [
        {
          brand: '',
          number: '',
          name: '',
          phone: '',
          line: '',
          date: '',
          time: '',
          service: '',
          content: '',
        },
      ],
      infoModalObj: {},
    };
  },
  created() {
    this.getform();
  },
  methods: {
    getform() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}api/getform/`;
      const vm = this;
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          // console.log('formList:', response.data);
          vm.formlist = response.data;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log('失敗');
          }
        });
    },
    openDetail(item) {
      this.infoModalObj = { ...item };
      // console.log(item);
      $('#detailInfo').modal('show');
    },
  },
};
</script>

<style lang="scss" scoped>
.rwd-table {
  width: 100%;
  th,td {
    border-bottom: 2px #eee solid;
    text-align: center;
    padding: 10px;
    vertical-align: middle;
  }
  tr:hover{
    background-color: rgba(238, 238, 238, 0.5);
  }
}

.getform {
  min-height: 92vh;
}

.modal {
  h4 {
    text-align: left;
    margin: 0;
    padding: 0.75rem 0;
    font-weight: 900;
  }
  .orderer-info {
    p {
      margin: 0;
      margin-bottom: 10px;
    }
    .info{
      .top, .down{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.75rem;
        border-top: #dee2e6 1px solid;
        div{
          width: 50%;
          text-align: left;
          span{
            padding-right: 0.75rem;
          }
        }
      }
    }
  }
  .order-list {
    table {
      margin: 0;
      td {
        text-align: left;
      }
    }
  }
}

@media (max-width: 530px) {
  .rwd-table {
    background: #fff;
    overflow: hidden;
    min-width: 100%;

    tr:nth-of-type(2n) {
      border-top: 2px #eee solid;
      border-bottom: 2px #eee solid;
    }
    th, td {
      margin: 0.5em 1em;
      text-align: left;
      border-bottom: none;
    }
    th {
      display: none;
    }
    td {
      display: block;
    }
    td:before {
      content: attr(data-th) " : ";
      font-weight: bold;
      width: 6.5em;
      display: inline-block;
    }
    tr:hover{
    background-color: transparent;
    }
  }
  .modal {
    .orderer-info {
      .info{
        .top, .down{
          display: block;
          border-top: none;
          padding: 0;
          div{
            // padding: 0.75rem;
            width: 100%;
            border-top: #dee2e6 1px solid;
            display: flex;
            span{
              display: block;
              width: 50%;
              padding: 0.75rem;
            }
          }
        }
      }
    }
  }
}
</style>

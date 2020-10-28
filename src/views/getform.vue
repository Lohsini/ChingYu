<template>
  <div class="getform">
    <div class="container">
      <button class="btn btn-primary mt-4" @click="getform">取資料</button>
      <table class="table my-4">
        <thead>
          <th>NO.</th>
          <th>汽車品牌</th>
          <th>車牌號碼</th>
          <th>預約姓名</th>
          <th>聯絡電話</th>
          <th>LINE ID</th>
          <th>預約日期</th>
          <th>預約時段</th>
          <th>進廠服務項目</th>
          <th>備註</th>
        </thead>
        <tbody>
          <tr class="orders" v-for="(item, index) in formlist" :key="index">
            <td>{{index + 1 }}</td>
            <td>{{item.brand}}</td>
            <td>{{item.number}}</td>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.line}}</td>
            <td>{{item.date}}</td>
            <td>{{item.time}}</td>
            <td>{{item.service}}</td>
            <td>{{item.content}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formlist: [
        {
          brand: 'a',
          number: 'a',
          name: 'a',
          phone: 'a',
          line: 'a',
          date: 'a',
          time: 'a',
          service: 'a',
          content: 'a',
        },
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
    };
  },
  created() {
    // this.getform();
  },
  methods: {
    getform() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}api/getform/`;
      const vm = this;
      this.$http
        .get(api, {
          params: {
            // 目前沒有
          },
        })
        .then((response) => {
          this.isLoading = false;
          console.log('formList:', response.data);
          vm.formlist = response.data.data;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log('失敗');
          }
        });
    },
  },

  // brand: vm.brand,
  // number: vm.number,
  // name: vm.name,
  // phone: vm.phone,
  // line: vm.line,
  // date: vm.date,
  // time: vm.time,
  // service: vm.service,
  // content: vm.content,
  // user_token: vm.token,
  // pocket_uid: vm.seletedID,
};
</script>

<style lang="scss" scoped>
// .table td{
//   vertical-align: middle;
// }
</style>

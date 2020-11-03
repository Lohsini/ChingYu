<template>
  <div class="form">

    <h1 class="mb-5">表單填寫</h1>

    <div class="group">
      <label for="brand">汽車品牌：</label>
      <input type="text" id="brand" placeholder="請填寫您的汽車品牌" v-model="form.brand"/>
    </div>

    <div class="group">
      <label for="number">車牌號碼：</label>
      <input type="text" id="number" placeholder="請填寫您的車牌號碼" v-model="form.number" />
    </div>

    <div class="group">
      <label for="name">預約姓名：</label>
      <input type="text" id="name" placeholder="請填寫您的姓名" v-model="form.name" />
    </div>

    <div class="group">
      <label for="phone">聯絡電話：</label>
      <input type="tel" id="phone" placeholder="請填寫您的聯絡電話" v-model="form.phone" />
    </div>

    <div class="group">
      <label for="line">LINE ID：</label>
      <input type="text" id="line" placeholder="請填寫您的Line ID" v-model="form.line" />
    </div>

    <div class="group">
      <label for="date">預約日期：</label>
      <input type="date" id="date" v-model="form.date" />
    </div>

    <div class="group">
      <label for="time">預約時段：</label>
      <select name="time" id="time" v-model="form.time">
        <option value="08:30-09:00">08:30 ~ 09:00</option>
        <option value="09:00-09:30">09:00 ~ 09:30</option>
        <option value="09:30-10:00">09:30 ~ 10:00</option>
        <option value="10:00-10:30">10:00 ~ 10:30</option>
        <option value="10:30-11:00">10:30 ~ 11:00</option>
        <option value="11:00-11:30">11:00 ~ 11:30</option>
        <option value="11:30-12:00">11:30 ~ 12:00</option>
        <option value="13:00-13:30">13:00 ~ 13:30</option>
        <option value="13:30-14:00">13:30 ~ 14:00</option>
        <option value="14:00-14:30">14:00 ~ 14:30</option>
        <option value="14:30-15:00">14:30 ~ 15:00</option>
        <option value="15:00-15:30">15:00 ~ 15:30</option>
        <option value="15:30-16:00">15:30 ~ 16:00</option>
        <option value="16:00-16:30">16:00 ~ 16:30</option>
        <option value="16:30-17:00">16:30 ~ 17:00</option>
        <option value="17:00-17:30">17:00 ~ 17:30</option>
        <option value="17:30-18:00">17:30 ~ 18:00</option>
        <option value="18:00-18:30">18:00 ~ 18:30</option>
      </select>
    </div>

    <div class="group">
      <p>進廠服務項目：</p>
      <div class="radio">
        <input type="radio" id="maintenance" name="service" value="maintenance"
        v-model="form.service"/>
        <label for="maintenance">保養</label>

        <input type="radio" id="repair" name="service" value="repair"
        v-model="form.service"/>
        <label for="repair">維修</label>
      </div>
    </div>

    <div class="group">
      <label for="content">備註：</label>
      <textarea id="content" placeholder="若您選擇維修，請簡述需維修的內容" v-model="form.content"></textarea>
    </div>

    <button class="btn btn-warning" @click="submit">確定送出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        brand: '',
        number: '',
        name: '',
        phone: '',
        line: '',
        date: this.changedateFormat(
          Math.floor(new Date(Math.floor(Date.now())).getTime() / 1000 + 84000 * 2),
        ),
        time: '09:30-10:00',
        service: 'maintenance',
        content: '',
      },
    };
  },
  computed: {
  },
  methods: {
    submit() {
      const api = `${process.env.VUE_APP_APIPATH}api/postform`;
      const formdata = new FormData();
      formdata.append('brand', this.form.brand);
      formdata.append('number', this.form.number);
      formdata.append('name', this.form.name);
      formdata.append('phone', this.form.phone);
      formdata.append('line', this.form.line);
      formdata.append('date', this.form.date);
      formdata.append('time', this.form.time);
      if (this.form.service === 'maintenance') {
        this.form.service = '保養';
      }
      if (this.form.service === 'repair') {
        this.form.service = '維修';
      }
      formdata.append('service', this.form.service);
      formdata.append('content', this.form.content);
      this.axios.post(api, formdata)
        .then((response) => {
          console.log('提交狀態:', response.data);
          window.alert('已送出，請留意line訊息，謝謝');
          // 清空復原
          this.form.brand = '';
          this.form.number = '';
          this.form.name = '';
          this.form.phone = '';
          this.form.line = '';
          this.form.date = this.changedateFormat(
            Math.floor(new Date(Math.floor(Date.now())).getTime() / 1000 + 84000 * 2),
          );
          this.form.time = '08:30-09:00';
          this.form.service = 'maintenance';
          this.form.content = '';
        })
        .catch((err) => {
          if (err.response.status === 401) {
            window.alert('抱歉，失敗了，請再一次');
          }
        });
    },
    changedateFormat(timestamp) {
      const date = new Date(timestamp * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      if (month < 10) {
        const addzeromonth = `0${month}`;
        if (day < 10) {
          const addzeroday = `0${day}`;
          const currentDateTime = `${String(year)
          }-${
            String(addzeromonth)
          }-${
            String(addzeroday)}`;
          return currentDateTime;
        }
        const currentDateTime = `${String(year)}-${String(addzeromonth)}-${String(day)}`;
        return currentDateTime;
      }
      if (day < 10) {
        const addzeroday = `0${day}`;
        if (month < 10) {
          const addzeromonth = `0${month}`;
          const currentDateTime = `${String(year)
          }-${
            String(addzeromonth)
          }-${
            String(addzeroday)}`;
          return currentDateTime;
        }
        const currentDateTime = `${String(year)}-${String(month)}-${String(addzeroday)}`;
        return currentDateTime;
      }
      const currentDateTime = `${String(year)}-${String(month)}-${String(day)}`;
      return currentDateTime;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 50px 15px;
  max-width: 500px;
  margin: auto;
  .group {
    width: 100%;
    min-height: 80px;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    label,
    p {
      margin-bottom: 10px;
      display: flex;
      // font-size: 1.1rem;
      font-weight: 700;
    }
    input {
      width: 100%;
      border: none;
      background-color: transparent;
      outline: none;
      margin: 0;
      padding: 0 10px;
    }
    .radio {
      text-align: left;
      label {
        float: left;
        margin-left: 10px;
        padding: 0 10px;
        border: 1px solid transparent;
        font-weight: 400;
        cursor: pointer;
      }
      input[type="radio"] {
        opacity: 0; //設置透明度，隱藏原有input樣式
        display: none;
      }
      input:checked + label {
        border: 1px solid #aaa;
      }
    }
    select {
      width: 100%;
      border: none;
      background-color: transparent;
      outline: none;
      padding: 0 10px;
    }
    textarea {
      width: 100%;
      min-height: 50px;
      border: none;
      background-color: transparent;
      outline: none;
      padding: 0 10px;
    }
  }
  button {
    margin-top: 20px;
  }
}
</style>

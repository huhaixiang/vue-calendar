<template>
  <div class="hello">
    <h2>日历</h2>
    <div class="demo-calendar">
      <button @click="nextMouth(-1)">上月</button>
      <span>{{date.nowYear}} -- {{date.nowMonth}}</span>
      <button @click="nextMouth(1)">下月</button>
    </div>
    <calendar :date="calendarDate"></calendar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      calendarDate: new Date(),
      date: {
        nowYear: new Date().getFullYear(),
        nowMonth: new Date().getMonth() + 1,
      }
    }
  },
  created() {

  },
  methods: {
    nextMouth (type) {
      let mouth = this.date.nowMonth + type;
      let year;
      if (mouth <= 0) {
        this.date.nowMonth = 12;
        this.date.nowYear = this.date.nowYear - 1;
      } else if (mouth >= 13) {
        this.date.nowMonth = 1;
        this.date.nowYear = this.date.nowYear + 1;
      } else {
        this.date.nowMonth = mouth;
      }
      this.calendarDate = new Date(this.date.nowYear, this.date.nowMonth - 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-calendar{
    margin-bottom: 15px;
  }
  .demo-calendar span{
    margin: 0 15px;
  }
  .demo-calendar button{
    width: 80px;
    height: 35px;
    line-height: 35px;
    background-color: #fe4d5c;
    border: none;
    color: #fff;
    border-radius: 5px;
    outline: none;
  }
  .demo-calendar button:hover{
    cursor: pointer;
  }
</style>

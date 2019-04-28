<template>
    <div class="xy-calendar">
      {{nowYear}} - {{nowMonth}}
      <header class="week-box">
        <div v-for="week in weeks">{{week}}</div>
      </header>
      <div v-for="i in calendarData" class="xy-calendar-module">
        <div class="box" v-for="j in i" :class="{'current-day': j.name == '今天'}">
          {{j.name}}
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "calendar",
    props: {
		  date: {
		    type: Date,
        default: new Date()
      }
    },
    data() {
		  return {
        calendarData: [],
        nowYear: new Date().getFullYear(),
        nowMonth: new Date().getMonth() + 1,
        nowDay: new Date().getDate(),
        weeks: ['一', '二', '三', '四', '五', '六', '日']
      }
    },
    mounted () {
		  if (!!this.$props.date) {
		    this.setDate();
      }
		  this.initData(this.nowYear, this.nowMonth);
    },
    watch: {
      date (val) {
        this.setDate();
        this.initData(this.nowYear, this.nowMonth);
      }
    },
    methods: {
		  setDate () {
        this.nowYear = new Date(this.$props.date).getFullYear()
        this.nowMonth = new Date(this.$props.date).getMonth() + 1
        this.nowDay = new Date(this.$props.date).getDate()
      },
		  initData (year,month) {
		    // 当前月份天数
		    const days = this.days(year,month);
        let arr = Array.from({length: days}, (x, index )=>index + 1).map(item => {
          return {
            day: item,
            name: this.getDayName(year, month, item),
            week: this.getDateWeek(year, month, item)
          }
        });
        let beforeDayNum = arr[0].week - 1;
        let afterDayNum = 7 - arr[days-1].week;
        var beforeDayArr = this.completionDays(beforeDayNum);
        var afterDayArr = this.completionDays(afterDayNum);
        var allArr = [...beforeDayArr, ...arr, ...afterDayArr];
        this.calendarData = this.splitArray(allArr);
        console.log(this.calendarData)
      },
      splitArray (arr) {
        var result = [];
        for(var i=0; i < arr.length; i+=7){
          result.push(arr.slice(i,i+7));
        }
        return result
      },
      completionDays (num) {
        return Array.from({length: num}, (x, index )=>index + 1).map(item => {
          return {
            day: null,
            week: null
          }
        })
      },
		  // 一个月多少天
      days(year,month){
        var dayCount;
        let now = new Date(year,month, 0);
        dayCount = now.getDate();
        return dayCount;
      },
      // 某一天星期几
      getDateWeek (year,month,day) {
        var  tmpdate  =  new Date(year,month-1,day).getDay();
        return tmpdate === 0 ? 7 : tmpdate;
      },
      getToday () {
        let nowYear =  new Date().getFullYear();
        let nowMonth = new Date().getMonth() + 1;
        let nowDay = new Date().getDate();
        return {
          nowYear,
          nowMonth,
          nowDay
        }
      },
      getDayName (year, month, day) {
		    if (year == this.getToday().nowYear && month == this.getToday().nowMonth && day == this.getToday().nowDay) {
		      return '今天'
        }
        return `${day}`
      }
    }
	}
</script>

<style scoped>
  .xy-calendar{
    margin: 0 auto;
    width: 335px;
    padding: 0 15px;
    background: #FFFFFF;
    box-shadow: 0 3px 8px 0 rgba(139,171,243,0.30);
    border-radius: 8px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #555555;
    text-align: center;
    box-sizing: border-box;
  }
  .xy-calendar .week-box{
    display: flex;
    height: 55px;
    line-height: 55px;
  }
  .xy-calendar .week-box div{
    flex: 1;
  }
  .xy-calendar-module{
    position: relative;
    display: flex;
    /*border-bottom: 1px solid #d9d9d9;*/
    height: 55px;
    line-height: 55px;
  }
  .xy-calendar-module:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(180deg,#f0f0f0,#f0f0f0 50%,transparent 0);
  }
  .xy-calendar-module:last-child{
    border-bottom: none;
  }
  .small-calendar .xy-calendar-module{
    height: 49px;
    line-height: 49px;
  }
  .box{
    flex: 1;
    position: relative;
  }
  .current-day{
    font-family: PingFang-SC-Medium;
    color: #5194FF;
  }
</style>

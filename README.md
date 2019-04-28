# vue components

> VUE calendar

## Build Setup

```
usage：
1、在main.js内

  import Calendar from './components/calendar'
  
  Vue.component(Calendar.name, Calendar)
  
2、
  <calendar :date="calendarDate"></calendar>
  
  props: {
    date: new Date() // 要显示的月份日期，不传默认为当前月
  
  }  
```

DEMO:
  ![avatar](/src/assets/demo1.png)

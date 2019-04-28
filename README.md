# vue components

> VUE calendar ---- 日历组件
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

>DEMO1:
---
  ![avatar](/src/assets/demo1.png)
  
  
> VUE Ring-Progress ---- 圆环进度条 组件
  
  
  ```
  usage：
  1、在main.js内
  
    import RingProgress from './components/Ring-Progress.vue'
    
    Vue.component(RingProgress.name, RingProgress)
    
  2、
    <Ring-Progress :widthRem="4"
                      :fontSize0Rem="0.48"
                      :fontSize1Rem="0.32"
                      :radius="4"
                      :progressData = "{progressNum: 88.88, canvasId: 'top1'}" />
    
    props: {
      widthRem:  // canvas宽度
      fontSize0Rem： // 圆环内字体大小
      fontSize1Rem： // 圆环内字体大小
      radius： // 圆环弧度
      progressData： {
        progressNum： '当前进度'，
        canvasId： '' // canvasID
      }
    }  
  ```
  
  _**注：HTML根元素未设置font-size时，默认为37.5px**_
>DEMO2:
---
  ![avatar](/src/assets/demo2.png)

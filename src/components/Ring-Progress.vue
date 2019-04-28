<template>
    <div>
        <canvas :id="id" :width="width" :height="height" :style="{width: width+'px', height: height+'px'}"></canvas>
    </div>
</template>

<script>
  export default {
    name: 'Ring-Progress',
    props: {
      'widthRem': {
        default: 0,
        type: Number
      },
      radius: 0, // 圆环宽度
      fontSize0Rem: 0,
      fontSize1Rem: 0,
      progressData: {
        progressNum: {
          default: 0,
          type: Number
        },
        canvasId: 'xysl'
      }
    },
    data () {
      return {
        width: 0,
        height: 0,
        fontSize0: 0,
        fontSize1: 0,
        canvasRadius: 0, // 圆环半径
        coordinatesX: 0, // 圆心 X
        coordinatesY: 0, // 圆心 Y
        progress: this.progressData.progressNum || 0,
        id: this.progressData.canvasId || 'xysl'
      }
    },
    watch: {
      progressData (val) {
        if (typeof val.progressNum == 'undefined' || val.progressNum === this.progress) {
          return
        }
        this.id = val.canvasId
        this.progress = val.progressNum
        this.$nextTick(() => {
          this.init()
        })
      }
    },
    mounted () {
      var htmFs = parseFloat(document.getElementsByTagName('html')[0].style.fontSize) || 37.5
      this.fontSize0 = htmFs * this.fontSize0Rem + 'px'
      this.fontSize1 = htmFs * this.fontSize1Rem + 'px'
      // myCanvas.style.width = myCanvas.width + 'px';
      // myCanvas.style.height = myCanvas.height + 'px';
      //
      // myCanvas.width = myCanvas.width * ratio;
      // myCanvas.height = myCanvas.height * ratio;
      this.width = htmFs * this.widthRem
      this.height = (1 + Math.sin(45 * 2 * Math.PI / 360)) * this.width / 2
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      getPixelRatio (context) {
        var backingStore = context.backingStorePixelRatio ||
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1
        return (window.devicePixelRatio || 1) / backingStore
      },
      init () {
        this.ctx && this.ctx.clearRect(0, 0, this.width, this.height)
        var c = document.getElementById(this.id)
        this.ctx = c.getContext('2d')
        var ratio = this.getPixelRatio(this.ctx)
        c.width = this.width * ratio
        c.height = this.height * ratio
        this.ctx.scale(ratio, ratio)
        this.canvasRadius = this.width / 2 - this.$props.radius * 2
        this.coordinatesX = this.width / 2
        this.coordinatesY = this.width / 2 - this.$props.radius
        this.draw()
        this.drawRing()
      },
      getTextWidth (str, fontSize) {
        var width = 0
        var html = document.createElement('span')
        html.style.fontSize = fontSize
        html.style.fontFamily = 'DIN-Medium'
        html.innerText = str
        html.className = 'getTextWidth' + this.id
        document.querySelector('body').appendChild(html)
        width = document.querySelector('.getTextWidth' + this.id).offsetWidth
        document.querySelector('.getTextWidth' + this.id).remove()
        return width
      },
      draw () {
        // 画底圆
        this.ctx.beginPath()
        this.ctx.arc(this.coordinatesX, this.coordinatesY, this.canvasRadius, 0.75 * Math.PI, 2.25 * Math.PI)
        // this.ctx.arc(100, 70, 50, 0.75 * Math.PI, 2.25 * Math.PI)
        this.ctx.strokeStyle = '#ffd4d4'
        this.ctx.lineWidth = this.$props.radius
        this.ctx.lineCap = 'round'
        this.ctx.stroke()
        this.ctx.fillStyle = '#ff3939'
        this.ctx.font = `${this.fontSize0} DIN-Medium`
        var width0 = this.getTextWidth(this.progress + '', this.fontSize0)
        var width1 = this.getTextWidth('%', this.fontSize1)
        this.ctx.fillText(this.progress, this.coordinatesX - (width0 + width1) / 2, this.height / 2 + 7)
        this.ctx.font = `${this.fontSize1} DIN-Medium`
        this.ctx.fillText('%', this.coordinatesX + (width0 + width1) / 2 - width1, this.height / 2 + 7)
      },
      drawRing () {
        let duration = 180
        let startAngle = 0.75 * Math.PI
        let endAngle = startAngle
        var time = (this.progress / 100) * duration
        var ang0 = (2.25 - 0.75) * Math.PI * (this.progress / 100) / time // 每毫秒旋转的角度
        var ang1 = (2.25 - 0.75) * Math.PI * (this.progress / 100) + 0.75 * Math.PI // 最终旋转的角度
        this.ctx.strokeStyle = '#FF3939'
        let timer = setInterval(() => {
          if (startAngle >= ang1) {
            clearInterval(timer)
            return
          }
          this.ctx.beginPath()
          this.ctx.arc(this.coordinatesX, this.coordinatesY, this.canvasRadius, startAngle, endAngle)
          this.ctx.lineWidth = this.$props.radius
          this.ctx.lineCap = 'round'
          this.ctx.stroke()
          this.ctx.closePath()
          startAngle += ang0
          endAngle = startAngle + ang0
        }, 1)
      }
    }
  }
</script>

<style scoped>

</style>

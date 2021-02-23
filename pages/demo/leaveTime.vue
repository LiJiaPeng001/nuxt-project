<template>
  <div class="leave-time center-flex">
    <div class="title">距离下班倒计时</div>
    <div class="date middle-flex">
      <div class="hour text">{{ addZero(date.hour) }}</div>
      <div class="icon">:</div>
      <div class="minutins text">{{ addZero(date.minutins) }}</div>
      <div class="icon">:</div>
      <div class="second text">{{ addZero(date.second) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let { time = '19' } = this.$route.query;
    if (isNaN(Number(time))) time = 19;
    return {
      time,
      date: {
        hour: 0,
        minutins: 0,
        second: 0,
      },
    };
  },
  mounted() {
    this.init();
    this.timer = setInterval(() => {
      this.init();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    init() {
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      let month = nowDate.getMonth() + 1;
      let day = nowDate.getDate();
      let endTime = new Date(`${year}-${month}-${day} ${this.time}:00:00`).getTime();
      let nowTime = nowDate.getTime();
      let leaveTime = (endTime - nowTime) / 1000;
      if (leaveTime > 0) {
        this.date.hour = parseInt((leaveTime / 60 / 60) % 24);
        this.date.minutins = parseInt((leaveTime / 60) % 60);
        this.date.second = parseInt(leaveTime % 60);
      }
    },
    addZero(num) {
      return num < 10 ? '0' + num : num;
    },
  },
};
</script>

<style lang='less'>
.leave-time {
  height: calc(100vh - 400px);
  flex-direction: column;
  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .date {
    font-size: 32px;
    font-weight: 500;
    font-family: 'Arial Black', 'Arial-BoldMT', 'Arial Bold', Arial, Helvetica, sans-serif;
    .text {
      width: 42px;
    }
  }
  .icon {
    margin: 0 20px;
  }
}
</style>
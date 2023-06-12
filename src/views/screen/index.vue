<template>
  <div class="content">
    <div class="content-priview">
      <img :src="currentUrl" alt="" />
    </div>
    <div class="content-swiper">
      <div class="content-swiper__left" @click="handlePrev">&lt;</div>
      <div class="content-swiper__center" ref="viewport">
        <div
          class="content-swiper__img"
          @click="handleClick(item)"
          :class="{ active: item.active }"
          v-for="item in swiperList"
          :key="item.id"
        >
          <img :src="item.url" alt="" />
        </div>
      </div>
      <div class="content-swiper__right" @click="handleNext">></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      swiperList: [
        {
          url: 'https://t7.baidu.com/it/u=2511982910,2454873241&fm=193&f=GIF',
          active: false,
          id: 1,
        },
        {
          url: 'https://t7.baidu.com/it/u=3569419905,626536365&fm=193&f=GIF',
          active: false,
          id: 2,
        },
        {
          url: 'https://t7.baidu.com/it/u=3779234486,1094031034&fm=193&f=GIF',
          active: false,
          id: 3,
        },
        {
          url: 'https://t7.baidu.com/it/u=2763645735,2016465681&fm=193&f=GIF',
          active: false,
          id: 4,
        },
        {
          url: 'https://t7.baidu.com/it/u=4069854689,43753836&fm=193&f=GIF',
          active: false,
          id: 5,
        },
        {
          url: 'https://t7.baidu.com/it/u=2141219545,3103086273&fm=193&f=GIF',
          active: false,
          id: 6,
        },
        {
          url: 'https://t7.baidu.com/it/u=3332251293,4211134448&fm=193&f=GIF',
          active: false,
          id: 7,
        },
        {
          url: 'https://t7.baidu.com/it/u=1035726655,1110652804&fm=193&f=GIF',
          active: false,
          id: 8,
        },
        {
          url: 'https://t7.baidu.com/it/u=762481686,2214126081&fm=193&f=GIF',
          active: false,
          id: 9,
        },
      ],
      currentUrl: '',
    }
  },

  mounted() {
    this.currentUrl = this.swiperList[0].url
  },
  methods: {
    handleClick(e) {
      this.currentUrl = e.url
      this.swiperList.forEach((item) => {
        item.active = item.id === e.id
      })
    },
    // 上一页
    handlePrev() {
      const viewport = this.$refs.viewport
      if (viewport.scrollLeft > 0) {
        viewport.scrollLeft -= viewport.clientWidth
      }
    },
    // 下一页
    handleNext() {
      const viewport = this.$refs.viewport
      if (viewport.scrollLeft < viewport.scrollWidth - viewport.clientWidth) {
        viewport.scrollLeft += viewport.clientWidth
      }
    },
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  user-select: none;
}

.content-priview {
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
}

.content-swiper {
  height: 200px;
  display: flex;
  padding: 0px 20px;
  box-sizing: border-box;
}
.content-swiper__left {
  width: 20px;
  height: 100%;
  background: black;
  line-height: 200px;
  color: #fff;
  text-align: center;
  margin-right: 10px;
}
.content-swiper__right {
  width: 20px;
  height: 100%;
  line-height: 200px;
  background: black;
  color: #fff;
  text-align: center;
}

.content-swiper__center {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.content-swiper__img {
  margin-right: 10px;
  border-radius: 8px;
  flex-shrink: 0;
  width: calc(100% / 4 - 10px);
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.active {
  border: 1px solid blue;
  box-sizing: border-box;
}
</style>

<template>
  <view class="content">
    <scroll-view class="scroll-view" scroll-y="true" :scroll-into-view="scrollInto"
                 v-show="canvas">
      <view class="me-content">
        <view class="me-box" v-for="(item,index) in data" :key="index" :id="'id-m-'+index">
          <view class="me-font" v-show="item.me.length>0">
            <view class="text-m">
              {{ item.me }}
            </view>
          </view>
          <view :id="'id-g-'+index">
            <view class="chat-gpt">
              <view class="chat-gpt-logo">
                <image class="chat-gpt-height" src="/static/logo.jpg"/>
              </view>
            </view>
            <view class="text-g" v-show="item.gpt.length>0">
              <mp-html :copy-link="true" :markdown="true" :lazy-load="true" :selectable="true" :tagStyle="tagStyle"
                       :content="item.gpt"/>
            </view>
            <view class="text-g" v-show="item.gpt.length==0">
              <view class="loading">
                <view class="dot1"></view>
                <view class="dot2"></view>
                <view class="dot3"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="canvas-box" v-show="!canvas">
      <image class="canvas-logo" src="/static/logo.jpg"/>
      <view class="canvas-title">ChatGPT</view>
      <view class="canvas-msg">示例</view>
      <view class="text-g canvas-text" @click="writeInputText('用简单的术语解释量子计算')">
        "用简单的术语解释量子计算"
      </view>
      <view class="text-g canvas-text" @click="writeInputText('SpringBoot实现Redis分布式锁示例代码')">
        "SpringBoot实现Redis分布式锁示例代码"
      </view>
      <view class="text-g canvas-text">
        键入 cache 可保存历史记录 键入 remove 清理所有数据
      </view>
    </view>
    <view class="taskbar">
      <view style="display: flex">
        <view
            class="input">
          <input placeholder="问你想问的..." style="color: white" v-model="input"/>
        </view>
        <view class="input-img" @click="sendMessage">
          <image class="input-img-size" src="/static/send.png"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mpHtml from '@/components/mp-html/mp-html.vue'
import {
  getDataGPT, setDataGPT, getEnable, setEnable, removeEnable, removeDataGPT
} from "@/utils/data";

export default {
  components: {
    mpHtml
  },
  data() {
    return {
      canvas: false,
      input: "",
      scrollInto: "",
      data: [],
      tagStyle: {
        p: 'font-size: 26rpx;padding-top: 8px;padding-bottom: 8px;margin: 0;line-height: 26px;color: white',
        h1: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 34rpx;color: white',
        h2: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 32rpx;color: white',
        h3: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 30rpx;color: white',
        h4: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 28rpx;color: white',
        h5: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white',
        h6: 'margin-top: 30px;margin-bottom: 15px;font-weight: bold;font-size: 26rpx;color: white',
        ol: 'margin-top: 8px;margin-bottom: 8px;padding-left: 25px;color: black;color: white',
        ul: 'margin-top: 8px;margin-bottom: 8px;padding-left: 25px;color: black;color: white',
        li: 'margin-top: 5px;margin - bottom: 5 px;line - height: 26 px;color: white',
      },
    }
  },
  onLoad() {
    if (getEnable().length > 0) {
      if (getDataGPT().length > 0) {
        this.data = getDataGPT()
        this.canvas = true
      }
    }
  },
  methods: {
    sendMessage() {
      this.canvas = true
      if (this.input.length <= 0) {
        this.data.push({
          me: "",
          gpt: "你好 你需要什么帮助?",
        })
        return;
      }
      if (this.input.trim() === "cache") {
        this.cacheData()
        return;
      }
      if (this.input.trim() === "remove") {
        this.removeCache()
        return;
      }
      const text = this.input
      this.data.push({
        me: text,
        gpt: "",
      })
      this.input = ''
      const size = this.data.length - 1
      this.scrollInto = 'id-m-' + size;
      this.$store.dispatch('gpt/sendMessage', {"text": text}).then(res => {
        this.data[size].gpt = res.text
        this.persistenceData()
        this.scrollInto = 'id-g-' + size;
      })
    },
    writeInputText(str) {
      this.input = str
    },
    cacheData() {
      setEnable('true')
      this.input = ''
      if (this.data.length === 0) {
        this.canvas = false
      } else {
        this.persistenceData()
      }
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: `回显历史数据已开启`
      });
    },
    removeCache() {
      this.canvas = false
      this.data = []
      this.input = ''
      removeEnable()
      removeDataGPT()
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: `已关闭数据持久化 数据缓存已清除`
      });
    },
    persistenceData() {
      if (getEnable().length > 0) {
        setDataGPT(this.data)
      }
    },
  }
}
</script>

<style lang="scss">

.loading {
  display: flex;
  padding-top: 25rpx;
  padding-bottom: 25rpx
}

.canvas-text {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  margin-bottom: 15rpx;
}

.taskbar {
  position: fixed;
  bottom: 0;
  height: 200rpx;
  width: 100%;
  background-color: rgb(16, 16, 16);

}

.canvas-box {
  color: white;
  padding-top: 50rpx;
  text-align: center
}

.canvas-logo {
  height: 150rpx;
  width: 150rpx;
}

.canvas-title {
  font-weight: 600;
  font-size: 55rpx;
  padding-bottom: 80rpx
}

.canvas-msg {
  padding-bottom: 15rpx
}

.scroll-view {
  height: 1200rpx;
}

.me-font {
  text-align: right;
  color: white;
  margin-top: 30rpx
}

.me-box {
  padding: 20rpx;
}

.me-content {
  margin-bottom: 50rpx
}

.input {

  background-color: #171717;
  border-radius: 10rpx;
  width: 550rpx;
  margin-left: 40rpx;
  margin-top: 40rpx;
  padding: 20rpx
}

.input-img {
  padding-top: 55rpx;
  padding-left: 30rpx
}

.input-img-size {
  height: 50rpx;
  width: 50rpx
}

.text-m {
  word-break: break-all;
  background-color: rgb(53, 116, 240);
  border-radius: 25rpx;
  display: inline-block;
  padding-left: 35rpx;
  padding-right: 35rpx;
  padding: 20rpx;
  margin-top: 10rpx;
  color: white;
  font-size: 25rpx

}

.chat-gpt {
  display: flex;
  justify-items: center;
  align-items: center;
}

.text-g {
  max-width: 645rpx;
  word-break: break-all;
  background-color: #2d2d2d;
  border-radius: 25rpx;
  display: inline-block;
  padding-left: 35rpx;
  padding-right: 35rpx;

  margin-top: 10rpx;
  color: white;
  font-size: 25rpx
}

.dot1, .dot2, .dot3 {
  background: #fff;
  width: 20rpx;
  height: 20rpx;
  border-color: black;
  border-radius: 50%;
}

.dot1 {
  animation: jump 1.3s -0.32s linear infinite;
}

.dot2 {
  animation: jump 1.3s -0.16s linear infinite;
}

.dot3 {
  animation: jump 1.3s linear infinite;
}

@keyframes jump {
  0%, 80%, 100% {
    transform: scale(0);
    background-color: #F9F9F9;
  }
  40% {
    transform: scale(1.0);
    background-color: #a2a2a2;
  }
}

.chat-gpt-logo {
  border-radius: 100%;
  overflow: hidden;
  width: 70rpx;
  height: 70rpx;
}

.chat-gpt-height {
  width: 70rpx;
  height: 70rpx;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

page {
  background-color: #000000;
}
</style>

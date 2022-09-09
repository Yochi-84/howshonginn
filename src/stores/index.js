import { defineStore } from 'pinia'
// useStore可以是任何類似useUser、useCart的東西
// 第一個參數是應用程式中 Store 的唯一id
export const useStore = defineStore('main', {
  state:() => {
    return {
      userInfo: {status: false},
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    //doubleCount(state){
    //  console.log(this,'想要在getter中獲取該store的其他內容則不能用箭頭函數，')
    //  return state.counter * 2
    //},
  },
  actions: {
    increment(num,test1,test2) {
      console.log(num,test1,test2)
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  }
})

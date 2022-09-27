# How享營
![](https://i.imgur.com/R0nwMxJ.png)

### Demo
[https://yochi-84.github.io/howshonginn/](https://yochi-84.github.io/howshonginn/)<br>

體驗帳號: root@example.com<br>
密碼: 12345678<br>
or<br>
註冊帳號

### 已完成功能
不須登入
* 註冊會員
* 會員登入
* 保持登入
* 關鍵字搜尋
* 條件篩選(一般、嚴格)
* 條件排序

須登入
* 會員登出
* 分享營地
* 編輯營地
* 收藏營地
* 會員資料修改
* 發表評論
* 回覆評論
* 贊同/不贊同評論

### 使用技術
* vue-cli
* tailwind
* JSON Server
* puppeteer(資料收集)
* imgur api

### 使用套件
* [Vue3-carousel](https://ismail9k.github.io/vue3-carousel/)
* [vueper-slides](https://antoniandre.github.io/vueper-slides/)
* [content-loader](https://github.com/egoist/vue-content-loader?ref=madewithvuejs.com)
* [mosha-vue-toastify](https://github.com/szboynono/mosha-vue-toastify)

### 資料來源
* [露營樂](https://www.easycamp.com.tw/)

### 圖片來源
* [Unsplash](https://unsplash.com/)

### 什麼是真的?
* 除了圖片和評論是假的，其他資料都是真的(後面幾筆手動新增的連圖片都是真的)

### 已知問題
1. list 頁面卡片的 transition 在資料內容變動後如果依舊存在時不會觸發
2. 路由切換的過渡動畫失效
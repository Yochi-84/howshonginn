<template>
  <main>
    <section class="banner">
      <div class="banner-block">
        <h2 class="banner-slogan">與你分享的快樂，勝過獨自擁有</h2>
        <SearchBox></SearchBox>
      </div>
    </section>
    <section class="famous block-py container">
      <h2 class="subtitle">最近熱門</h2>
      <ul class="famous-list">
        <li v-for="info of famous" :key="info.name" class="famous-item">
          <FamousCard :cardInfo="info" />
        </li>
      </ul>
    </section>
    <section class="feature">
      <div class="feature-bg"></div>
      <div class="container-lg">
        <ul class="feature-block">
          <li>
            <div class="feature-image">
              <img
                src="https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div class="feature-text">
              <h3>住過露過，一定不能沒分享過</h3>
              <router-link to="/share" class="btn btn-primary"
                >馬上分享</router-link
              >
            </div>
          </li>
          <li>
            <div class="feature-image">
              <img
                src="https://images.unsplash.com/photo-1524007769096-2dad448565c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                alt=""
              />
            </div>
            <div class="feature-text">
              <h3>每天的驚喜從新的發現開始</h3>
              <router-link to="/list" class="btn btn-primary"
                >發現更多</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="share block-py">
      <div class="container-md">
        <h2 class="subtitle">與你分享</h2>
        <ShareCard :cardInfo="share" />
      </div>
    </section>
  </main>
</template>

<script>
import SearchBox from "@/components/SearchBoxComponent";
import FamousCard from "@/components/FamousCardComponent";
import ShareCard from "@/components/ShareCardComponent";

export default {
  name: "HomeView",
  components: {
    SearchBox,
    FamousCard,
    ShareCard,
  },
  setup() {
    const famous = [
      {
        name: "懶懶露休閒露營區",
        county: "南投縣埔里鎮",
        image:
          "https://images.unsplash.com/photo-1580842693665-cdae6f59814f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        name: "海天一色露營區",
        county: "花蓮縣秀林鄉",
        image:
          "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "熊與龜露營區",
        county: "高雄市六龜區",
        image:
          "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
      },
      {
        name: "微笑草景觀露營區",
        county: "桃園市復興區",
        image:
          "https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ];

    const share = [
      {
        name: "三岔口露營區",
        county: "新竹縣尖石鄉",
        image:
          "https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80",
      },
      {
        name: "憂鬱森林露營區",
        county: "南投縣仁愛鄉",
        image:
          "https://images.unsplash.com/photo-1542332213-1d277bf3d6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "天湖漫遊露營區",
        county: "新竹縣五峰鄉",
        image:
          "https://images.unsplash.com/photo-1580842693665-cdae6f59814f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80 ",
      },
      {
        name: "晴天娃娃露營區",
        county: "苗栗縣泰安鄉",
        image:
          "https://images.unsplash.com/photo-1599758376048-8c340c1489cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      {
        name: "地平線景觀休閒露營區",
        county: "宜蘭縣大同鄉",
        image:
          "https://images.unsplash.com/photo-1506404214625-2c59d5e6e912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "山林忘歸露營區",
        county: "台中市和平區",
        image:
          "https://images.unsplash.com/photo-1513104399965-f5160d963d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ];

    return {
      famous,
      share,
    };
  },
};
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  background-image: url("https://images.unsplash.com/photo-1504632348771-974e356b80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @include md {
    height: calc(100vh - 80px);
  }

  &-block {
    width: 300px;

    @include md {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 450px;
    }

    @include lg {
      width: 680px;
    }
  }

  &-slogan {
    display: none;

    @include md {
      display: block;
      overflow: hidden;
      margin-bottom: 1.5rem;
      width: 14em;
      font-size: 32px;
      font-weight: 700;
      white-space: nowrap;
      color: $white;
      border-right: 2px solid $white;

      /* prettier-ignore */
      animation:
        typing-effect 6s steps(14) infinite,
        blink 0.5s step-end infinite alternate;
      align-self: flex-start;
    }

    @include lg {
      font-size: 48px;
    }
  }

  .search-bar {
    @include md {
      width: 80%;
    }
  }
}

@keyframes typing-effect {
  0% {
    width: 0;
  }

  50% {
    width: 14em;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.block-py {
  padding: 1.5rem 0;

  @include md {
    padding: 4rem 0;
  }
}

.subtitle {
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: $primary;

  @include md {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 36px;

    &::before,
    &::after {
      content: "";
      border-top: 8px double $primary;
      width: 1rem;
      flex-grow: 1;
    }

    &::before {
      margin-right: 1rem;
    }

    &::after {
      margin-left: 1rem;
    }
  }
}

.famous {
  &-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;

    @include md {
      margin-right: -12px;
      margin-left: -12px;
    }
  }

  &-item {
    padding-right: 12px;
    padding-left: 12px;
    width: 100%;

    @include md {
      width: 50%;
    }

    @include lg {
      width: 25%;
    }
  }
}

.feature {
  position: relative;
  padding: 1.5rem 0;

  @include md {
    padding: 5.5rem 0 4rem;
  }

  &-bg {
    display: none;

    @include lg {
      position: absolute;
      z-index: -1;
      display: block;
      background: url("https://images.unsplash.com/photo-1659427930751-590205446898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80");
      background-position: bottom center;
      background-size: cover;
      background-attachment: fixed;
      filter: opacity(0.7);
      inset: 0;
    }
  }

  &-block {
    @include lg {
      margin: 0 auto;
      width: 83.3333%;
    }

    li {
      position: relative;
      display: flex;
      align-items: center;

      &:first-child {
        margin-bottom: 1.5rem;

        @include lg {
          margin-bottom: 2.5rem;

          .feature-image {
            margin-right: 1.5rem;
            filter: drop-shadow(-1.5rem -1.5rem rgba(255, 255, 255, 0.6));
          }
        }
      }

      &:last-child {
        @include lg {
          flex-direction: row-reverse;
          text-align: right;

          .feature-image {
            margin-left: 1.5rem;
            filter: drop-shadow(1.5rem -1.5rem rgba(255, 255, 255, 0.6));
          }
        }
      }
    }
  }

  &-image {
    position: relative;
    width: 100%;
    height: 400px;

    &::after {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      content: "";
      inset: 0;

      @include lg {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
      object-position: bottom center;
      transition: 0.3s;
    }

    @include lg {
      overflow: hidden;
      width: 50%;
      height: 300px;
      border-radius: 4px;

      &:hover img {
        transform: scale(1.1);
      }
    }
  }

  &-text {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include lg {
      position: static;
      display: block;
    }

    h3 {
      margin-bottom: 0.75rem;
      font-size: 24px;
      font-weight: 700;
      color: $white;

      @include md {
        font-size: 30px;
      }

      @include lg {
        margin-bottom: 1.5rem;
        font-size: 28px;
      }
    }
  }
}
</style>

/* stylelint-disable CssSyntaxError */ /* stylelint-disable CssSyntaxError */
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
  </main>
</template>

<script>
import SearchBox from "@/components/SearchBoxComponent";
import FamousCard from "@/components/FamousCardComponent";
export default {
  name: "HomeView",
  components: {
    SearchBox,
    FamousCard,
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
          "https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ",
      },
    ];

    return {
      famous,
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
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1504632348771-974e356b80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");

  @include md {
    height: calc(100vh - 80px);
  }

  &-block {
    width: 300px;

    @include lg {
      display: flex;
      flex-direction: column;
      align-items: center;
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
</style>

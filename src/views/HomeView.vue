<template>
  <main>
    <!-- Banner -->
    <section
      class="flex h-[200px] items-center justify-center bg-[url('https://images.unsplash.com/photo-1504632348771-974e356b80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-bottom bg-no-repeat md:h-[calc((100vh-80px))]"
    >
      <div
        class="w-[300px] md:flex md:w-[450px] md:flex-col md:items-center lg:w-[680px]"
      >
        <h2
          class="hidden self-start md:mb-6 md:block md:w-[14em] md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-white md:text-3xl md:font-bold md:text-white lg:text-4xl"
        >
          與你分享的快樂，勝過獨自擁有
        </h2>
        <SearchBox class="md:w-4/5"></SearchBox>
      </div>
    </section>

    <!-- Famous -->
    <section class="container py-6 md:py-16">
      <h2
        class="before:content-normal after:content-normal mb-4 items-center text-center text-2xl font-bold text-primary before:mr-4 before:w-4 before:flex-grow before:border-t-8 before:border-double before:border-t-primary after:ml-4 after:w-4 after:flex-grow after:border-t-8 after:border-double after:border-t-primary md:mb-8 md:flex md:text-3xl"
      >
        最近熱門
      </h2>
      <ul class="flex flex-wrap gap-y-6 md:-mx-3">
        <li
          v-for="info of famous"
          :key="info.name"
          class="w-full px-3 md:w-1/2 lg:w-1/4"
        >
          <FamousCard :cardInfo="info" />
        </li>
      </ul>
    </section>

    <!-- Feature -->
    <section class="relative py-6 md:pt-[5.5rem] md:pb-16">
      <div
        class="hidden lg:absolute lg:inset-0 lg:-z-10 lg:block lg:bg-[url('https://images.unsplash.com/photo-1659427930751-590205446898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80')] lg:bg-cover lg:bg-fixed lg:bg-bottom lg:bg-no-repeat lg:opacity-70"
      ></div>
      <div class="lg:container">
        <ul class="lg:mx-auto lg:w-5/6">
          <li class="relative mb-6 flex items-center lg:mb-10">
            <div
              class="after:content-normal group relative h-[400px] w-full after:absolute after:inset-0 after:bg-black after:bg-opacity-40 lg:mr-6 lg:h-[300px] lg:w-1/2 lg:overflow-hidden lg:rounded lg:drop-shadow-[-1.5rem_-1.5rem_rgba(255,255,255,0.6)] lg:after:hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="住過露過，一定不能沒分享過"
                class="h-full w-full rounded object-cover object-bottom duration-300 group-hover:scale-110"
              />
            </div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center lg:static lg:block"
            >
              <h3
                class="mb-3 text-2xl font-bold text-white md:text-3xl lg:mb-6 lg:text-[30px]"
              >
                住過露過，一定不能沒分享過
              </h3>
              <router-link to="/share" class="btn btn-primary"
                >馬上分享</router-link
              >
            </div>
          </li>
          <li
            class="relative flex items-center lg:flex-row-reverse lg:text-right"
          >
            <div
              class="after:content-normal group relative h-[400px] w-full after:absolute after:inset-0 after:bg-black after:bg-opacity-40 lg:ml-6 lg:h-[300px] lg:w-1/2 lg:overflow-hidden lg:rounded lg:drop-shadow-[1.5rem_-1.5rem_rgba(255,255,255,0.6)] lg:after:hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1524007769096-2dad448565c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                alt="每天的驚喜從新的發現開始"
                class="h-full w-full rounded object-cover object-bottom duration-300 group-hover:scale-110"
              />
            </div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center lg:static lg:block"
            >
              <h3
                class="mb-3 text-2xl font-bold text-white md:text-3xl lg:mb-6 lg:text-[30px]"
              >
                每天的驚喜從新的發現開始
              </h3>
              <router-link to="/list" class="btn btn-primary"
                >發現更多</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Share -->
    <section class="py-6 md:py-16">
      <div class="md:container">
        <h2
          class="before:content-normal after:content-normal mb-4 items-center text-center text-2xl font-bold text-primary before:mr-4 before:w-4 before:flex-grow before:border-t-8 before:border-double before:border-t-primary after:ml-4 after:w-4 after:flex-grow after:border-t-8 after:border-double after:border-t-primary md:mb-8 md:flex md:text-3xl"
        >
          與你分享
        </h2>
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

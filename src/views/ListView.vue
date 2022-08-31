<template>
  <div class="hidden h-[4.5rem] bg-primary md:block"></div>
  <main class="py-20 md:py-16">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <div class="-mx-3 flex">
        <aside class="px-0 lg:w-1/3 lg:px-3 xl:w-1/4">
          <Filter @showMask="showMask"></Filter>
        </aside>
        <section class="px-3 lg:w-2/3 xl:w-3/4">
          <ul class="-mx-2 flex flex-wrap gap-y-4">
            <li
              class="w-full px-2 md:w-1/2 xl:w-1/3"
              v-for="item of place"
              :key="item.name"
            >
              <FamousCard :cardInfo="item"></FamousCard>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import BreadCrumb from "@/components/BreadCrumbComponent";
import Filter from "@/components/FilterComponent";
import FamousCard from "@/components/FamousCardComponent";
export default {
  components: {
    BreadCrumb,
    Filter,
    FamousCard,
  },
  emits: ["showMask"],
  setup(props, { emit }) {
    const place = [
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

    function showMask(status) {
      emit("showMask", status);
    }

    return {
      place,
      showMask,
    };
  },
};
</script>

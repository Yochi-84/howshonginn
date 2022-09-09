<template>
  <footer
    class="md:pt-18 relative overflow-hidden pt-16 after:absolute after:left-1/2 after:top-0 after:-z-10 after:h-[600vw] after:w-[600vw] after:-translate-x-1/2 after:rounded-full after:bg-primary-dark"
  >
    <div class="container">
      <div
        class="mx-auto flex w-5/6 flex-wrap items-start justify-start pb-4 md:flex-wrap md:justify-around md:pb-8"
      >
        <div class="mb-6 flex items-center md:mb-0 md:block md:items-start">
          <h4
            class="mr-4 flex-shrink-0 text-xl font-bold tracking-widest text-white md:mr-0 md:mb-4 md:text-center"
          >
            找地區
          </h4>
          <ul
            class="flex flex-wrap gap-x-6 gap-y-3 md:block md:space-y-6 md:text-center"
          >
            <li><router-link to="/" class="link">北部</router-link></li>
            <li><router-link to="/" class="link">中部</router-link></li>
            <li><router-link to="/" class="link">南部</router-link></li>
            <li><router-link to="/" class="link">東部</router-link></li>
            <li><router-link to="/" class="link">離島</router-link></li>
          </ul>
        </div>
        <div class="mb-6 flex items-center md:mb-0 md:block md:items-start">
          <h4
            class="mr-4 flex-shrink-0 text-xl font-bold tracking-widest text-white md:mr-0 md:mb-4 md:text-center"
          >
            找特色
          </h4>
          <ul
            class="flex flex-wrap gap-x-6 gap-y-3 md:block md:space-y-6 md:text-center"
          >
            <li><router-link to="/" class="link">有雨棚</router-link></li>
            <li><router-link to="/" class="link">賞雲海</router-link></li>
            <li><router-link to="/" class="link">賞櫻花</router-link></li>
            <li><router-link to="/" class="link">近市區</router-link></li>
          </ul>
        </div>
        <div class="mb-6 flex items-center md:mb-0 md:block md:items-start">
          <h4
            class="mr-4 flex-shrink-0 text-xl font-bold tracking-widest text-white md:mr-0 md:mb-4 md:text-center"
          >
            找朋友
          </h4>
          <ul
            class="flex flex-wrap gap-x-6 gap-y-3 md:block md:space-y-6 md:text-center"
          >
            <li><router-link to="/" class="link">大草皮</router-link></li>
            <li><router-link to="/" class="link">少帳包區</router-link></li>
            <li><router-link to="/" class="link">親子</router-link></li>
            <li><router-link to="/" class="link">寵物友善</router-link></li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-center border-t border-t-white p-2 text-center md:gap-x-8"
      >
        <p
          class="relative w-full text-sm text-white after:absolute after:-right-4 after:top-0 after:h-full after:w-px after:bg-primary md:w-auto md:text-base md:after:bg-white"
        >
          Copyright© By Chi
        </p>
        <p class="relative w-full text-sm text-white md:w-auto md:text-base">
          此網頁為個人練習用作品
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.link {
  @apply text-white hover:after:opacity-100 md:relative md:after:absolute md:after:-left-8 md:after:top-1/2 md:after:h-6 md:after:w-6 md:after:-translate-y-1/2 md:after:bg-[url("@/assets/image/logo_white.svg")] md:after:bg-center md:after:bg-no-repeat md:after:opacity-0 md:after:duration-300;
}
</style>

<template>
  <footer class="bg-primary">
    <div class="container">
      <div
        class="mx-auto flex w-5/6 flex-wrap-reverse items-center pt-8 pb-4 lg:flex-wrap lg:pt-16 lg:pb-8"
      >
        <div class="w-full p-8 lg:w-1/4 lg:pr-10">
          <img src="../assets/image/logo_white.svg" alt="How享營" />
        </div>
        <div class="lg:flex lg:flex-grow lg:justify-between">
          <div class="mb-6 flex items-start lg:mb-0 lg:block">
            <h4
              class="mr-4 flex-shrink-0 text-2xl font-bold text-white lg:mr-0 lg:mb-4 lg:text-center"
            >
              找地區
            </h4>
            <ul
              class="flex flex-wrap gap-x-6 gap-y-3 lg:block lg:space-y-6 lg:text-center"
            >
              <li><router-link to="/" class="link">北部</router-link></li>
              <li><router-link to="/" class="link">中部</router-link></li>
              <li><router-link to="/" class="link">南部</router-link></li>
              <li><router-link to="/" class="link">東部</router-link></li>
              <li><router-link to="/" class="link">離島</router-link></li>
            </ul>
          </div>
          <div class="mb-6 flex items-start lg:mb-0 lg:block">
            <h4
              class="mr-4 flex-shrink-0 text-2xl font-bold text-white lg:mr-0 lg:mb-4 lg:text-center"
            >
              找特色
            </h4>
            <ul
              class="flex flex-wrap gap-x-6 gap-y-3 lg:block lg:space-y-6 lg:text-center"
            >
              <li><router-link to="/" class="link">有雨棚</router-link></li>
              <li><router-link to="/" class="link">賞雲海</router-link></li>
              <li><router-link to="/" class="link">賞櫻花</router-link></li>
              <li><router-link to="/" class="link">近市區</router-link></li>
            </ul>
          </div>
          <div class="mb-6 flex items-start lg:mb-0 lg:block">
            <h4
              class="mr-4 flex-shrink-0 text-2xl font-bold text-white lg:mr-0 lg:mb-4 lg:text-center"
            >
              找朋友
            </h4>
            <ul
              class="flex flex-wrap gap-x-6 gap-y-3 lg:block lg:space-y-6 lg:text-center"
            >
              <li><router-link to="/" class="link">大草皮</router-link></li>
              <li><router-link to="/" class="link">少帳包區</router-link></li>
              <li><router-link to="/" class="link">親子</router-link></li>
              <li><router-link to="/" class="link">寵物友善</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-center border-t border-t-white p-2 text-center lg:gap-x-8"
      >
        <p
          class="after:content-normal relative w-full text-sm text-white after:absolute after:-right-4 after:h-full after:bg-white lg:w-auto lg:text-base"
        >
          Copyright© By Chi
        </p>
        <p class="relative w-full text-sm text-white lg:w-auto lg:text-base">
          此網頁為個人練習用作品
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.link {
  @apply lg:after:content-normal text-xl text-white lg:relative lg:text-2xl lg:after:absolute lg:after:-bottom-0.5 lg:after:left-1/2 lg:after:h-0.5 lg:after:w-0 lg:after:bg-white lg:after:duration-300 lg:hover:after:left-0 lg:hover:after:w-full;
}
</style>

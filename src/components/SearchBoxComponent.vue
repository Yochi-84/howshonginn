<template>
  <div class="flex items-center justify-between rounded bg-white">
    <input
      type="text"
      placeholder="請輸入關鍵字搜尋"
      class="flex-grow basis-3/4 bg-transparent py-3 pl-2 text-base placeholder:text-content-light focus:outline-none md:pl-4"
      @keydown.enter.exact="search"
    />
    <a
      href="#"
      class="block h-full flex-shrink-0 cursor-pointer px-2 py-3 text-content-light duration-300 hover:text-primary md:px-4"
      @click.prevent="search"
      ><font-awesome-icon icon="fa-solid fa-search"
    /></a>
  </div>
</template>
<script>
export default {};
</script>

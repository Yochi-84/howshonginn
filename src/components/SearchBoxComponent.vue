<template>
  <div class="flex items-center justify-center rounded bg-white pr-6 pl-4">
    <input
      type="text"
      placeholder="請輸入關鍵字搜尋"
      class="flex-grow bg-transparent py-3 placeholder:text-link focus:outline-none md:text-xl"
      @keydown.enter.exact="search"
    />
    <a
      href="#"
      class="cursor-pointer text-link duration-300 hover:text-primary"
      @click.prevent="search"
      ><font-awesome-icon icon="fa-solid fa-search"
    /></a>
  </div>
</template>
<script>
export default {};
</script>

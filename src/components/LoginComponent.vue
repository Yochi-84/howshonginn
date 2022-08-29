<template>
  <div class="flex flex-col py-6 md:py-8">
    <label for="email" class="mb-3 text-sm lg:text-base">信箱</label>
    <input
      type="email"
      id="email"
      placeholder="請輸入電子信箱"
      class="mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-link focus:border-primary focus:shadow-around focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <label for="password" class="mb-3 text-sm lg:text-base">密碼</label>
    <input
      type="password"
      id="password"
      placeholder="請輸入密碼"
      class="mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-link focus:border-primary focus:shadow-around focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <div class="mb-8 flex items-center justify-between lg:mb-10">
      <div class="flex items-center">
        <input
          type="checkbox"
          id="keepLogin"
          class="mr-2 rounded-sm border border-black bg-white py-2 px-4 accent-primary focus:border-primary focus:outline-none"
        />
        <label for="keepLogin" class="text-sm lg:text-base">保持登入</label>
      </div>
      <a href="#" class="text-blue-700 hover:underline">忘記密碼?</a>
    </div>
    <a href="#" class="btn btn-primary btn-large self-center">登入</a>
  </div>
</template>
<script>
export default {};
</script>

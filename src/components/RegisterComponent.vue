<template>
  <div class="flex flex-col py-6 md:py-8">
    <label for="email" class="mb-3 text-sm lg:text-base">信箱</label>
    <input
      type="email"
      id="email"
      placeholder="請輸入電子信箱"
      class="mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-danger focus:shadow-around-danger focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <label for="nickname" class="mb-3 text-sm lg:text-base">暱稱</label>
    <input
      type="text"
      id="nickname"
      placeholder="請輸入暱稱"
      class="mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-danger focus:shadow-around-danger focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <label for="password" class="mb-3 text-sm lg:text-base">密碼</label>
    <input
      type="password"
      id="password"
      placeholder="請輸入密碼"
      class="mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-danger focus:shadow-around-danger focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <label for="passwordCheck" class="mb-3 text-sm lg:text-base"
      >確認密碼</label
    >
    <input
      type="password"
      id="passwordCheck"
      placeholder="請再次輸入密碼"
      class="mb-9 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-danger focus:shadow-around-danger focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />

    <a href="#" class="btn btn-danger btn-large self-center">註冊</a>
  </div>
</template>
<script>
export default {};
</script>

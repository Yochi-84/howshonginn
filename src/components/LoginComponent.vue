<template>
  <div class="flex flex-col py-6 md:py-8">
    <label for="email" class="mb-2 text-sm md:mb-3 md:text-base">信箱</label>
    <input
      type="email"
      id="email"
      placeholder="請輸入電子信箱"
      class="mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-primary focus:shadow-around-primary focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <label for="password" class="mb-2 text-sm md:mb-3 md:text-base">密碼</label>
    <input
      type="password"
      id="password"
      placeholder="請輸入密碼"
      class="mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-primary focus:shadow-around-primary focus:outline-none lg:py-3 lg:px-4 lg:text-xl"
    />
    <div class="mb-6 flex items-center justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          id="keepLogin"
          class="mr-2 rounded-sm border border-black bg-white py-2 px-4 accent-primary focus:border-primary focus:outline-none"
        />
        <label for="keepLogin" class="text-sm lg:text-base">保持登入</label>
      </div>
      <a href="#" class="text-sm text-blue-700 hover:underline lg:text-base"
        >忘記密碼?</a
      >
    </div>
    <a href="#" class="btn btn-primary btn-large mb-8 self-center md:mb-10"
      >登入</a
    >

    <span
      class="mb-8 flex items-center text-center text-sm font-bold text-gray-600 before:mr-4 before:w-4 before:flex-grow before:border-t-2 before:border-t-gray-600 after:ml-4 after:w-4 after:flex-grow after:border-t-2 after:border-t-gray-600 md:mb-10 md:text-base"
      >或者</span
    >
    <a
      href="#"
      class="btn btn-large flex items-center justify-center self-center border border-black bg-white font-normal text-black shadow-sm duration-300 hover:bg-gray-300"
      ><img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt="Google Icon"
        class="mr-2 h-8 w-8"
      />Google 帳戶登入</a
    >
  </div>
</template>
<script setup></script>

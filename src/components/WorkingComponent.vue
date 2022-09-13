<template>
  <div class="pt-[10rem] pb-6 md:pb-16">
    <img src="/working.svg" class="h-[260px] animate-bounce mx-auto" alt="施工中" />
    <div class="rounded-[50%] bg-gray-600/[0.8] blur-sm h-6 w-14 mx-auto animate-scale mb-4"></div>
    <h2 class="font-bold text-3xl text-primary-dark text-center">
      <slot></slot>
    </h2>
  </div>
</template>

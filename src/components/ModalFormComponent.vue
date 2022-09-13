<template>
  <div
    class="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-24px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border-[5px] bg-white py-4 duration-300 md:w-460 lg:w-550"
  >
    <a
      href="#"
      @click.prevent="closeModal"
      class="mb-2 block px-3 text-right md:px-6"
    >
      <span>
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="text-3xl hover:text-danger-dark"
        />
      </span>
    </a>
    <slot></slot>
  </div>
</template>
<script setup>
const emits = defineEmits(['closeModal']);
function closeModal() {
  emits('closeModal');
}
</script>

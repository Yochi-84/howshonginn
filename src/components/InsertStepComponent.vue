<template>
  <li
    :class="[
      'flex items-center',
      {
        'relative after:w-8 after:border-t-2  after:md:w-10 lg:after:w-20':
          !isEnd,
      },
      maxStep > stepIndex
        ? 'after:border-t-primary-dark'
        : 'after:border-dashed after:border-t-gray-200',
    ]"
  >
    <div
      :class="[
        'flex aspect-1 w-12 select-none flex-col items-center justify-center rounded-full border-2 text-sm md:w-20 lg:w-25 lg:text-base',
        {
          'cursor-pointer border-primary-dark bg-primary-light text-primary-dark transition-opacity duration-300 hover:opacity-70':
            maxStep >= stepIndex && !isActive,
          'pointer-events-none border-gray-200 bg-gray-100 text-gray-400':
            maxStep < stepIndex,
          'cursor-pointer border-primary bg-primary-dark text-white': isActive,
        },
      ]"
      @click="jumpTo(stepIndex)"
    >
      <slot name="icon"></slot>
      <slot name="name"></slot>
    </div>
  </li>
</template>
<script setup>
import { toRefs } from 'vue';

const emits = defineEmits(['jumpToStep']);
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  stepIndex: Number,
  isEnd: {
    type: Boolean,
    default: false,
  },
  maxStep: {
    type: Number,
    default: 0
  }
});

const { isActive, stepIndex, isEnd, maxStep } = toRefs(props);

function jumpTo(index) {
  emits('jumpToStep', index);
}
</script>

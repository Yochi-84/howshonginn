<template>
  <main class="py-20 md:py-34">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <ul class="mb-8 flex w-full items-center justify-center">
        <InsertStep
          v-for="(step, index) of steps"
          :key="step.name"
          :isActive="step.active"
          :stepIndex="index"
          :isEnd="index === steps.length - 1"
          :maxStep="maxStep"
          @jumpToStep="jumpToStep"
        >
          <template #icon>
            <font-awesome-icon
              :icon="['fa-solid', 'fa-' + step.icon]"
              class="md:mb-2"
            />
          </template>
          <template #name>
            <span class="hidden md:inline">{{ step.name }}</span>
          </template>
        </InsertStep>
      </ul>
      <section>
        <h2
          class="mb-6 border-b-8 border-double border-b-primary-dark pb-2 text-center text-3xl font-bold text-primary-dark"
        >
          <font-awesome-icon
            :icon="['fa-solid', 'fa-' + steps[currentStep].icon]"
            class="mr-4"
          />{{ steps[currentStep].name }}
        </h2>
        <transition :name="transitionDirection" mode="out-in">
          <keep-alive>
            <component :is="stepView[currentStep]" class="mb-6"></component>
          </keep-alive>
        </transition>
      </section>
      <div class="flex items-center justify-between">
        <a
          href="#"
          :class="['btn btn-danger',{'invisible opacity-0': currentStep === 0}]"
          @click.prevent="prevStep"
          >上一步</a
        >
        <a
          href="#"
          class="btn btn-primary float-right"
          @click.prevent="nextStep"
          >下一步</a
        >
      </div>
    </div>
  </main>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import InsertStep from '@/components/InsertStepComponent';
import InsertInfo from '@/components/InsertInfoComponent';
import InsertPicture from '@/components/InsertPictureComponent';
import { ref } from 'vue';

const currentStep = ref(0);
const maxStep = ref(0);
const steps = ref([
  {
    name: '營地資訊',
    icon: 'flag',
    active: true,
  },
  {
    name: '營地照片',
    icon: 'images',
    active: false,
  },
  {
    name: '特色標籤',
    icon: 'tags',
    active: false,
  },
  {
    name: '畫面預覽',
    icon: 'display',
    active: false,
  },
]);
const transitionDirection = ref('left');

const stepView = [InsertInfo, InsertPicture];

function jumpToStep(index) {
  steps.value[currentStep.value].active = false;
  currentStep.value = index;
  steps.value[currentStep.value].active = true;
}

function prevStep() {
  transitionDirection.value = 'right';
  steps.value[currentStep.value].active = false;
  currentStep.value -= 1;
  steps.value[currentStep.value].active = true;
}

function nextStep() {
  transitionDirection.value = 'left';
  steps.value[currentStep.value].active = false;
  currentStep.value += 1;
  steps.value[currentStep.value].active = true;
  maxStep.value = currentStep.value;
}
</script>
<style scoped>
.left-enter-active,
.left-leave-active {
  transition: 0.3s ease;
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
}

.left-leave-to {
  transform: translateX(-40%);
}

.left-enter-from {
  transform: translateX(40%);
}

.right-enter-active,

.right-leave-active {
  transition: 0.5s ease;
}

.right-enter-from,
.right-leave-to {
  opacity: 0;
}

.right-leave-to {
  transform: translateX(40%);
}

.right-enter-from {
  transform: translateX(-40%);
}
</style>

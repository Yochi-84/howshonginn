<template>
  <div class="md:px-8 lg:px-20">
    <ul class="-mx-4 flex flex-wrap gap-y-3">
      <li class="w-full px-4 md:w-1/2">
        <label for="name" class="mb-1 block text-lg font-bold text-primary-dark"
          ><font-awesome-icon
            icon="fa-solid fa-tent"
            class="mr-2"
          />名稱:</label
        >
        <input
          type="text"
          id="name"
          class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
        />
      </li>
      <li class="w-full px-4 md:w-1/2">
        <label
          for="phone"
          class="mb-1 block text-lg font-bold text-primary-dark"
          ><font-awesome-icon
            icon="fa-solid fa-phone"
            class="mr-2"
          />聯絡電話:</label
        >
        <input
          type="tel"
          id="phone"
          class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
        />
      </li>
      <li class="w-full px-4 md:w-1/2">
        <label
          for="address"
          class="mb-1 block text-lg font-bold text-primary-dark"
          ><font-awesome-icon icon="fa-solid fa-map" class="mr-2" />地址:</label
        >
        <input
          type="text"
          id="address"
          class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
        />
      </li>
      <li class="w-full px-4 md:w-1/2">
        <label
          for="website"
          class="mb-1 block text-lg font-bold text-primary-dark"
        >
          <font-awesome-icon
            icon="fa-solid fa-globe"
            class="mr-2"
          />網站:</label
        >
        <input
          type="text"
          id="website"
          class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
        />
      </li>
      <li class="w-full px-4 md:w-1/2">
        <label
          for="altitude"
          class="mb-1 block text-lg font-bold text-primary-dark"
          ><font-awesome-icon
            icon="fa-solid fa-mountain-sun"
            class="mr-2"
          />海拔高度</label
        >
        <select
          name="altitude"
          id="altitude"
          class="rounded border border-black py-1 px-2 text-center focus:shadow-around-primary focus:outline-none"
        >
          <option value="" disabled selected>--- 海拔高度範圍 ---</option>
          <option value="300m以下">300m以下</option>
          <option value="301~500m">301~500m</option>
          <option value="501~800m">501~800m</option>
          <option value="801~1000m">801~1000m</option>
          <option value="1001~1500m">1001~1500m</option>
          <option value="1501m以上">1501m以上</option>
          <option value="unknown">不清楚</option>
        </select>
      </li>
    </ul>
  </div>
</template>
<script setup></script>

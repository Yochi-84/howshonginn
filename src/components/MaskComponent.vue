<template>
  <div
    :class="[
      'fixed inset-0 z-40  bg-black bg-opacity-60 lg:hidden',
      props.show ? 'block' : 'hidden',
    ]"
    id="mask"
  ></div>
</template>
<script>
import { onMounted } from "vue";
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries.some((item) => item.isIntersecting)) {
          document
            .querySelector("body")
            .classList.add("overflow-y-hidden", "max-h-screen");
        } else {
          document.querySelector("#mask").classList.remove("block");
          document.querySelector("#mask").classList.add("hidden");
          document
            .querySelector("body")
            .classList.remove("overflow-y-hidden", "max-h-screen");
        }
      });

      observer.observe(document.querySelector("#mask"));
    });

    return {
      props,
    };
  },
};
</script>

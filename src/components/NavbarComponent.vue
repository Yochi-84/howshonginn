<template>
  <header class="header">
    <nav class="nav container">
      <span class="menu-controller" @click="navStatus = !navStatus"
        ><font-awesome-icon icon="fa-solid fa-bars"
      /></span>
      <h1 class="logo">
        <router-link to="/"> How享營 </router-link>
      </h1>
      <ul :class="['nav-list', { open: navStatus }]">
        <li>
          <router-link to="/list">所有營地</router-link>
        </li>
        <li>
          <router-link to="/share">分享營地</router-link>
        </li>
        <li>
          <router-link to="/contact">聯絡我們</router-link>
        </li>
        <li class="ml-auto">
          <router-link to="/contact">登入</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let navStatus = ref(false);

    return {
      navStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.nav {
  display: flex;
  align-items: flex-end;
  background-color: $white;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  @include md {
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: static;
    box-shadow: none;
  }

  .logo {
    width: 143.25px;
    height: 36px;
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
    background-image: url("../assets/image/logo.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @include md {
      position: static;
      transform: none;
      height: 48px;
      width: 191px;
    }

    a {
      display: block;
      height: 100%;
    }
  }

  &-list {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    background-color: $white;
    max-width: 0;
    overflow: hidden;
    transition: max-width 0.3s;

    &.open {
      max-width: 100%;
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
      height: calc(100vh - 60px);
    }

    li {
      white-space: nowrap;
    }

    @include md {
      position: static;
      display: flex;
      align-items: center;
      flex-grow: 1;
      gap: 1rem 2rem;
      margin-left: 3rem;
      max-width: 100%;
      transform: none;
    }

    a {
      display: block;
      color: $link;
      font-size: 20px;
      padding: 1rem 5rem;

      @include md {
        padding: 0;
      }
    }
  }
}

.menu-controller {
  color: $primary;
  font-size: 32px;
  line-height: 1;
  display: block;

  @include md {
    display: none;
  }
}
</style>

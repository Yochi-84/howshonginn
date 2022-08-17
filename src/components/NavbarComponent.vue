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
  z-index: 10;
  background-color: $white;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);

  @include md {
    position: static;
    box-shadow: none;
  }
}

.nav {
  display: flex;
  align-items: flex-end;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  @include md {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 143.25px;
    height: 36px;
    text-indent: 101%;
    white-space: nowrap;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/image/logo.svg");
    transform: translate(-50%, -50%);

    @include md {
      position: static;
      width: 191px;
      height: 48px;
      transform: none;
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
    overflow: hidden;
    max-width: 0;
    background-color: $white;
    transition: max-width 0.5s;
    transform: translateY(100%);

    &.open {
      max-width: 100%;
      height: calc(100vh - 60px);
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
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
      padding: 1rem 5rem;
      font-size: 20px;
      color: $link;

      @include md {
        padding: 0;
      }
    }
  }
}

.menu-controller {
  display: block;
  font-size: 32px;
  color: $primary;
  line-height: 1;

  @include md {
    display: none;
  }
}
</style>

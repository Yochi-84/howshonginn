<template>
  <div class="search-bar">
    <input type="text" placeholder="請輸入關鍵字搜尋" />
    <a href="#" class="search-btn"
      ><font-awesome-icon icon="fa-solid fa-search"
    /></a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.search {
  &-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1.5rem;
    padding-left: 1rem;
    background: $white;
    border-radius: 4px;

    input {
      padding: 0.75rem 0;
      font-size: 16px;
      background-color: transparent;
      border: 0;
      flex-grow: 1;

      @include md {
        font-size: 20px;
      }

      &::placeholder {
        color: $link;
      }

      &:focus {
        outline: none;
      }
    }
  }

  &-btn {
    color: $link;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: $primary;
    }
  }
}
</style>

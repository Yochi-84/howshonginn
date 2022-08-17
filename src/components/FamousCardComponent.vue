<template>
  <div class="card">
    <div class="card-image">
      <img :src="cardInfo.image" :alt="cardInfo.name" />
    </div>
    <div class="card-content">
      <h4 class="card-subtitle">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          cardInfo.county
        }}
      </h4>
      <h3 class="card-title">{{ cardInfo.name }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardInfo: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 3px 3px #333;

  &-image {
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-content {
    padding: 1rem;
    text-align: center;

    @include md {
      padding: 1rem 1.5rem;
      text-align: left;
    }
  }

  &-title {
    font-size: 20px;

    @include md {
      font-size: 20px;
    }
  }

  &-subtitle {
    margin-bottom: 0.5rem;
    font-size: 16px;
    color: $primary;

    @include md {
      margin-bottom: 1rem;
      font-size: 18px;
    }
  }
}
</style>

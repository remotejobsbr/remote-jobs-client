<template>
  <div class="componentVacancyCardPlaceholder card">
    <div class="top">
      <img
        src="~/assets/vacancy-card-placeholder-1.svg"
        alt="">
    </div>
    <div class="bottom">
      <img
        src="~/assets/vacancy-card-placeholder-2.svg"
        alt="">

      <img
        src="~/assets/small-button-placeholder.svg"
        alt="">
    </div>
  </div>
</template>

<style lang="scss">
.componentVacancyCardPlaceholder {
  img {
    max-width: 100%;
  }

  .top {
    margin-bottom: 1.6rem;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

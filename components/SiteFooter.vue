<template>
  <footer class="componentSiteFooter">
    <div class="container">
      <p class="author">
        Idealizado com
        <img
          src="~/assets/icons/green-heart.svg"
          alt="amor">
        por
        <a
          href="https://github.com/IsTheJack"
          target="_blank">Roberto Oliveira</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss">
.componentSiteFooter {
  background-color: #1e91c3;
  color: #fff;
  font-size: 0.65rem;
  padding-top: 1rem;
  padding-bottom: 6.25rem;

  .author {
    display: flex;
    justify-content: center;

    img {
      margin: 0 0.5rem;
    }

    a {
      margin-left: 0.2rem;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>

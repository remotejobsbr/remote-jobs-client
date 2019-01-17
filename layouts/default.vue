<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Lato', 'Source Sans Pro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  padding: 0 2rem;
  width: 80%;
  max-width: 90rem;

  @media screen and (max-width: 1150px) {
    width: 90%;
  }

  @media screen and (max-width: 997px) {
    width: 95%;
  }
}

.card {
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.08);
  border-radius: 1.31rem;
  padding: 2.5rem 1.43rem;
}

.button {
  background: transparent;
  color: #1e91c3;
  border: 1px solid #1e91c3;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1rem 3.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: 0;

  &.buttonSmall {
    font-size: 0.625rem;
    padding: 0.5625rem 1.3125rem;
  }
}

a {
  text-decoration: none;
}
</style>

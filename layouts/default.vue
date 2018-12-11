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

.button {
  background: transparent;
  color: #1e91c3;
  border-color: #1e91c3;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1rem 3.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: 0;
}
</style>

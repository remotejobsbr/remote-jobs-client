<template>
  <div class="ServiceLogo">
    <img
      v-if="serviceName === 'androiddevbr'"
      src="~/assets/android-dev-br-logo.png"
      alt="Vaga de Android Dev BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'backendbr'"
      src="~/assets/backend-brasil-logo.png"
      alt="Vaga de Backend BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'cocoaheadsbrasil'"
      src="~/assets/cocoaheadsbrasil-logo.png"
      alt="Vaga de Backend BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'frontendbr'"
      src="~/assets/front-end-brasil-logo.png"
      alt="Vaga de Frontend BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'phpdevbrasil'"
      src="~/assets/php-dev-brasil-logo.png"
      alt="Vaga de PHP Dev BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'react-brasil'"
      src="~/assets/react-brasil-logo.png"
      alt="Vaga de React BR"
      class="logoImage">
    <img
      v-else-if="serviceName === 'soujava'"
      src="~/assets/soujava-logo.png"
      alt="Vaga de Sou Java"
      class="logoImage">
    <img
      v-else-if="serviceName === 'uxbrasil'"
      src="~/assets/uxbrasil-logo.png"
      alt="Vaga de Ux Brasil"
      class="logoImage">
    <img
      v-else-if="serviceName === 'Gommunity'"
      src="~/assets/Gommunity-logo.png"
      alt="Vaga de Ux Brasil"
      class="logoImage">
    <img
      v-else-if="serviceName === 'Flutter-Brazil'"
      src="~/assets/Flutter-Brazil-logo.png"
      alt="Vaga de Ux Brasil"
      class="logoImage">
  </div>
</template>

<script>
export default {
  props: {
    serviceName: {
      type: String,
      required: true
    }
  }
}
</script>

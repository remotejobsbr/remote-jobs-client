<template>
  <div class="componentVacancyCard card">
    <div class="top">
      <img
        :src="vacancy.user.avatar_url"
        :alt="vacancy.user.login"
        class="userAvatar">
      <div>
        <h1 class="title">{{ vacancy.title }}</h1>
        <h1 class="subtitle">Postado {{ moment(vacancy.created_at).fromNow() }}</h1>
      </div>
    </div>
    <div class="bottom">
      <div class="labelsContainer">
        <service-logo
          :service-name="vacancy.service_name"
          class="serviceLogo" />

        <div class="labels">
          <div
            v-for="label in labels"
            :key="label.id"
            class="label">
            {{ label.name }}
          </div>
        </div>
      </div>

      <nuxt-link
        :to="`/jobs/${$route.params.category}/${vacancy.service_name}/${vacancy.id}`"
        class="button buttonSmall">Ver Vaga</nuxt-link>
    </div>
  </div>
</template>

<script>
import ServiceLogo from '~/components/ServiceLogo.vue'
import moment from '~/utils/momentLocale'

export default {
  components: {
    ServiceLogo
  },
  props: {
    vacancy: {
      type: Object,
      required: true
    }
  },
  computed: {
    labels() {
      const remoteRegex = /(remote|remoto)/gi
      return this.vacancy.labels.filter(label => !remoteRegex.test(label.name))
    }
  },
  methods: {
    moment
  }
}
</script>


<style lang="scss">
.componentVacancyCard {
  .top {
    display: flex;
    margin-bottom: 1.6rem;
  }

  .userAvatar,
  .serviceLogo img {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .title {
    color: #4d4d4d;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 1rem;
  }

  .subtitle {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 0.6875rem;
    text-align: justify;
    color: #c4c4c4;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .labelsContainer {
    display: flex;
    align-items: center;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
  }

  .label {
    background: #4fe38a;
    color: #fff;
    border-radius: 1.25rem;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 0.75rem;
    text-align: justify;
    text-transform: uppercase;
    padding: 0.55rem 0.8125rem;
    margin: 0.375rem 0.75rem 0.375rem 0;
  }

  .buttonSmall {
    min-width: 90px;
  }
}
</style>

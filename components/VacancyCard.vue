<template>
  <div class="componentVacancyCard card">
    <div class="top">
      <img
        :src="vacancy.user.avatar_url"
        :alt="vacancy.user.login"
        class="userAvatar">
      <div>
        <h1 class="title">{{ vacancy.title }}</h1>
        <h2 class="subtitle">Postado {{ moment(vacancy.created_at).fromNow() }}</h2>
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
        v-if="full"
        :to="`/${$route.params.category}`"
        exact
        class="button buttonSmall">Voltar</nuxt-link>
    </div>
    <div
      v-if="full"
      class="vacancyCardContent">
      <vue-markdown>{{ removeComments(vacancy.body) }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import ServiceLogo from '~/components/ServiceLogo.vue'
import moment from '~/utils/momentLocale'

export default {
  components: {
    ServiceLogo,
    VueMarkdown
  },
  props: {
    vacancy: {
      type: Object,
      required: true
    },
    // Show the full data of a vacancy
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labels() {
      const remoteRegex = /(remote|remoto)/gi
      return this.vacancy.labels.filter(label => !remoteRegex.test(label.name))
    }
  },
  methods: {
    moment,
    removeComments: text => text.replace(/<!--(.|\n|\t|\r)*?-->/gi, '')
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
    min-height: 2rem;
    min-width: 2rem;
    margin-right: 1rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .title {
    color: #4d4d4d;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 1rem;
  }

  .subtitle {
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
    background: #55ac78;
    color: #fff;
    border-radius: 1.25rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 0.75rem;
    text-align: justify;
    text-transform: uppercase;
    padding: 0.55rem 0.8125rem;
    margin: 0.375rem 0.75rem 0.375rem 0;
  }

  .buttonSmall {
    min-width: 90px;
    text-align: center;
  }

  .vacancyCardContent {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 16px;
    color: #4d4d4d;

    @media screen and (min-width: 764px) {
      padding: 1rem 0 1rem 3rem;
    }

    p {
      margin: 0.6rem 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-style: normal;
      font-weight: bold;
      line-height: 37px;
      font-size: 16px;
      color: #4d4d4d;
    }

    h1,
    h2 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.21);
      margin: 1.3rem 0 1rem;
    }

    a {
      color: #1e91c3;
      font-weight: bold;
      word-break: break-all;
    }

    img {
      display: block;
      max-width: 90%;
      max-height: 500px;
      object-fit: contain;
      margin: 1rem 0;
    }

    pre {
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
  }
}
</style>

<template>
  <vacancies-template class="page-category">
    <div class="content">
      <img
        class="top-image"
        src="~/assets/remote-jobs-header.png"
        alt="Foto de fundo com homem mexendo no computador">

      <h1 class="page-title">{{ pageName }}</h1>

      <div v-if="!vacancies">
        <vacancy-card-placeholder class="vacancy-container" />
        <vacancy-card-placeholder class="vacancy-container" />
        <vacancy-card-placeholder class="vacancy-container" />
      </div>
      <div v-else-if="!!vacancies && hasVacancy">
        <nuxt-link
          v-for="vacancy in vacancies"
          :key="vacancy.id"
          :to="`/jobs/${$route.params.category}/${vacancy.service_name}/${vacancy.number}`">
          <vacancy-card
            :vacancy="vacancy"
            class="vacancy-card"/>
        </nuxt-link>
      </div>
      <div v-else>
        <div class="empty-state">
          <img
            src="~/assets/empty-state.svg"
            alt="Mobile">

          <p class="empty-state-main-message">Ainda não temos vagas :(</p>

          <p>Mas não se preocupe, estamos trabalhando para encher esse feed!</p>
        </div>
      </div>
    </div>
  </vacancies-template>
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import VacancyCardPlaceholder from '~/components/VacancyCardPlaceholder.vue'
import VacanciesTemplate from '~/components/VacanciesTemplate.vue'

export default {
  head() {
    return {
      title: `Vagas em ${this.pageName} - Remote Jobs BR`,
      meta: [
        // <!-- Schema.org for Google -->
        {
          hid: 'itempropname',
          itemprop: 'name',
          content: `Vagas em ${this.pageName} - Remote Jobs BR`
        },
        // <!-- Twitter -->
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Vagas em ${this.pageName} - Remote Jobs BR`
        },
        // <!-- Open Graph general (Facebook, Pinterest & Google+) -->
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Vagas em ${this.pageName} - Remote Jobs BR`
        }
      ]
    }
  },
  components: {
    SiteFooter,
    VacancyCard,
    VacancyCardPlaceholder,
    VacanciesTemplate
  },
  validate({ params }) {
    const allowedCategories = /(frontend|backend|mobile|qa|ux|geral)/
    return allowedCategories.test(params.category)
  },
  fetch({ store, params }) {
    const { category } = params
    return store.dispatch('fetchJobs', { category })
  },
  computed: {
    vacancies() {
      return this.$store.state.jobs[this.$route.params.category]
    },
    hasVacancy() {
      const vacancies =
        this.$store.state.jobs[this.$route.params.category] || []

      return vacancies.length > 0
    },
    pageName() {
      return {
        frontend: 'Front-End',
        backend: 'Back-End',
        mobile: 'Mobile'
      }[this.$route.params.category]
    }
  },
  mounted() {
    if (!this.vacancies) {
      this.$store.dispatch('fetchJobs', {
        category: this.$route.params.category
      })
    }
  }
}
</script>

<style lang="scss">
.page-category {
  .content {
    margin-top: 70px;
    flex: 1;

    @media screen and (min-width: 979px) {
      margin-top: 400px;
    }
  }

  .top-image {
    position: absolute;
    right: 0;
    top: 0;
    height: 400px;
    max-width: 50%;
    object-fit: contain;

    @media screen and (max-width: 979px) {
      display: none;
    }
  }

  .page-title {
    color: #4d4d4d;
    text-align: center;
    font-size: 1.87rem;
    margin-bottom: 2rem;
  }

  .vacancy-container {
    margin-bottom: 2rem;
  }

  .vacancy-card {
    margin-bottom: 1.8rem;
  }

  .empty-state {
    text-align: center;

    @media screen and (min-width: 979px) {
      margin-top: -10.5rem;
      margin-left: -5rem;
    }

    img {
      width: 300px;
      max-width: 80%;
    }

    .empty-state-main-message {
      font-size: 2em;
    }
  }
}
</style>

<template>
  <vacancies-template class="pageCategory">
    <div class="content">
      <img
        class="topImage"
        src="~/assets/remote-jobs-header.jpg"
        alt="Foto de fundo com homem mexendo no computador">

      <h1 class="pageTitle">{{ pageName }}</h1>

      <div v-if="!vacancies">
        <vacancy-card-placeholder class="vacancyContainer" />
        <vacancy-card-placeholder class="vacancyContainer" />
        <vacancy-card-placeholder class="vacancyContainer" />
      </div>
      <div v-else>
        <nuxt-link
          v-for="vacancy in vacancies"
          :key="vacancy.id"
          :to="`/jobs/${$route.params.category}/${vacancy.service_name}/${vacancy.number}`">
          <vacancy-card
            :vacancy="vacancy"
            class="vacancyCard"/>
        </nuxt-link>
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
    const allowedCategories = /(frontend|backend|mobile)/
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
.pageCategory {
  .content {
    margin-top: 70px;
    flex: 1;

    @media screen and (min-width: 979px) {
      margin-top: 400px;
    }
  }

  .topImage {
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

  .pageTitle {
    color: #4d4d4d;
    text-align: center;
    font-size: 1.87rem;
    margin-bottom: 2rem;
  }

  .vacancyContainer {
    margin-bottom: 2rem;
  }

  .vacancyCard {
    margin-bottom: 1.8rem;
  }
}
</style>

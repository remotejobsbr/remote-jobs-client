<template>
  <vacancies-template class="pageJobsCategoryServiceNameJobId">
    <vacancy-card-placeholder
      v-if="!vacancy"
      class="vacancyContainer" />
    <vacancy-card
      v-else
      :vacancy="vacancy"
      full
      class="vacancyCard"/>
  </vacancies-template>
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import VacancyCardPlaceholder from '~/components/VacancyCardPlaceholder.vue'
import VacanciesTemplate from '~/components/VacanciesTemplate.vue'

export default {
  head() {
    const partialTitle = (this.vacancy && this.vacancy.title) || 'Buscando...'

    return {
      title: `${partialTitle} - Remote Jobs BR`
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
    vacancy() {
      const vacancies = this.$store.state.jobs[this.$route.params.category]
      const byJobId = job => job.id === Number(this.$route.params.jobId)
      return vacancies && vacancies.find(byJobId)
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
    if (!this.vacancy) {
      this.$store.dispatch('fetchJobs', {
        category: this.$route.params.category
      })
    }
  }
}
</script>

<style lang="scss">
.pageJobsCategoryServiceNameJobId {
  .vacancyContainer {
    margin-bottom: 2rem;
  }

  .vacancyCard {
    margin-bottom: 1.8rem;
    margin-top: 4rem;
    flex: 1;
  }
}
</style>

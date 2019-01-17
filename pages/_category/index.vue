<template>
  <div class="pageCategory">
    <div class="container mainLayout">
      <header>
        <nav class="mainNav">
          <nuxt-link
            to="/"
            exact>
            <logo class="logo" />
          </nuxt-link>

          <h1 class="navTitle">Áreas de Atuação:</h1>

          <ul class="menu">
            <li>
              <nuxt-link
                class="menuItem"
                to="/mobile">Mobile</nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="menuItem"
                to="/frontend">Front-End</nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="menuItem"
                to="/backend">Back-End</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>

      <section class="content">
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
          <vacancy-card
            v-for="vacancy in vacancies"
            :key="vacancy.id"
            :vacancy="vacancy"
            class="vacancyCard"/>
        </div>
      </section>
    </div>

    <site-footer />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import VacancyCardPlaceholder from '~/components/VacancyCardPlaceholder.vue'

export default {
  components: {
    Logo,
    SiteFooter,
    VacancyCard,
    VacancyCardPlaceholder
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
  }
}
</script>

<style lang="scss">
.pageCategory {
  .mainLayout {
    display: flex;

    & > header {
      margin-right: 3.1rem;
      width: 15.5rem;
    }
  }

  .topImage {
    position: absolute;
    right: 0;
    top: 0;
    height: 400px;
    max-width: 50%;
    object-fit: contain;
  }

  .mainNav {
    position: fixed;
  }

  .logo {
    padding-top: 2em;
  }

  .navTitle {
    color: #4d4d4d;
    font-size: 1rem;
    margin: 3.1rem 0 0.68rem;
  }

  .menu {
    padding: 0;

    li {
      list-style: none;
    }
  }

  .menuItem {
    font-size: 1rem;
    font-weight: bold;
    width: 15rem;
    padding: 0.4rem 1.1rem;
    color: #535461;
    margin-bottom: 0.68rem;
    display: inline-block;
  }

  .nuxt-link-active {
    background: #1e91c3;
    border-radius: 0.37rem;
    color: #fff;
  }

  .content {
    margin-top: 400px;
    flex: 1;
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

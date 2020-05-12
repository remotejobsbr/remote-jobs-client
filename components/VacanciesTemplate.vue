<template>
  <div class="vacanciesTemplate">
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
            <li>
              <nuxt-link
                class="menuItem"
                to="/ux">UX</nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="menuItem"
                to="/qa">QA</nuxt-link>
            </li>
            <!-- TODO: Wait for backend feature -->
            <!-- <li>
              <nuxt-link
                class="menuItem"
                to="/geral">Outros</nuxt-link>
            </li> -->
          </ul>

          <section>
            <h1 class="facebookLikeTitle">Curta nossa página no Facebook <br>e receba vagas por lá também:</h1>
            <facebook-like-button />
          </section>
        </nav>
      </header>

      <slot />
    </div>

    <site-footer />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import VacancyCardPlaceholder from '~/components/VacancyCardPlaceholder.vue'
import FacebookLikeButton from '~/components/FacebookLikeButton.vue'

export default {
  components: {
    Logo,
    SiteFooter,
    VacancyCard,
    VacancyCardPlaceholder,
    FacebookLikeButton
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
.vacanciesTemplate {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .mainLayout {
    @media screen and (min-width: 777px) {
      display: flex;
    }

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

    @media screen and (max-width: 979px) {
      display: none;
    }
  }

  .mainNav {
    @media screen and (min-width: 777px) {
      position: fixed;
    }
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
    background: #1a7ca7;
    border-radius: 0.37rem;
    color: #fff;
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

  .facebookLikeTitle {
    color: #4d4d4d;
    font-size: 0.85rem;
    margin: 1.5rem 0 0.5rem;
    font-weight: normal;
  }

  iframe {
    width: 100%;
  }
}
</style>

<template>
  <footer class="componentSiteFooter">
    <div class="container">
      <h1 class="author">
        Idealizado com
        <img
          src="~/assets/icons/green-heart.svg"
          alt="amor">
        por
        <a
          href="https://github.com/IsTheJack"
          target="_blank">Roberto Oliveira</a>
      </h1>

      <div class="externalLinkContainer">
        <div class="thanksTo linksSet">
          <p>Agradecimento especial aos reposítórios open source de vagas:</p>

          <ul class="linkList">
            <li><a
              href="https://github.com/frontendbr/vagas/issues"
              target="_blank">Front-End Brasil</a></li>
            <li><a
              href="https://github.com/react-brasil/vagas/issues"
              target="_blank">React Brasil</a></li>
            <li><a
              href="https://github.com/backend-br/vagas/issues"
              target="_blank">Backend-Brasil</a></li>
            <li><a
              href="https://github.com/soujava/vagas-java/issues"
              target="_blank">SouJava</a></li>
            <li><a
              href="https://github.com/phpdevbr/vagas/issues"
              target="_blank">PHP Dev Brasil</a></li>
            <li><a
              href="https://github.com/androiddevbr/vagas/issues"
              target="_blank">Android Dev BR</a></li>
            <li><a
              href="https://github.com/CocoaHeadsBrasil/vagas/issues"
              target="_blank">CocoaHeads Brasil</a></li>
          </ul>
        </div>

        <div class="recomendeds linksSet">
          <p>Quer a vaga da sua empresa aparecendo aqui? Basta cadastrar sua vaga em um destes repositórios  recomendados:</p>

          <ul class="linkList">
            <li><a
              href="https://github.com/frontendbr/vagas/issues"
              target="_blank">Front-End</a></li>
            <li><a
              href="https://github.com/backend-br/vagas/issues"
              target="_blank">Back-End</a></li>
            <li><a
              href="https://github.com/androiddevbr/vagas/issues"
              target="_blank">Desenvolvimento Mobile (Android)</a></li>
            <li><a
              href="https://github.com/CocoaHeadsBrasil/vagas/issues"
              target="_blank">Desenvolvimento Mobile (IOS)</a></li>
          </ul>
        </div>

        <a
          class="repositoryLink"
          href="https://github.com/remotejobsbr/remote-jobs-client#remote-jobs-client"
          target="_blank">
          <img
            src="~/assets/github-link.svg"
            alt="Link para o repositório">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss">
.componentSiteFooter {
  position: relative;
  background-color: #1e91c3;
  color: #fff;
  font-size: 0.65rem;
  padding-top: 1rem;
  padding-bottom: 6.25rem;

  .author {
    display: flex;
    justify-content: center;
    margin-bottom: 3.8rem;
    font-size: 0.65rem;
    font-weight: normal;

    img {
      margin: 0 0.5rem;
    }

    a {
      margin-left: 0.2rem;
      text-decoration: none;
      color: #fff;
    }
  }

  .externalLinkContainer {
    @media screen and (min-width: 570px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .linksSet {
    padding: 2em;

    p {
      max-width: 14rem;
    }
  }

  .linkList {
    margin: 1.5rem 0 0;
    padding: 0 0 0 1rem;
    border-left: 1px solid #fff;

    li {
      list-style: none;
      line-height: 1.3rem;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .thanksTo {
    flex: 1;
    margin-right: 3.5rem;
  }

  .recomendeds {
    flex: 2;
  }

  .repositoryLink {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>

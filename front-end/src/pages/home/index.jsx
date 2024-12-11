import './home.scss'
import ProfileImage from '../../components/ProfileImg'
import Title from '../../components/Title'
import Projects from '../../components/Projects'

function Home() {
  return (
    <div className="mainHome">
      <ProfileImage />
      <Title />
      <h2>Mes projets</h2>
      <Projects />
      <h2>Qui suis-je ? </h2>
      <div>
        J'ai 34 ans et je suis en reconversion, vous vous en doutez, dans le
        développement web 😊. Passionnée de musique, de danse et culture
        bretonne, j'ai fait mes premiers pas dans la vie active en tant que
        professeure de harpe celtique. Expérience qui aura duré un an, le temps
        de me rendre compte qu'à 18 ans, je n'avais pas envie de continuer à
        travailler quand les autres ne travaillent pas , et que j'avais envie de
        découvrir autre chose. J'ai donc repris une voie un peu plus
        conventionnelle, en intégrant un BTS Assistante de gestion PME/PMI, qui
        m'a conduit vers les Ressources Humaines. Après 3 ans d'alternance dans
        le cadre d'une licence et d'un master RH, j'ai occupé pendant 7 ans des
        postes d'Assistante RH en industries agro-alimentaire (coopérative
        laitière) et de production de cartons. Je dois avouer que les dernières
        années, je m'arrangeais toujours pour trouver des petites choses à
        développer à mon niveau (notamment sur Excel) pour faciliter mon
        quotidien. Je dois aussi avouer que je préfèrais les développer que les
        utiliser :). Puis je suis devenue maman. Un bouleversement dans ma vie.
        Les nuits blanches, les pleurs inconsolables qui durent des mois... une
        expérience bien plus difficile que ce que je m'étais imaginée. Alors on
        voit la vie différemment, on revoit nos priorités et surtout, j'ai envie
        de faire quelque chose qui me plaît vraiment. C'est le déclic : j'ai
        besoin de changement et j'ai vraiment envie de tenter le développement
        web ! C'est ainsi que je me suis lancée dans la formation Développeur
        web d'OpenClassroom !
      </div>

      <h2>Mes expériences</h2>
    </div>
  )
}

export default Home

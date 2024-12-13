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
      <div></div>

      <h2>Mes expériences</h2>
    </div>
  )
}

export default Home

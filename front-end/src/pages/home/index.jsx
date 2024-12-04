import './home.scss'
import ProfileImage from '../../components/ProfileImg'

function Home() {
  return (
    <div className="mainHome">
      <ProfileImage />
      <h1>Bienvenue sur mon portfolio</h1>
      <h2>Qui suis-je ?</h2>
      <h2>Mes projets</h2>
      <h2>Mes expériences</h2>
    </div>
  )
}

export default Home

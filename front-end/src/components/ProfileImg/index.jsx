import './profileImg.scss'
import profileImg from '../../assets/profil.jpg'

function ProfileImage() {
  return (
    <div className="profile-image-container">
      <img src={profileImg} alt="Profile" className="profile-image" />
    </div>
  )
}

export default ProfileImage

import './Profile.css';

function Profile({user}) {
    return (
        <div className="profile-container">

        <img src={user.image} alt="user.name" />
        <h2>{user.name}</h2>
        <h6>{user.email}</h6>
        <h6>{user.role}</h6>
        </div>
    );
    }

export default Profile;
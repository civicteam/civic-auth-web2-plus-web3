import { useUser } from "@civic/auth/react"

function ProfilePage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (!user) {
    return <div>Please log in to view your profile</div>
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      
      <div className="profile-info">
        <div className="avatar">
          {user.picture ? (
            <img src={user.picture} alt="User avatar" />
          ) : (
            <div className="avatar-placeholder">{user.username?.charAt(0) || 'U'}</div>
          )}
        </div>
        
        <div className="user-details">
          <h3>{user.username || 'User'}</h3>
          {user.email && <p>Email: {user.email}</p>}
          <p>User ID: {user.id}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

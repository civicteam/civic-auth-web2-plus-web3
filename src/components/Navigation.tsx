import { UserButton } from '@civic/auth/react'
import { useState } from 'react'

interface NavigationProps {
  onSelectProfile: () => void
  onSelectWeb3: () => void
}

function Navigation({ onSelectProfile, onSelectWeb3 }: NavigationProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'web3'>('profile')

  const handleProfileClick = () => {
    setActiveTab('profile')
    onSelectProfile()
  }

  const handleWeb3Click = () => {
    setActiveTab('web3')
    onSelectWeb3()
  }

  return (
    <nav className="navigation">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={handleProfileClick}
        >
          Profile
        </button>
        <button 
          className={`tab ${activeTab === 'web3' ? 'active' : ''}`}
          onClick={handleWeb3Click}
        >
          Tip Jar
        </button>
      </div>
      
      <div className="auth-section">
        <UserButton />
      </div>
    </nav>
  )
}

export default Navigation

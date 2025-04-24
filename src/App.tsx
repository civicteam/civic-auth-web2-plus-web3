import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import ProfilePage from './pages/ProfilePage'
import Web3Page from './pages/Web3Page'
import { CivicAuthProvider } from '@civic/auth/react'
import { Web3Provider } from './providers'
function App() {
  const [activePage, setActivePage] = useState<'profile' | 'web3'>('profile')
  const clientId = import.meta.env.VITE_CIVIC_CLIENT_ID || 'mock-client-id'

  return (
    <CivicAuthProvider clientId={clientId}>
        <div className="app-container">
          <header>
            <h1>Hybrid Web2/Web3 App</h1>
            <Navigation 
              onSelectProfile={() => setActivePage('profile')}
              onSelectWeb3={() => setActivePage('web3')}
            />
          </header>
          
          <main>
            {activePage === 'profile' ? <ProfilePage /> : <Web3Provider><Web3Page /></Web3Provider>}
          </main>
          
          <footer>
            <p>&copy; {new Date().getFullYear()} Hybrid App</p>
          </footer>
        </div>
    </CivicAuthProvider>
  )
}

export default App

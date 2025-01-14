import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import { SelectConversationContextProvider } from './context/SelectConversationContext.jsx'
import { SelectedMessagesContextProvider } from './context/SeletedMessagesContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <UserContextProvider>
        <SelectConversationContextProvider>
          <SelectedMessagesContextProvider>
            <SocketContextProvider>
      <App />
            </SocketContextProvider>
          </SelectedMessagesContextProvider>
        </SelectConversationContextProvider>          
      </UserContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

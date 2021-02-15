import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const projectID = '5ec79e2b-4c32-4d1d-a8ef-c25fb85d33eb'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  )
}

export default App

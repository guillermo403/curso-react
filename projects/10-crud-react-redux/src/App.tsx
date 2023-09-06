import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster
        position='top-center'
        richColors
        expand
      />
    </>
  )
}

export default App

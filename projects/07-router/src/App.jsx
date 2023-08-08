import { Suspense, lazy } from 'react'

import './App.css'
import { Router } from './Router'
import { Route } from './components/Route'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
// import AboutPage from './pages/About' // <--- Import estático
// import('./pages/About') // <--- Import dinámico
const LazyAboutPage = lazy(() => import('./pages/About')) // <--- La función lazy hace que hasta que no se vaya a renderizar el componente, no se importará.
// Al utilizar el lazy loading hay que envolver el componente en un Suspense
const LazyHomePage = lazy(() => import('./pages/Home'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App

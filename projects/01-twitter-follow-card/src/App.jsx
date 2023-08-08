import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  return (
    <section className='App'>
      <TwitterFollowCard
        initialIsFollowing
        username='midudev'
      >
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard
        username='elonmusk'
      >
        Elon Musk
      </TwitterFollowCard>
    </section>
  )
}

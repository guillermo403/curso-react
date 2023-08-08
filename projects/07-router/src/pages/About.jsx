import { Link, navigate } from '../components/Link'

export default function About () {
  return (
    <>
      <h1>About</h1>
      <p>Esto es el about</p>
      <Link onClick={() => navigate('/')}>Ir a home</Link>
    </>
  )
}

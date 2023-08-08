import { Link, navigate } from '../components/Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illum consequuntur aut, culpa hic reprehenderit maiores voluptatem necessitatibus reiciendis aperiam, corrupti, est non temporibus. Nihil, voluptatem. Voluptatibus, repudiandae voluptates. Nihil?</p>
      <Link onClick={() => navigate('about')}>Ir a about</Link>
    </>
  )
}

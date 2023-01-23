import Link from 'next/link'
import Carousel from '../components/Carousel'

export const getStaticProps = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
  const data = await res.json();
  return {
    props: { profiles: data }
  }
}

const Profiles = ({ profiles }) => {
  return (
    <div>
      <Carousel/>
      {profiles.map(profile => (
        <Link href={'/' + profile.username} key={profile.username}>
          <section class="feed-item">
            <h3>{ profile.username }</h3>
            </section>
        </Link>
      ))}
    </div>
  );
}
export default Profiles;
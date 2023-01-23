import Link from 'next/link'

export const getStaticProps = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
  
  const data = await res.json();
  return {
    props: { profiles: data }
  }
}

const Profiles = ({ profiles }) => {
  // console.log(ninjas)

  return (
    <div>
      {profiles.map(profile => (
        <Link href={'/' + profile.username} key={profile.username}>
            <h3>{ profile.username }</h3>
        </Link>
      ))}
    </div>
  );
}
 
export default Profiles;
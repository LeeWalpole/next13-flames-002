import styles from '@/styles/Feed.module.css'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'


import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// Loading from this tutorial
// https://stackoverflow.com/questions/69263469/next-js-getserversideprops-loading-state

export const getStaticProps = async () => {  
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles/');
  const data = await res.json();
  return {
    props: { profiles: data } 
  }
}

function Profiles({ profiles }) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    router.isReady && setIsLoading(false)
  }, []
    
  )
  return <>{isLoading ? <><h1>Loading Favs...</h1></> : 
  <div className={styles.feed}>
  {profiles.map(profile => (
    <div key={profile.username} className={styles.feedItem}>
    <Carousel images={profile.gallery} />
    <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar_profile={profile.avatar_profile} />
    </div>
  ))}
</div>
  }</>
}

export default Profiles;





import styles from '@/styles/Feed.module.css'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'
import FeedFooter from '../components/FeedFooter'
import { useEffect, useState } from 'react'

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles?grab=99?2');
        const data = await res.json();
        setProfiles(data);
      }
      fetchData();
    }, []);
  
    // Your component code goes here

        <>
        <h1>useEffect / useState</h1>
        <div className={styles.feed}>
          {profiles.map(profile => (
            <div key={profile.username} className={styles.feedItem}>
                      <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar_url={profile.avatar_url} />
            <Carousel images={profile.gallery} />
            <FeedFooter id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar_url={profile.avatar_url} />
            </div>
          ))}
        </div>
        </>
      );


  }

  export default Profiles;





import styles from '@/styles/Feed.module.css'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'



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
    <div className={styles.feed}>
      {profiles.map(profile => (
        <div key={profile.username} className={styles.feedItem}>
        <Carousel images={profile.gallery} />
        <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar={profile.avatar_url} />
        </div>
      ))}
    </div>
  );
}
export default Profiles;

/*
<section class="slider">
{profile.gallery.map((image) => (
  <figure key={image.url_full}>{image.url_full}</figure>
))}
</section>
*/

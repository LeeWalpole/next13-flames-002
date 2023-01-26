import { getProfiles } from './api/profiles';
import styles from '@/styles/Feed.module.css'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'

export default function Profiles({ profiles }) {
  return (
    <div className={styles.feed}>
      {profiles.map(profile => (
        <div key={profile.username} className={styles.feedItem}>
        <Carousel images={profile.gallery} />
        <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar_profile={profile.avatar_small} />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const profiles = await getProfiles();
  return { props: { profiles } };
}

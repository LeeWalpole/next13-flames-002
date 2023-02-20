import styles from '@/styles/Feed.module.css'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'
import FeedFooter from '../components/FeedFooter'
import useSWR from 'swr'

const fetcher = (url) => fetch(url, { cache: "no-cache" }).then(res => res.json());

// function useProfiles() {
//   const { data, error } = useSWR('https://www.thaiflames.app/backend/wp-json/data/v1/profiles?grab=99', fetcher);
//   return {
//     profiles: data,
//     isLoading: !error && !data,
//     isError: error
//   };
// }

function useProfiles() {
    const { data, error } = useSWR('https://www.thaiflames.app/backend/wp-json/data/v1/profiles?grab=99', fetcher, {
      refreshInterval: 5000 // poll every 5 seconds
    });
    return {
      profiles: data,
      isLoading: !error && !data,
      isError: error
    };
  }
  

const Profiles = () => {
  const { profiles, isLoading, isError } = useProfiles();

  if (isLoading) {
    return (
      <div class="loading-dots">
        <div class="loading-dots--dot"></div>
        <div class="loading-dots--dot"></div>
        <div class="loading-dots--dot"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching profiles</div>;
  }

  return (
    <>

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
};

export default Profiles;

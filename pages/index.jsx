import { useState, useEffect } from 'react';
import styles from '@/styles/Feed.module.css';
import Carousel from '../components/Carousel';
import FeedHeader from '../components/FeedHeader';
import FeedFooter from '../components/FeedFooter';

const PAGE_SIZE = 2;

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    function handleScroll() {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
      if (isAtBottom) {
        loadMoreData();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  async function loadMoreData() {
    const response = await fetch(`https://www.thaiflames.app/backend/wp-json/data/v1/profiles?offset=${currentProfileIndex * PAGE_SIZE}&limit=${PAGE_SIZE}`);
    const newData = await response.json();
    if (newData.length === 0) {
      return;
    }
    setData(prevData => [...prevData, ...newData]);
    setCurrentProfileIndex(prevIndex => prevIndex + 1);
  }

  return (
    <div>
      {data.map((profile, index) => (
        <div key={index} className={styles.feedItem}>
          <FeedHeader
            id={profile.id}
            username={profile.username}
            display_name={profile.display_name}
            bio_mini={profile.bio_mini}
            avatar_url={profile.avatar_url}
          />
          <Carousel images={profile.gallery} />
          <FeedFooter
            id={profile.id}
            username={profile.username}
            display_name={profile.display_name}
            bio_mini={profile.bio_mini}
            avatar_url={profile.avatar_url}
          />
        </div>
      ))}
    </div>
  );
}

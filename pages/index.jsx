import { useState, useEffect } from 'react';
import styles from '@/styles/Feed.module.css';
import Carousel from '../components/Carousel';
import FeedHeader from '../components/FeedHeader';
import FeedFooter from '../components/FeedFooter';

const PAGE_SIZE = 1;

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    function handleScroll() {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;
      if (isAtBottom && !isLoading) {
        loadMoreData();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  async function loadMoreData() {
    setIsLoading(true);
    const response = await fetch(`https://www.thaiflames.app/backend/wp-json/data/v1/profiles?offset=${currentProfileIndex}&limit=${PAGE_SIZE}`);
    const newData = await response.json();
    if (newData.length === 0) {
      setCurrentProfileIndex(-1);
      setIsLoading(false);
      return;
    }
    setData(prevData => [...prevData, ...newData]);
    setCurrentProfileIndex(prevIndex => prevIndex + 1);
    setIsLoading(false);
  }

  return (
    <div>
      {data.slice(0, currentProfileIndex + 1).map((item, index) => (
        <div key={item.id} className={styles.feedItem}>
          <FeedHeader
            id={item.id}
            username={item.username}
            display_name={item.display_name}
            bio_mini={item.bio_mini}
            avatar_url={item.avatar_url}
          />
          <Carousel images={item.gallery} />
          <FeedFooter
            id={item.id}
            username={item.username}
            display_name={item.display_name}
            bio_mini={item.bio_mini}
            avatar_url={item.avatar_url}
          />
        </div>
      ))}
      {isLoading && (
      <div class="loading-dots">
      <div class="loading-dots--dot"></div>
      <div class="loading-dots--dot"></div>
      <div class="loading-dots--dot"></div>
    </div>
      )}
      {currentProfileIndex === -1 && (
        <p>No more profile objects in array.</p>
      )}
    </div>
  );
}

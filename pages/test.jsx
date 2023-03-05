import { useState, useEffect } from 'react';
import styles from '@/styles/Feed.module.css';
import Carousel from '../components/Carousel';
import FeedHeader from '../components/FeedHeader';
import FeedFooter from '../components/FeedFooter';

const PAGE_SIZE = 3;

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
      if (isAtBottom && !isLoading && currentProfileIndex !== -1) {
        loadMoreData();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, currentProfileIndex]);

  async function loadMoreData() {
    setIsLoading(true);
    const response = await fetch(`https://www.thaiflames.app/backend/wp-json/data/v1/profiles?offset=${currentProfileIndex}&limit=${PAGE_SIZE}`);
    const newData = await response.json();
    if (newData.length === 0) {
      setCurrentProfileIndex(-1);
    } else {
      setData(prevData => [...prevData, ...newData]);
      setCurrentProfileIndex(prevIndex => prevIndex + 1);
    }
    setIsLoading(false);
  }

  return (
    <div>
      {data.length > 0 && currentProfileIndex !== -1 && (
        <div key={data[currentProfileIndex].id} className={styles.feedItem}>
          <FeedHeader
            id={data[currentProfileIndex].id}
            username={data[currentProfileIndex].username}
            display_name={data[currentProfileIndex].display_name}
            bio_mini={data[currentProfileIndex].bio_mini}
            avatar_url={data[currentProfileIndex].avatar_url}
          />
          <Carousel images={data[currentProfileIndex].gallery} />
          <FeedFooter
            id={data[currentProfileIndex].id}
            username={data[currentProfileIndex].username}
            display_name={data[currentProfileIndex].display_name}
            bio_mini={data[currentProfileIndex].bio_mini}
            avatar_url={data[currentProfileIndex].avatar_url}
          />
        </div>
      )}
      {currentProfileIndex === -1 && (
        <p>No more profile objects in array.</p>
      )}
    </div>
  );
  
}

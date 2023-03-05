// Import the necessary modules and components
import { useState, useEffect } from 'react';
import styles from '@/styles/Feed.module.css';
import Carousel from '../components/Carousel';
import FeedHeader from '../components/FeedHeader';
import FeedFooter from '../components/FeedFooter';

// Define a constant for the number of items to load at a time
const PAGE_SIZE = 2;

// Define the component as a default export
export default function MyComponent() {
  // Define state variables for the profile data, the index of the current profile,
  // and whether or not the component is currently loading more data
  const [data, setData] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Load more data when the component mounts
  useEffect(() => {
    loadMoreData();
  }, []);

  // Set up a scroll event listener to load more data when the user scrolls to the bottom
  useEffect(() => {
    // Define a function to handle the scroll event
    function handleScroll() {
      // Determine whether the user has scrolled to the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;
      // If the user has scrolled to the bottom and the component is not already loading more data,
      // load more data
      if (isAtBottom && !isLoading) {
        loadMoreData();
      }
    }

    // Add the event listener to the window
    window.addEventListener('scroll', handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  // Define an asynchronous function to load more data
  async function loadMoreData() {
    // Set the loading state to true
    setIsLoading(true);
    // Fetch the profile data from the backend API
    const response = await fetch(`https://www.thaiflames.app/backend/wp-json/data/v1/profiles?offset=${currentProfileIndex}&limit=${PAGE_SIZE}`);
    // Convert the response data to JSON format
    const newData = await response.json();
    // If the response data is empty, set the current profile index to -1,
    // set the loading state to false, and return
    if (newData.length === 0) {
      setCurrentProfileIndex(-1);
      setIsLoading(false);
      return;
    }
    // Otherwise, update the profile data state by appending the new data to the existing data
    setData(prevData => [...prevData, ...newData]);
    // Update the current profile index state
    setCurrentProfileIndex(prevIndex => prevIndex + 1);
    // Set the loading state to false
    setIsLoading(false);
  }

  // Render the component

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

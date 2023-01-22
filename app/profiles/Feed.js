import Link from 'next/link';
import Image from 'next/image';
import FeedHeader from './FeedHeader'

  async function getData() {
    const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const profiles = await getData();


  
  export default function Feed() {
    
    return (
        <>

<main class="main">
  <div>
  {profiles.map((profile) => (
    <div key={profile.id}>
  <Link href={`/profiles/${profile.username}`} >
      <img src={profile.avatar_url} alt={profile.avatar_alt} />
      </Link>
      <ul class="slider">
        {profile.gallery.map((image) => (
          <li key={image.url_full}>
            <img src={image.url_thumbnail} alt={image.alt} />
          </li>
        ))}
      </ul>
  
          <header class="feed-item-header">
          <div class="feed-item-left">
          <img class="feed-item-mugshot" src="https://64.media.tumblr.com/830cb58659a9dd02f54cd11fc0f21f28/e70c81ce9f956f50-09/s1280x1920/d3faa4cc2fdf0f0131a1b3f2a7a45c4ba856c589.jpg" />
          <Link href={`/profiles/${profile.username}`} >
              <div class="feed-item-name">
                  <p class="feed-item-display_name">{profile.display_name }</p>
                  <p class="feed-item-username">@{ profile.username }</p>
              </div>
            </Link>
          </div>
          <div class="feed-item-right">
       
          </div>
        </header>
        
        <footer class="feed-item-footer">
          <div class="feed-item-bio">{ profile.bio_mini }</div>
        </footer>
  
    </div>
  ))}
  </div>
    </main>

      </>
    )
  }


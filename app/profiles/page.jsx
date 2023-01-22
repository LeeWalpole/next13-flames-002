
// import Link from 'next/link';
// import Image from 'next/image';
import FeedHeader from './FeedHeader'
// import FeedCarousel from './FeedCarousel'
// import Feed from './Feed'
import TestProp from './TestProp'
import TestProp2 from './TestProp2'
// import FeedGallery from './FeedGallery'
import FeedCarousel from './FeedCarousel'



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



export default async function Profiles() {
  const profiles = await getData();

  return ( 
<main class="main">
  
<FeedCarousel/> 

  <div>
  {profiles.map((profile) => (
  <div key={profile.id}>

    {/* <FeedCarousel/> */}

        {/* <section class="slider">
          {profile.gallery.map((image) => (
            <figure key={image.url_full}>
              <FeedGallery gallery_url_thumbnail={image.url_thumbnail} gallery_alt={image.alt} />
            </figure>
          ))}
        </section> */}
        
        <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar="#" />

        <section class="slider">
{profile.gallery.map((image) => (
  <figure key={image.url_full}>{image.url_full}</figure>
))}
</section>





  </div>
  ))}
  </div>




<TestProp title="React 💙" />
<TestProp2 person="Name" size="10" />
</main>
  );
}








/*
async function getPosts() {
  const response = await fetch("https://www.flames.agency/api/profiles.json");
  return response.json();
}

export default async function Home() {
  const { profiles } = await getPosts();

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.display_name}</h2>
          <p>{profile.bio}</p>
          <img src={profile.avatar_url} alt={profile.avatar_alt} />
          <h3>Gallery</h3>
          <ul>
            {profile.gallery.map((image) => (
              <li key={image.url_full}>
                <img src={image.url_thumbnail} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  );
}
*/







/*
// WORKING: This Works
async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.id}</p> 
      ))}
    </div>
  );
}
*/

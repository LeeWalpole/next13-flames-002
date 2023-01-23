import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Tab1 from './tab1'
import Tab2 from './tab2'


// tab3
import dynamic from 'next/dynamic'

import ProfileGrid from '@/components/ProfileGrid'
export const getStaticPaths = async () => {
    const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(profile => {
      return {
        params: { username: profile.username.toString() }
      }
    })
   
    return {
      paths,
      fallback: false
    }
  }
    
  export const getStaticProps = async (context) => {
    const username = context.params.username;
    const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/' + username);
    const data = await res.json();
  
    return {
      props: { profile: data }
    }
  }
  




  const Details = ({ profile }) => {

    // Tabs Tutorial Here: https://dev.to/amrtcrypto/creating-linkable-tabs-in-nextjs-the-easy-way-17pg
    const router = useRouter()
    const { username } = router.query
    const [activeTab, setActiveTab] = useState('gallery')


    // tab 2
    const [activeTab2, setActiveTab2] = useState('tab1')

    // tab 3
    const [activeTab3, setActiveTab3] = useState('tab1')


return (
<>

<div class="profile-section">


{ /* Tabs Method 1 */}
<div>
<h1>Tab 1</h1>
      <Link href={`/${username}/gallery`} as={`/${username}/gallery`}>
        <div className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Gallery</div>
      </Link>
      <Link href="/tab2">
        <div className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>Tab 2</div>
      </Link>
    </div>




{ /* Tabs Method 2 */}
<div>
  <h1>Tab 2</h1>
      <button onClick={() => setActiveTab2('tab1')}>Tab 1</button>
      <button onClick={() => setActiveTab2('tab2')}>Tab 2</button>
      {activeTab2 === 'tab1' && <div>Tab 1 Content</div>}
      {activeTab2 === 'tab2' && <div>Tab 2 Content</div>}
    </div>



    { /* Tabs Method 3 */}
    <div>
    <h1>Tab 3</h1>
      <Link href="#tab1" onClick={() => setActiveTab3('tab1')}>
        <div>Tab 1</div>
      </Link>
      <Link href="#tab2" onClick={() => setActiveTab3('tab2')}>
        <div>Tab 2</div>
      </Link>
      {activeTab3 === 'tab1' && <Tab1 />}
      {activeTab3 === 'tab2' && <Tab2 />}
    </div>


<div class="profile-hero">
  <div class="profile-hero-image-row">
    <div class="profile-hero-icon">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </div>
    <div class="profile-hero-image iosRounded">
      <img src={ profile.avatar_url } />
    </div>
    <div class="profile-hero-icon profile-hero-icon-tip">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
    </div>
  </div>

  <div class="profile-hero-name-row">
    <h1 class="profile-hero-display_name">{ profile.display_name }</h1>
    <p class="profile-hero-bio">{ profile.bio_mini }</p>
  </div>
</div>

<ProfileGrid images={profile.gallery} />



</div>
</>
    );
  }
  
  export default Details;


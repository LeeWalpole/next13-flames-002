// import Link from 'next/link'
import { useState } from 'react'
// import { useRouter } from 'next/router'
// import Tab1 from './tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Image from 'next/image'


// tab3
// import dynamic from 'next/dynamic'

import ProfileGrid from '@/components/ProfileGrid'
export const getStaticPaths = async () => {
    const res = await fetch('https://www.flames.agency/api/profiles.json');
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
    // const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/' + username);
    const res = await fetch('https://www.flames.agency/api/' + username +'.json');
    const data = await res.json();
  
    return {
      props: { profile: data }
    }
  }
  




  const Details = ({ profile }) => {
    // tab 2
    const [activeTab, setActiveTab] = useState('tab1')

return (
<>

<div className="profile-section">



<div className="profile-hero">
  <div className="profile-hero-image-row">
    <div className="profile-hero-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

    </div>
    <div className="profile-hero-image iosRounded">
      <Image src={ profile.avatar_url } alt="Alt Text" height="500" width="500" />
    </div>
    <div className="profile-hero-icon profile-hero-icon-tip">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    </div>
  </div>

  <div className="profile-hero-name-row">
    <h1 className="profile-hero-display_name">{ profile.display_name }</h1>
    <p className="profile-hero-bio">{ profile.bio_mini }</p>
  </div>
</div>


<section className="profile-tabs">
<ul className="profile-tabs-menu">
  <li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>
</li>
  <li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

  </li>
  <li className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

  </li>
</ul>
      {activeTab === 'tab1' && <div><ProfileGrid images={profile.gallery} /></div>}
      {activeTab === 'tab2' && <div><Tab2/></div>}
      {activeTab === 'tab3' && <div><Tab3/></div>}
      </section>

</div>
</>
    );
  }
  
  export default Details;


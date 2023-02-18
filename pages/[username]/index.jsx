import Link from 'next/link'
import { useState } from 'react'
// import { useRouter } from 'next/router'
// import Tab1 from './tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Image from 'next/image'



// Modals Step #1. Import hook and component
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal'


// const serverSideProps = {
//   avatar: [
//     {
//       url: "http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.thaiflames.app%2Fbackend%2Fwp-content%2Fuploads%2Fcaptain-marvel-0-150x150.webp&w=384&q=75",
//       alt: "Image 1",
//       width: 72,
//       height: 72,
//       placeholder: "/images/icons/icon-72x72.png"
//     },
//   ]
// }


// tab3
// import dynamic from 'next/dynamic'

import ProfileGrid from '@/components/ProfileGrid'
import ProfileLinks from '@/components/ProfileLinks'

/*
export const getStaticPaths = async () => {
    const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles?grab=99?2', {
      cache: "no-cache"
    });
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
*/


    // getStaticProps
    // getServerSideProps
  export const getServerSideProps = async (context) => {
    const username = context.params.username;
    // const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/' + username);
    const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles/' + username, {
      cache: "no-cache"
    })
    const data = await res.json();
  
    return {
      props: { profile: data }
    }
  }
  




  const Details = ({ profile }) => {
    // tab 2
    const [activeTab, setActiveTab] = useState('tab1')

        // Step 2. Add this to hook up with hooks/useModal.js 
        const { modals, handleModal } = useModal();

return (
<>

<div className="profile-section">



<div className="profile-hero">
  <div className="profile-hero-image-row">
    <div className="profile-hero-icon" onClick={() => handleModal("modalFavorite")}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

    </div>

    <Modal id="modalFavorite" isOpen={modals["modalFavorite"]} setIsOpen={handleModal}>
            <header class="popup-header">
                <h5 class="popup-title">Coming soon 🙂</h5>
                <p class="popup-description">You will be able to save your favorites in March 2023.</p>
                <button onClick={() => handleModal("modalFavorite")}>Go back.</button>
            </header>
      </Modal>



    <div className="profile-hero-image iosRounded">
      <Image src={ profile.avatar_url } alt={profile.display_name} height="150" width="150" />
    </div>

    <div className="profile-hero-icon" onClick={() => handleModal("modalFavorite2")}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


    </div>

    <Modal id="modalFavorite2" isOpen={modals["modalFavorite2"]} setIsOpen={handleModal}>
            <header class="popup-header">
                <h5 class="popup-title">Share { profile.display_name } with the world...</h5>
                <p class="popup-description"></p>
                <div class="buttons">
                  <a onClick={() => handleModal("modalFavorite2")} class="button">Copy Link</a>
                  <a onClick={() => handleModal("modalFavorite2")} class="button ghost-button">Copy Link</a>
                </div>
            </header>
      </Modal>
   

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
      {activeTab === 'tab1' && <div>
        
      <ul className="profile-socials">

      {profile?.instagram && <p>Instagram: </p>}
        <li>
          <Link href="`https://www.instagram.com/`+{profile.instagram}">

          </Link>
        </li>
        </ul>

      
      {profile?.tiktok && <p>Tiktok: {profile.tiktok}</p>}
      {profile?.twitter && <p>Twitter: {profile.twitter}</p>}
      {profile?.onlyfans && <p>Onlyfans: {profile.onlyfans}</p>}
      {profile?.twitch && <p>Twitch: {profile.twitch}</p>}
      {profile?.youtube && <p>youtube: {profile.youtube}</p>}



        <ProfileGrid images={profile.gallery} /></div>}
      {activeTab === 'tab2' && <div><Tab2/>
      
      <ProfileLinks links={profile.links} socials={profile.instagram} />
      
      </div>}
      {activeTab === 'tab3' && <div><Tab3/></div>}
      </section>

</div>
</>
    );
  }
  
  export default Details;


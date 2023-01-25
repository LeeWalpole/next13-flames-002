import styles from '@/styles/Feed.module.css'
// import Link from 'next/link'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'

// Modals Step #1. Import hook and component
import useModal from '../hooks/useModal'
import Modal from '../components/Modal'



export const getStaticProps = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://www.flames.agency/api/profiles.json');
  const data = await res.json();
  return {
    props: { profiles: data } 
  }
}

const Profiles = ({ profiles }) => {

      // Step 2. Add this to hook up with hooks/useModal.js 
      const { modals, handleModal } = useModal();

  
  
  return (

    <>

          <div>
          <button onClick={() => handleModal("modal1")}>Open modal 1</button>
        <Modal id="modal1" isOpen={modals["modal1"]} setIsOpen={handleModal}>
          <div class="popup-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          </div>
            <header class="popup-header">
                <h5 class="popup-title">Modal Title</h5>
                <p class="popup-description">Modal Text</p>
            </header>
      </Modal>
    </div>

{/* 
   <div>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal id="modal1" isOpen={isModalOpen}>
        <h1>Modal Content</h1>
        <button onClick={() => setIsModalOpen(false)}>Close modal</button>
      </Modal>
      <button onClick={() => setIsModalOpen2(true)}>Open modal 2</button>
      <Modal id="modal2" isOpen={isModalOpen2}>
        <h1>Modal Content 2</h1>
        <button onClick={() => setIsModalOpen2(false)}>Close modal 2</button>
      </Modal>
    </div> */}

    <div className={styles.feed}>
      {profiles.map(profile => (
        <div key={profile.username} className={styles.feedItem}>
        <Carousel images={profile.gallery} />
        <FeedHeader id={profile.id} username={profile.username} display_name={profile.display_name} bio_mini={profile.bio_mini} avatar={profile.avatar_url} />
        </div>
      ))}
    </div>

    </>


  );
}
export default Profiles;

/*
<section className="slider">
{profile.gallery.map((image) => (
  <figure key={image.url_full}>{image.url_full}</figure>
))}
</section>
*/
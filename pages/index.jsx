import styles from '@/styles/Feed.module.css'
// import Link from 'next/link'
import Carousel from '../components/Carousel'
import FeedHeader from '../components/FeedHeader'
import Modal from '../components/Modal'
import { useState } from 'react'


export const getStaticProps = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://www.flames.agency/api/profiles.json');
  const data = await res.json();
  return {
    props: { profiles: data } 
  }
}

const Profiles = ({ profiles }) => {

  const [modals, setModals] = useState({});
  const handleModal = (id) => {
    setModals(prevModals => {
      return {
        ...prevModals,
        [id]: !prevModals[id]
      }
    });

  }
  
  return (

    <>

<div>
      <button onClick={() => handleModal("modal1")}>Open modal 1</button>
      <Modal id="modal1" isOpen={modals["modal1"]} setIsOpen={handleModal}>
        <h1>Modal Content 1</h1>
        <button onClick={() => handleModal("modal1")}>Close modal 1</button>
      </Modal>
      <button onClick={() => handleModal("modal2")}>Open modal 2</button>
      <Modal id="modal2" isOpen={modals["modal2"]} setIsOpen={handleModal}>
        <h1>Modal Content 2</h1>
        <button onClick={() => handleModal("modal2")}>Close modal 2</button>
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

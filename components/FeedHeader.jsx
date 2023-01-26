import Image from 'next/image';
import styles from '@/styles/Feed.module.css'
import Link from 'next/link';

/* Temporary Modal Imports */
import useModal from '../hooks/useModal'
import Modal from '../components/Modal'
// import { useState } from 'react'


export default function ProfileGallery ({ username, display_name, bio_mini, avatar_url }) {


  const { modals, handleModal } = useModal();



    return ( <>
<header className={styles.feedHeader}>
<div className={styles.left}>
<Link href={`/${username}`} >
  <Image className={styles.avatar} src={avatar_url} height="32" width="32" alt={display_name} />
  </Link>
  <Link href={`/${username}`} >
    <div className={styles.name}>
        <p className={styles.display_name}>{display_name }</p>
        <p className={styles.username}>@{ username }</p>
    </div>
  </Link>

</div>
<div className={styles.right}>
      <ul className="feed-item-icons">
    <li className={styles.icon} onClick={() => handleModal("modalFavorite")}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
    </li>

<Modal id="modalFavorite" isOpen={modals["modalFavorite"]} setIsOpen={handleModal}>
            <header class="popup-header">
                <h5 class="popup-title">Coming soon 🙂</h5>
                <p class="popup-description">You will be able to save your favorites in March 2023.</p>
                <button onClick={() => handleModal("modalFavorite")}>Go back.</button>
            </header>
      </Modal>



</ul>

</div>
</header>

<footer className={styles.footer}>
<div className={styles.bio}>{ bio_mini }</div>
</footer>

    </>
    )
  }

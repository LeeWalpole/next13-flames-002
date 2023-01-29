import Image from 'next/image';
import styles from '@/styles/Feed.module.css'
import Link from 'next/link';

/* Temporary Modal Imports */
import useModal from '../hooks/useModal'
import Modal from '../components/Modal'
// import { useState } from 'react'


export default function FeedFooter ({ username, display_name, bio_mini, avatar_url }) {


  const { modals, handleModal } = useModal();



    return ( <>
<header className={styles.feedHeader}>

<footer className={styles.footer}>
<div className={styles.bio}>{ bio_mini }</div>
</footer>


</header>



    </>
    )
  }

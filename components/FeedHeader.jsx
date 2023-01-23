import styles from '@/styles/Feed.module.css'
import Link from 'next/link';
export default function ProfileGallery ({ username, display_name, bio_mini, avatar }) {
    return ( <>
<header className={styles.feedHeader}>
<div className={styles.left}>
<Link href={`/profiles/${username}`} >
  <img className={styles.avatar} src={avatar} />
  </Link>
  <Link href={`/profiles/${username}`} >
    <div className={styles.name}>
        <p className={styles.display_name}>{display_name }</p>
        <p className={styles.username}>@{ username }</p>
    </div>
  </Link>
</div>
<div className={styles.right}>

</div>
</header>

<footer className={styles.footer}>
<div className={styles.bio}>{ bio_mini }</div>
</footer>
    
    </>
    )
  }

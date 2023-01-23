import styles from '@/styles/NavBottom.module.css'
import Link from 'next/link';
export default function NavBottom () {
    return ( <>
    <nav className={styles.navBottom}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/favorites/">Favorites</Link></li>
            <li><Link href="/profile-1/">Profile</Link></li>
        </ul>
    </nav>
    </>
    )
  }
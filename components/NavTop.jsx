
import styles from '@/styles/NavTop.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function NavTop () {
    return ( <>
    <nav className={styles.navTop}>
        <ul>
            <li><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg></Link></li>
            <li><Link href="/favorites/"><Image src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-logo-horizontal-white.png?h=100" className={styles.logo} height="500" width="500" alt="Alt" /></Link></li>
            <li><Link href="/profile-1/">          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></Link></li>
        </ul>
    </nav>
    </>
    )
  }
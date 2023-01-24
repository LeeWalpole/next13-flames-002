import styles from '@/styles/NavLeft.module.css';
import Link from 'next/link';
import Image from 'next/image';
/* */
export default function NavLeft () {
    return ( <>

<div className={styles.navLeft}>
    <nav className={styles.sticky}>

        <Link href="/">
<Image className={styles.avatar} src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-agency-icon-large.png?fit=640%2C640&ssl=1" height="500" width="500" alt="Alt" />
        </Link>

        <ul className={styles.menu}>

          <li>
          <Link href="/">
          Home
          </Link>
          </li>

          <li>
          <Link href="/favourites/">
          Link here 1
          </Link>
          </li>

          <li>
          <Link href="/profile-2">
          Captain Marvel
          </Link>
          </li>

        </ul>
      </nav>
    </div>
    </>
    )
  }
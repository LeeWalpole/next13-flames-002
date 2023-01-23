import styles from '@/styles/NavLeft.module.css';
import Link from 'next/link';
/* */
export default function NavLeft () {
    return ( <>

<div className={styles.navLeft}>
    <nav className={styles.sticky}>

        <Link href="/">
          <img src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-agency-icon-large.png?fit=640%2C640&ssl=1" className={styles.logo} />
        </Link>

        <ul className={styles.menu}>

          <li>
          <Link href="/">
          Link here 1
          </Link>
          </li>

          <li>
          <Link href="/">
          Link here
          </Link>
          </li>

        </ul>
      </nav>
    </div>
    </>
    )
  }
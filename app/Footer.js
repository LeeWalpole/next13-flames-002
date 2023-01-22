import Link from 'next/link';
export default function Footer() {
    return (
        <nav class="nav-bottom">
        <ul>
            <li class="sidenav-item">
            <Link href="/">Homepage</Link>
            </li>
            <li class="sidenav-item">
            <Link href="/profiles">Profiles</Link>
            </li>
        </ul>
    </nav>
    )
  }
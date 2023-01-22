import Link from 'next/link';
export default function SideLeft() {
    return (
        <div class="sidebar side-sticky">
        <section class="side-left sidenav">
        <Link href="/">
            <img src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-agency-icon-large.png?fit=640%2C640&ssl=1" class="sidenav-logo" />
          </Link>

          <ul class="sidenav-menu">
    
            <li class="sidenav-item">
            <Link href="/">Homepage</Link>
            </li>
    
            <li class="sidenav-item">
            <Link href="/profiles">Profiles</Link>
            </li>
    
            <li class="sidenav-item">
            <Link href="/favourites">Favourites</Link>
            </li>
    
            </ul>
    
        </section>
    </div>
    )
  }



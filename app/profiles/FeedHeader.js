import Link from 'next/link';
export default function ProfileGallery ({ username, display_name, bio_mini, avatar }) {
    return ( <>
<header class="feed-item-header">
<div class="feed-item-left">
<img class="feed-item-mugshot" src={avatar} />
<Link href={`/profiles/${username}`} >
  
    <div class="feed-item-name">
        <p class="feed-item-display_name">{display_name }</p>
        <p class="feed-item-username">@{ username }</p>
    </div>
  </Link>
</div>
<div class="feed-item-right">

</div>
</header>

<footer class="feed-item-footer">
<div class="feed-item-bio">{ bio_mini }</div>
</footer>
    
    </>
    )
  }

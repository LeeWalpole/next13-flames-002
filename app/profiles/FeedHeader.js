import Link from 'next/link';
export default function FeedHeader() {
    return (
        <>
        <header class="feed-item-header">
        <div class="feed-item-left">
        <img class="feed-item-mugshot" src="https://64.media.tumblr.com/830cb58659a9dd02f54cd11fc0f21f28/e70c81ce9f956f50-09/s1280x1920/d3faa4cc2fdf0f0131a1b3f2a7a45c4ba856c589.jpg" />
          <Link href="`/profiles/{profile.slug}`">
            <div class="feed-item-name">
                <p class="feed-item-display_name">{profile.display_name }</p>
                <p class="feed-item-username">@{ profile.username }</p>
            </div>
          </Link>
        </div>
        <div class="feed-item-right">
     
        </div>
      </header>
      
      <footer class="feed-item-footer">
        <div class="feed-item-bio">{ profile.bio_mini }</div>
      </footer>
      </>
    )
  }
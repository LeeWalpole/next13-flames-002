import Image from 'next/image'
export default function ProfileGallery ({ gallery_url_thumbnail, gallery_alt }) {
    return (
      <figure>
          <Image src={gallery_url_thumbnail} alt={gallery_alt} width="500" height="500" />
      </figure>
    );
  }
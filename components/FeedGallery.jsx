import Image from 'next/image'
export default function ProfileGallery ({ grid_desktop, gallery_alt }) {
    return (
      <figure>
          <Image src={grid_desktop} alt={gallery_alt} width="500" height="500" />
      </figure>
    );
  }
import Image from 'next/image'
export default function ProfileGallery ({ grid_desktop, gallery_alt }) {
    return (
      <figure>
             <Image src={image.gallery_image_url} alt={image.gallery_image_alt} width={image.gallery_image_width} height={image.gallery_image_height}   />
      </figure>
    );
  }
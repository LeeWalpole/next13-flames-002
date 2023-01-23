  export default function ProfileGallery ({ gallery_url_thumbnail, gallery_alt }) {
    return (
      <figure>
          <img src={gallery_url_thumbnail} alt={gallery_alt} />
      </figure>
    );
  }
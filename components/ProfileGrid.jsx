  export default function ProfileGrid ({images}) {
    return (
        <div class="grid-3">    
        {images.map((image, index) => (
        <figure key={index} class="grid-item grid-item-4x5">
              <img src={image.url_full} />
          </figure>
             ))}
      </div>
    );
  }
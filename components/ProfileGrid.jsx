import Image from "next/image";

  export default function ProfileGrid ({images}) {
    return (
        <div className="grid-3">    
        {images.map((image, index) => (
        <figure key={index} className="grid-item grid-item-4x5">
              <Image src={image.grid_desktop_image} height="200" width="250" alt="Flames Agency" unoptimized />
          </figure>
             ))}
      </div>
    );
  }
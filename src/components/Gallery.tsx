import getGalleryImages from "../utils/getGalleryImages";

function Gallery({ galleryName }: { galleryName: string }) {
  const galleryImages = getGalleryImages(galleryName);

  return galleryImages.map((url) => <img src={url} />);
}

export default Gallery;

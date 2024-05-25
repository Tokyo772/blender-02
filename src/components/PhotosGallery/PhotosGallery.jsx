import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} avg_color={avg_color} alt={alt} src={src} />
      ))}
    </Grid>
  );
};

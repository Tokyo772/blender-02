import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        const data = await getPhotos(query, page);
        setPhotos(data.photos);
      } catch (e) {
        console.log(e);
      }
    };
    getImages();
  }, [page, query]);

  const handleQuery = query => {
    setQuery(query);
  };

  return (
    <>
      <Form onSubmit={handleQuery} />
      {photos.length > 0 && <PhotosGallery photos={photos} />}
      {photos.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
    </>
  );
};

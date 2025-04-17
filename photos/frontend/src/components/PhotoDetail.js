import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../services/photoApi';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhoto(id).then(res => setPhoto(res.data));
  }, [id]);

  if (!photo) return <p>載入中...</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={`http://localhost:8080${photo.url}`} alt={photo.title} style={{ width: '400px' }} />
      <p>{photo.description}</p>
    </div>
  );
};

export default PhotoDetail;

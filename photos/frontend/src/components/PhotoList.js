import React, { useEffect, useState } from 'react';
import { getAllPhotos, deletePhoto } from '../services/photoApi';

const PhotoList = ({ onEdit = () => {}, refresh }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, [refresh]);

  const fetchPhotos = async () => {
    try {
      const res = await getAllPhotos();
      setPhotos(res.data);
    } catch (error) {
      console.error('載入照片失敗：', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('確認刪除這張相片？')) {
      await deletePhoto(id);
      fetchPhotos();
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>所有相片</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px',
              backgroundColor: '#fff',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.05)',
            }}
          >
            <img
              src={`http://localhost:8080${photo.url}`}
              alt={photo.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '6px',
              }}
            />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => onEdit(photo)}>✏️ 編輯</button>
              <button onClick={() => handleDelete(photo.id)}>🗑️ 刪除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

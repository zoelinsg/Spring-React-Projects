import React, { useState, useEffect } from 'react';
import { createPhoto, updatePhoto, uploadImage } from '../services/photoApi';

const PhotoForm = ({ editingPhoto, onSaveSuccess }) => {
  const [photo, setPhoto] = useState({ title: '', description: '', url: '' });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (editingPhoto) {
      setPhoto(editingPhoto);
      setPreview(`http://localhost:8080${editingPhoto.url}`);
    }
  }, [editingPhoto]);

  const handleChange = (e) => {
    setPhoto({ ...photo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = photo.url;
    if (imageFile) {
      const res = await uploadImage(imageFile);
      url = res.data;
    }

    if (photo.id) {
      await updatePhoto(photo.id, { ...photo, url });
      alert('相片已更新！');
    } else {
      await createPhoto({ ...photo, url });
      alert('相片已新增！');
    }

    setPhoto({ title: '', description: '', url: '' });
    setImageFile(null);
    setPreview('');
    onSaveSuccess(); // 重新載入列表
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{photo.id ? '編輯相片' : '新增相片'}</h2>
      <div>
        <label>標題：</label>
        <input type="text" name="title" value={photo.title} onChange={handleChange} required />
      </div>
      <div>
        <label>描述：</label>
        <textarea name="description" value={photo.description} onChange={handleChange} />
      </div>
      <div>
        <label>{photo.id ? '更換圖片（選填）' : '上傳圖片'}：</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      {preview && <img src={preview} alt="預覽" style={{ width: '200px', marginTop: '1rem' }} />}
      <br />
      <button type="submit">{photo.id ? '儲存變更' : '上傳相片'}</button>
    </form>
  );
};

export default PhotoForm;

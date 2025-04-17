import React, { useState } from 'react';
import PhotoForm from '../components/PhotoForm';

const UploadPage = () => {
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const reloadList = () => {
    setEditingPhoto(null);
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className="upload-page">
      <div className="form-card">
        <PhotoForm editingPhoto={editingPhoto} onSaveSuccess={reloadList} />
      </div>
    </div>
  );
};

export default UploadPage;

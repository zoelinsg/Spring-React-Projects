import React, { useState } from 'react';
import PhotoForm from '../components/PhotoForm';
import PhotoList from '../components/PhotoList';

const Home = () => {
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const reloadList = () => {
    setEditingPhoto(null); 
    setRefreshFlag(!refreshFlag); 
  };

  return (
    <div>
      {editingPhoto && (
        <div className="form-card" style={{ marginBottom: '2rem' }}>
          <PhotoForm editingPhoto={editingPhoto} onSaveSuccess={reloadList} />
        </div>
      )}
      <PhotoList onEdit={setEditingPhoto} refresh={refreshFlag} />
    </div>
  );
};

export default Home;

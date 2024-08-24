import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client'; 

function EditCreator({ onEditCreator, onDeleteCreator }) {
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
   
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators') 
        .select('*')
        .eq('id', id)
        .single(); 


        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageUrl(data.imageURL || ''); 

    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCreator = {
      name,
      url,
      description,
      imageURL: imageUrl || null, 
    };

    onEditCreator(id, updatedCreator); 
  };

  const handleDelete = () => {
    onDeleteCreator(id); 
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Edit Content Creator</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>URL:</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image URL (optional):</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Update Creator</button>
        <button type="button" onClick={handleDelete} style={styles.deleteButton}>Delete Creator</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    
    
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    height: '80px',
  },
  submitButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  deleteButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default EditCreator;

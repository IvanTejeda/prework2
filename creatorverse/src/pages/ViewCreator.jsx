import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../client';

function ViewCreator() {
  const { id } = useParams(); 
  const [creator, setCreator] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators') 
        .select('*')
        .eq('id', id) 
        .single();

      if (error) {
        console.error('Error fetching content creator:', error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]); 

  if (!creator) {
    return <p>Loading content creator...</p>;
  }

  return (
    <div>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
        Back
        </button> 
        <div>
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" >
            Visit Channel
        </a>
        </div>
    </div>
  );
}
const styles = {
backButton: {
    marginBottom: '10px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'inline-block',
  },
}
export default ViewCreator;
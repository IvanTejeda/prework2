import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function ShowCreators({ creators }) {
  return (
    <div>
      <div style={styles.header}>
        <h1>Content Creators</h1>
        <Link to="/add" style={styles.addButton}>
          Add a Content Creator
        </Link>
      </div>
      {creators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        <div style={styles.cardsContainer}>
          {creators.map((creator) => (
            <Card
              key={creator.id}
              id={creator.id}
              name={creator.name}
              description={creator.description}
              url={creator.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#1e90ff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
};

export default ShowCreators;

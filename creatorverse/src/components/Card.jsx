import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, name, description, url }) {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <Link to={`/creator/${id}`} style={styles.link}>
          More Info
        </Link>
        <br />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Visit Channel
        </a>
        <br />
        <Link to={`/edit/${id}`} style={styles.link}>
          Edit
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '10px',
    width: '250px',
    height: '300px', 
    marginBottom: '15px',
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '18px',
    marginBottom: '10px',
    overflow: 'hidden', 
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', 
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal', 
    wordWrap: 'break-word', 
    flexGrow: 1, 
  },
  link: {
    color: '#1e90ff',
    textDecoration: 'none',
    marginBottom: '5px',
  },
};

export default Card;

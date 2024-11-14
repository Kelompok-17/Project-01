import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <nav style={{ ...styles.nav, width: isOpen ? '120px' : '40px' }}>
      <button onClick={toggleNavbar} style={styles.toggleButton}>
        {isOpen ? '<=' : '☰'}
      </button>
      {isOpen && (
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/register" style={styles.link}>Register</Link></li>
          <li><Link to="/login" style={styles.link}>Login</Link></li>
          <li><Link to="/facilities" style={styles.link}>Fasilitas</Link></li>
          <li><Link to="/visimisi" style={styles.link}>Visi & Misi</Link></li>
          <li><Link to="/teachers" style={styles.link}>GURU</Link></li>
          <li><Link to="/staffs" style={styles.link}>Staff</Link></li>
        </ul>
      )}
    </nav>
  );
};

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.layout}>
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <main style={{ ...styles.mainContent, marginLeft: isOpen ? '130px' : '50px' }}>
        {children}
      </main>
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
  },
  nav: {
    backgroundColor: '#333',
    height: '100vh',
    color: 'white',
    overflowX: 'hidden',
    transition: 'width 0.5s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  toggleButton: {
    fontSize: '1.2em',
    marginBottom: '20px',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  navLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 0',
    width: '100%',
    textAlign: 'center',
    transition: 'background-color 0.2s ease',
  },
  mainContent: {
    padding: '20px',
    transition: 'margin-left 0.3s',
    width: '100%',
  },
};

// Example usage
const App = () => (
  <Layout>
    <h1>Welcome to the Main Content Area</h1>
    <p>This is where your main content goes.</p>
  </Layout>
);

export default App;

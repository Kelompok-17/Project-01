import React, { useState } from 'react';

// Header component
const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.headerTitle}>Register an Account</h1>
    <p style={styles.headerSubtitle}>Join us and enjoy exclusive features!</p>
  </header>
);

// Registration Form component
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error when user starts typing
    setSuccess(''); // Clear success message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.dateOfBirth) {
      setError('All fields are required');
      return;
    }

    // Simulate successful registration
    setSuccess('Registration successful!');
    console.log('Registered:', formData);

    // Clear form after successful submission
    setFormData({
      username: '',
      email: '',
      password: '',
      dateOfBirth: ''
    });
  };

  return (
    <div style={styles.page}>
      <Header />

      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
        {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

// Inline styling for the components
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f9fc',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333'
  },
  headerSubtitle: {
    fontSize: '16px',
    color: '#666'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  message: {
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center'
  },
  error: {
    color: 'red'
  },
  success: {
    color: 'green'
  }
};

export default RegisterForm;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        secretKey: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            await axios.post(`${apiEndpoint}/admin/signup`, formData);
            alert('Admin registered successfully! Please login.');
            navigate('/admin-login');
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="registration-container" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '20px'
        }}>
            <div className="glass-card" style={{ 
                maxWidth: '450px', 
                width: '100%', 
                padding: '2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '1.5rem' }}>Admin Registration</h2>
                {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>{error}</p>}
                <form onSubmit={handleSignup}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ color: '#ccc' }}>Full Name</label>
                        <input 
                            type="text" 
                            className="form-input" 
                            value={formData.name} 
                            onChange={(e) => setFormData({...formData, name: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ color: '#ccc' }}>Email</label>
                        <input 
                            type="email" 
                            className="form-input" 
                            value={formData.email} 
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ color: '#ccc' }}>Password</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            value={formData.password} 
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ color: '#ffcc00' }}>Secret Admin Key</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            style={{ borderColor: '#ffcc00' }}
                            value={formData.secretKey} 
                            onChange={(e) => setFormData({...formData, secretKey: e.target.value})} 
                            required 
                            placeholder="Enter the master secret key"
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{ width: '100%' }}>Register Admin</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1rem', color: '#fff' }}>
                    Already have account? <Link to="/admin-login" style={{ color: '#00ccff' }}>Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminSignup;

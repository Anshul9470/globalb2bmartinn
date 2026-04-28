import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Buyers/AuthContext';
import './Dashboard.css'; // Reusing dashboard styles for glassmorphism

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUserId, setUserRole, setUserName } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            const response = await axios.post(`${apiEndpoint}/admin/login`, { email, password });
            setUserId(response.data.user._id);
            setUserRole('admin');
            setUserName(response.data.user.name || "Admin");
            navigate('/admin-dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
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
                maxWidth: '400px', 
                width: '100%', 
                padding: '2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '1.5rem' }}>Admin Login</h2>
                {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ color: '#ccc' }}>Email</label>
                        <input 
                            type="email" 
                            className="form-input" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="Admin Email"
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ color: '#ccc' }}>Password</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{ width: '100%' }}>Login as Admin</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1rem', color: '#fff' }}>
                    New Admin? <Link to="/admin-signup" style={{ color: '#00ccff' }}>Signup here</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

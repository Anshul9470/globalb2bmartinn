// import React, { useState } from 'react';
// import './login.css'; // Import CSS file for styling
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Buyers/AuthContext';
import { loginUser, sendOTP, resetPassword } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const navigate = useNavigate();
    const { setUserId, setUserName, setUserRole, userRole } = useAuth();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await loginUser(email, password);
            setUserId(data.user._id);
            setUserName(data.user.name || data.user.companyName || "User");
            setUserRole(data.user.role || 'seller');
            navigate(`/dashboard?id=${data.user._id}`);
        } catch (error) {
            setError(error.message || 'Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await sendOTP(email);
            setIsOtpSent(true);
        } catch (error) {
            setError('Failed to send OTP. Please enter your registered email.');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        setLoading(true);
        try {
            await resetPassword(email, otp, newPassword, confirmNewPassword);
            setIsForgotPassword(false);
            setIsOtpSent(false);
            setEmail('');
            setOtp('');
            setNewPassword('');
            setConfirmNewPassword('');
            setError('✅ Password reset successful! Please login.');
        } catch (error) {
            setError(error.message || 'Failed to reset password. Check your OTP.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="main-login">
                    <h1>Login</h1>
                    {!isForgotPassword ? (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-login">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <div className="error">{error}</div>}
                                <button className="submit-login" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                                <button
                                    type="button"
                                    className="forgot-password"
                                    onClick={() => setIsForgotPassword(true)}
                                >
                                    Forgot Password
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            {!isOtpSent ? (
                                <form onSubmit={handleForgotPasswordSubmit}>
                                    <div className="form-login">
                                        <div className="form-group">
                                            <label htmlFor="email">Enter your registered email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {error && <div className="error">{error}</div>}
                                        <button className="submit-login" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send OTP'}</button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleResetPasswordSubmit}>
                                    <div className="form-login">
                                        <div className="form-group">
                                            <label htmlFor="otp">Enter OTP Sent On Registered mail id:</label>
                                            <input
                                                type="text"
                                                id="otp"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                required
                                                className='otpdata'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="newPassword">New Password:</label>
                                            <input
                                                type="password"
                                                id="newPassword"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                                            <input
                                                type="password"
                                                id="confirmNewPassword"
                                                value={confirmNewPassword}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {error && <div className="error">{error}</div>}
                                        <button className="submit-login" type="submit" disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'}</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                    <p style={{ marginTop: '30px' }}>
                        Don't have an account? <Link to="/register-company"><span style={{ color: 'red' }}>Register Here</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

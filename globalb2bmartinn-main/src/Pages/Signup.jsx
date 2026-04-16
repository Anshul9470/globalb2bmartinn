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
//             });

//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }

//             const data = await response.json();
//             console.log('Login successful:', data);

//             // Redirect to dashboard with user ID
//             navigate(`/dashboard?id=${data.user._id}`);
//         } catch (error) {
//             setError('Please correct your credentials');
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="main-login">
//                     <h1>Login</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-login">
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             {error && <div className="error">{error}</div>}
//                             <button className="submit-login" type="submit">Login</button>
//                         </div>
//                     </form>

//                     <p style={{ marginTop: '30px' }}>Don't have an account? <Link to="/register-company"><span style={{ color: 'red' }}>Register Here</span></Link></p>
//                 </div>
//             </div>
//             <div className="login-image">
//                 <img src="./assets/grey-bg.png" alt="Login" />
//             </div>
//         </div >
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import './login.css'; // Import CSS file for styling
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Buyers/AuthContext'; // Import useAuth to access setUserId

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { setUserId } = useAuth(); // Use setUserId from AuthContext




//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });


//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }

//             const data = await response.json();
//             console.log('Login successful:', data);

//             // Set userId in AuthContext
//             setUserId(data.user._id);

//             // Redirect to dashboard with user ID
//             navigate(`/dashboard?id=${data.user._id}`);
//         } catch (error) {
//             setError('Please correct your credentials');
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="main-login">
//                     <h1>Login</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-login">
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             {error && <div className="error">{error}</div>}
//                             <button className="submit-login" type="submit">Login</button>

//                         </div>
//                     </form>

//                     <p style={{ marginTop: '30px' }}>Don't have an account? <Link to="/register-company"><span style={{ color: 'red' }}>Register Here</span></Link></p>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import './login.css'; // Import CSS file for styling
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Buyers/AuthContext'; // Import useAuth to access setUserId

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
//     const navigate = useNavigate();
//     const { setUserId } = useAuth(); // Use setUserId from AuthContext

//     const handleForgotPassword = async () => {
//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/forgot-password`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to send password reset request');
//             }

//             const data = await response.json();
//             console.log('Password reset request sent successfully:', data);
//             setForgotPasswordMessage('Password reset instructions sent to your email');
//         } catch (error) {
//             console.error('Error:', error.message);
//             setForgotPasswordMessage('Failed to send password reset request');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }

//             const data = await response.json();
//             console.log('Login successful:', data);

//             // Set userId in AuthContext
//             setUserId(data.user._id);

//             // Redirect to dashboard with user ID
//             navigate(`/dashboard?id=${data.user._id}`);
//         } catch (error) {
//             setError('Please correct your credentials');
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="main-login">
//                     <h1>Login</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-login">
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             {error && <div className="error">{error}</div>}
//                             <button className="submit-login" type="submit">Login</button>
//                             <button type="button" onClick={handleForgotPassword} className="forgot-password">Forgot Password?</button>
//                             {forgotPasswordMessage && <div className="message">{forgotPasswordMessage}</div>}
//                         </div>
//                     </form>

//                     <p style={{ marginTop: '30px' }}>Don't have an account? <Link to="/register-company"><span style={{ color: 'red' }}>Register Here</span></Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
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
    const { setUserId } = useAuth();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await loginUser(email, password);
            setUserId(data.user._id);
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

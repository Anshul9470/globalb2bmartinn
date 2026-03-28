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
//             const response = await fetch('http://localhost:3005/login', {
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
import './login.css'; // Import CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Buyers/AuthContext'; // Import useAuth to access setUserId

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const navigate = useNavigate();
    const { setUserId } = useAuth(); // Use setUserId from AuthContext

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Set userId in AuthContext
            setUserId(data.user._id);

            // Redirect to dashboard with user ID
            navigate(`/dashboard?id=${data.user._id}`);
        } catch (error) {
            setError('Please correct your credentials');
            console.error('Error:', error.message);
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/send-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });


            if (!response.ok) {
                throw new Error('Failed to send OTP ');
            }

            const data = await response.json();
            console.log('OTP sent:', data);
            setIsOtpSent(true);
        } catch (error) {
            setError('Failed to send OTP Please Enter Registered Email Id.');
            console.error('Error:', error.message);
        }
    };

    const handleResetPasswordSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword, confirmNewPassword }),
            });

            if (!response.ok) {
                throw new Error('Failed to reset password');
            }

            const data = await response.json();
            console.log('Password reset successful:', data);

            // Reset states and navigate to login
            setIsForgotPassword(false);
            setIsOtpSent(false);
            setEmail('');
            setOtp('');
            setNewPassword('');
            setConfirmNewPassword('');
            setError('');
        } catch (error) {
            setError('Failed to reset password');
            console.error('Error:', error.message);
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
                                <button className="submit-login" type="submit">Login</button>
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
                                        <button className="submit-login" type="submit">Send OTP</button>
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
                                        <button className="submit-login" type="submit">Reset Password</button>
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

// import React from 'react'

// const AllCountries = () => {
//     return (
//         <>
//             <div className="ffp">
//                 <div
//                     className="iph-banner-flagall"
//                     style={{
//                         backgroundSize: "cover",
//                         minHeight: 300
//                     }}
//                 >
//                     <div className="fw">

//                         <div style={{
//                             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                             color: 'white',
//                             padding: '15px',
//                             fontWeight: '600',
//                             borderRadius: '10px',
//                             backdropFilter: 'blur(10px)',
//                             WebkitBackdropFilter: 'blur(10px)',
//                             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                             border: '1px solid rgba(255, 255, 255, 0.3)'
//                         }} className="iph-banner-title">
//                             <h1 style={{ color: '#000' }}>
//                                 All Countries
//                             </h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default AllCountries
import React from 'react';
import { Link } from 'react-router-dom';
import './countries.css';

const countries = [
    { name: 'United Kingdom', flag: '/assets/ukss.jpeg', path: '/uk' },
    { name: 'USA', flag: '/assets/usasr.jpeg', path: '/usa' },
    { name: 'Australia', flag: '/assets/ausp1.jpeg', path: '/australia' },
    { name: 'Dubai', flag: '/assets/dubais.png', path: '/dubai' },
    { name: 'Germany', flag: '/assets/germanys.png', path: '/germany' },
    { name: 'Canada', flag: '/assets/canadas.jpeg', path: '/canada' },
    { name: 'Saudi Arabia', flag: '/assets/saudis.jpeg', path: '/saudiarabia' },
    { name: 'Oman', flag: '/assets/omans.jpeg', path: '/oman' },
    { name: 'China', flag: '/assets/chians.jpeg', path: '/china' },
    { name: 'Netherland', flag: '/assets/neithers.jpeg', path: '/netherland' }
];

const AllCountries = () => {
    return (
        <>
            <div className="ffp">
                <div
                    className="iph-banner-flagall"
                    style={{
                        backgroundSize: "cover",
                        minHeight: 300
                    }}
                >
                    <div className="fw">
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            padding: '15px',
                            fontWeight: '600',
                            borderRadius: '10px',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }} className="iph-banner-title">
                            <h1 style={{ color: '#000' }}>
                                All Countries
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="countries-container">
                    {countries.map((country, index) => (
                        <Link to={country.path} key={index} className="country">
                            <div className="flag">
                                <img src={country.flag} alt={country.name} />
                            </div>
                            <p>{country.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllCountries;

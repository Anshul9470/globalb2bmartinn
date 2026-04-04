// import React from 'react'
// import './whyglobal.css'

// const Whyglobal = () => {
//     return (
//         <>
//             <section className='back-img'>

//                 <div class="contentx">
//                     <div className="containerxx">
//                         <div className="divide_why_and_how">

//                             <div className="how_trade">
//                                 <div className="common_heading">
//                                     <div className="headline_text">
//                                         <h3>HOW GLOBALB2BMART <span style={{ color: 'orange' }}>HELPS SUPPLIERS</span> </h3>
//                                     </div>
//                                 </div>
//                                 <div className="trade_under">
//                                     <div className="how_child">
//                                         <img src="/assets/h4.png" width={57} height={58} alt="manage" />
//                                         <h3>
//                                             Effortlessly handle your profile.</h3>
//                                         <p>
//                                             The comprehensive seller module lets you easily track orders and manage delivery schedules for smooth operations.
//                                         </p>
//                                         {/* <a href="/">Know More</a> */}
//                                     </div>
//                                     <div className="how_child">
//                                         <img src="/assets/h3.png" width={57} height={58} alt="assured" />
//                                         <h3>User Friendly Interface</h3>
//                                         <p>
//                                             The platform is optimized for various devices, including desktops, tablets, and smartphones....
//                                         </p>
//                                         {/* <a href="/">Know More</a> */}
//                                     </div>
//                                     <div className="how_child">
//                                         <img src="/assets/h2.png" width={57} height={58} alt="connect" />
//                                         <h3>Connect with Global Buyer</h3>
//                                         <p>
//                                             Tailored promotions exclusively for registered sellers, targeting global buyers worldwide, with a focus on specific industries.
//                                         </p>
//                                         {/* <a href="/">Know More</a> */}
//                                     </div>

//                                     <div className="how_child">
//                                         <img src="/assets/h1.png" width={57} height={58} alt="not lead" />
//                                         <h3>Grow Your Business with Global B2B Mart:</h3>
//                                         <p>
//                                             Expand your reach and connect with a vast network of international buyers to boost your business growth.
//                                         </p>
//                                         {/* <a href="/">Know More</a> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="why_trade">
//                                 <div className="common_heading">
//                                     <div className="headline_text">
//                                         <h3>WHY <span style={{ color: 'orange' }}> Globalb2b Mart</span></h3>
//                                     </div>
//                                 </div>
//                                 <div className="trade_under">
//                                     <div className="why_icon">
//                                         <img src="/assets/w1.png" width={58} height={50} alt="Cost Effective" />
//                                         <div className="why_text">
//                                             <p>
//                                                 Cost
//                                                 <br /> Effective
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="why_icon">
//                                         <img
//                                             src="/assets/1p.png"
//                                             width={50}
//                                             height={50}
//                                             alt="Modelled Around Bussiness"
//                                         />
//                                         <div className="why_text">
//                                             <p>Designed with a business-centric approach</p>
//                                         </div>
//                                     </div>
//                                     <div className="why_icon">
//                                         <img
//                                             src="/assets/w3.png"
//                                             width={50}
//                                             height={50}
//                                             alt="Completely Transparent"
//                                         />
//                                         <div className="why_text">
//                                             <p>Fully transparent</p>
//                                         </div>
//                                     </div>

//                                     <div className="why_icon">
//                                         <img
//                                             src="/assets/w4.png"
//                                             width={50}
//                                             height={50}
//                                             alt="Trade Across The World"
//                                         />
//                                         <div className="why_text">
//                                             <p>Trade Across The World</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default Whyglobal

import React from 'react';
import './whyglobal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobeAmericas, 
  faBolt, 
  faShieldHalved, 
  faChartLine,
  faAddressCard,
  faMagnifyingGlass,
  faComments,
  faHandshake,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Whyglobal = () => {
    return (
        <>
<section className="trade-section">
  <div className="trade-container">
    
    <div className="trade-header fade-in">
      <h1>Global Trade Platform</h1>
      <p>Connect with verified buyers and sellers worldwide.<br />Start trading in 4 simple steps.</p>
    </div>

    <div className="trade-grid">
      
      <div className="why-trade-card slide-up">
        <div className="why-trade-header">
          <h2>Why Trade With Us?</h2>
          <p>Experience the difference with our premium services</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faGlobeAmericas} />
            </div>
            <h3>Global Reach</h3>
            <p>Access markets in 150+ countries around the globe with verified, high-quality business partners.</p>
            <div className="feature-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3>Fast Deals</h3>
            <p>Close deals 3x faster with our streamlined and highly optimized negotiation process.</p>
            <div className="feature-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3>Secure Payments</h3>
            <p>Experience 100% protected and reliable transactions through our integrated escrow services.</p>
            <div className="feature-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Growth Tools</h3>
            <p>Leverage advanced analytics, market insights, and tools specialized for business scalability.</p>
            <div className="feature-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>

      
      <div className="how-trade-section slide-up">
        <div className="how-trade-header">
          <h2>How to Start Trading</h2>
          <p>Get started seamlessly in 4 simple steps</p>
        </div>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <div className="step-content">
               <h3>Register Account</h3>
               <p>Create your professional business profile in minutes with our fast verification process.</p>
            </div>
            <a href="#" className="step-action">Get Started</a>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="step-content">
               <h3>Find Partners</h3>
               <p>Browse through an extensive list of verified buyers and sellers in your specific industry.</p>
            </div>
            <a href="#" className="step-action">Explore</a>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
               <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="step-content">
               <h3>Connect & Negotiate</h3>
               <p>Use our real-time, secure platform communication to easily discuss terms and pricing.</p>
            </div>
            <a href="#" className="step-action">Connect</a>
          </div>
          
          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-icon">
               <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="step-content">
               <h3>Close Deal</h3>
               <p>Finalize your contracts with guaranteed secure payments and comprehensive logistics support.</p>
            </div>
            <a href="#" className="step-action">Trade Now</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

        </>
    )
}

export default Whyglobal
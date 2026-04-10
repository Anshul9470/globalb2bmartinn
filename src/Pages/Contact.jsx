import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <>
            <section
                className="contact-head"
                style={{
                    background:
                        'url("./assets/contact-bgg.jpg") no-repeat',
                    backgroundSize: "cover"
                }}
            >
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Get in touch</h1>
                            <p className="tagline">

                                Need to get in touch? We'd love to hear from you. Here's how you can reach us...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="contact-us">
                    <div className="row contact-info-wrap">
                        <div className="col-6">
                            <div className="contact-info">
                                <p className="title-icon">
                                    <i className="fa fa-comments" />
                                </p>
                                <div className="title">For any query </div>
                                <ul className="contact-details">
                                    <li>
                                        <p className="call-us">011-41029790 (Customer Care)</p>
                                    </li>

                                    <li>
                                        <p className="support">feedback@globalb2bmart.com</p>
                                    </li>

                                </ul>
                                <div className="text-center">
                                    <a href="/about/feedback.php" className="feeback-btn">
                                        Share Your Feedback
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contact-info">
                                <p className="title-icon">
                                    <i className="fa fa-building" />
                                </p>
                                <div className="title">GlobalB2B Mart</div>
                                <ul className="contact-details">
                                    <li>
                                        <p className="address">
                                            WebWave Business Pvt Ltd, S-21 First Floor, Ajay Enclave ,Subhash Nagar, <br />{" "}
                                            New Delhi - 110018, India
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: '30px' }} className="contact-us-map">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.626924787868!2d77.10296108210929!3d28.634930289499838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03604e12404f%3A0x88928840582bf570!2sMiraj%20Cinemas%20Subhash%20Nagar!5e0!3m2!1sen!2sin!4v1716545677336!5m2!1sen!2sin" style={{ border: 0 }} width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact
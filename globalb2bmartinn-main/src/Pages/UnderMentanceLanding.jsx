import React from "react";
import "./UnderMentanceLanding.css";

export default function UnderMentanceLanding() {
  return (
    <div className="b2b-container">
      <header className="b2b-header">
        <h1>Introducing GlobalB2BMart</h1>
        <p>
          Our website is currently under maintenance. We’ll be back shortly.
          Thank you for your patience!
        </p>
      </header>

      <section className="b2b-section">
        <h2>Welcome to GlobalB2BMart</h2>
        <p>
          Welcome to GlobalB2BMart, your premier destination for unlocking the
          vast potential of business-to-business (B2B) commerce on a global
          scale. At GlobalB2BMart, we understand the importance of fostering
          meaningful connections and facilitating seamless transactions between
          businesses worldwide. Whether you're a seasoned multinational
          corporation or a burgeoning startup, our platform offers the tools and
          resources you need to thrive in today's interconnected business
          landscape.
        </p>
      </section>

      <section className="b2b-section alt-bg">
        <h2>Connecting Businesses Across Borders</h2>
        <p>
          GlobalB2BMart serves as a dynamic hub where businesses from diverse
          industries and geographical locations converge to explore new
          opportunities, forge valuable partnerships, and drive mutual growth.
          With our extensive network of verified suppliers, buyers, and service
          providers, you can confidently expand your reach into new markets and
          establish lucrative business relationships with partners around the
          globe.
        </p>
      </section>

      <section className="b2b-section">
        <h2>Streamlined B2B Transactions</h2>
        <p>
          Our platform is designed to streamline the B2B transaction process,
          making it easier than ever for businesses to buy and sell goods and
          services with efficiency and transparency. Through advanced search
          filters, intuitive messaging tools, and secure payment solutions,
          GlobalB2BMart empowers businesses to navigate the complexities of
          international trade with ease, facilitating smooth transactions every
          step of the way.
        </p>
      </section>

      <section className="b2b-section alt-bg">
        <h2>Empowering Business Growth</h2>
        <p>
          At GlobalB2BMart, we are committed to empowering businesses of all
          sizes to achieve their growth objectives and unlock their full
          potential. Whether you're looking to source high-quality products,
          expand your customer base, or optimize your supply chain, our platform
          offers a comprehensive suite of services and resources tailored to
          meet your unique needs and fuel your success in the global
          marketplace.
        </p>
      </section>

      <footer className="b2b-footer">
        &copy; {new Date().getFullYear()} GlobalB2BMart. All rights reserved.
      </footer>
    </div>
  );
}

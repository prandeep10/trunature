import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';


const HomePage = () => {
  const serviceHighlights = [
    { icon: '🍽️', title: 'Daily Dish Planner', description: 'Plan your meals easily.' },
    { icon: '🥗', title: 'Custom Meal Planner', description: 'Create personalized meal plans.' },
    { icon: '🚚', title: 'Timely Delivery', description: 'Get your meals delivered on time.' },
    { icon: '🌱', title: 'Fresh Ingredients', description: 'We use only the freshest ingredients.' },
  ];


  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/logo.png" alt="" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >Eat Healthy, Live Better with TruNature.</motion.h1>
          <div className="cta-buttons">
            <motion.button
              className="cta-button green"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Explore Dishes</motion.button>
            <motion.button
              className="cta-button yellow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Get Started</motion.button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>Our Services</h2>
        <div className="service-grid">
          {serviceHighlights.map((service, index) => (
            <div key={index} className="service-item">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
              <p>{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose TruNature?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🤖</span>
            <h3>AI Meal Planning</h3>
            <p>Get personalized meal plans based on your needs.</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <h3>Tailored Nutrition</h3>
            <p>Get meals tailored to your dietary requirements.</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⏱️</span>
            <h3>Timely Delivery</h3>
            <p>Enjoy fresh, delicious meals delivered right to your door.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
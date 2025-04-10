
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for animations
    const observers: IntersectionObserver[] = [];
    
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    sections.forEach((section) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      observer.observe(section);
      observers.push(observer);
    });
    
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-kings-dark text-kings-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

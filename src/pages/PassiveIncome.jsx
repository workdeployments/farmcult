import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Shared/Footer';
import ContactSection from '../components/Shared/ContactSection';
import PiHero from '../components/PassiveIncome/PiHero';
import PiMainContent from '../components/PassiveIncome/PiMainContent';
import PiStatsGrid from '../components/PassiveIncome/PiStatsGrid';
import PiHowItWorks from '../components/PassiveIncome/PiHowItWorks';
import PiIncentives from '../components/PassiveIncome/PiIncentives';
import ExploreMore from '../components/Shared/ExploreMore';

gsap.registerPlugin(ScrollTrigger);

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const PassiveIncome = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.pi-hero-title, .pi-hero-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
    );

    // Parallax on hero Background
    gsap.to('.pi-hero-bg', {
      scrollTrigger: {
        trigger: '.pi-hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none',
    });

    // Content Section Animations
    gsap.fromTo('.pi-section-title, .pi-section-desc',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.pi-content-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    // Stats Grid Animations
    gsap.fromTo('.pi-stat-item',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.pi-stats-grid', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      }
    );
  }, { scope: containerRef });

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={containerRef}
      onAnimationComplete={() => ScrollTrigger.refresh()}
      className="bg-[#F7F7F7]"
    >
      <PiHero />
      <PiMainContent />
      <PiHowItWorks />
      <PiIncentives />
      <ExploreMore 
        title="Explore More Solutions"
        description="From hands-free investing to hands-on farming, we offer flexible ways to work with Farmcult based on your goals."
        cards={[
          {
            title: "Turnkey Solution",
            desc: "Farmcult will build a fully operational hydroponics farm on your land.",
            link: "/turnkey-solution",
            image: "/Shared/piTurnkeyC1.jpg"
          },
          {
            title: "Education & Training",
            desc: "Learn hydroponics farming through practical training, workshops, and guidance.",
            link: "/education-and-training",
            image: "/Shared/piTurnkeyC2.jpg"
          }
        ]}
      />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default PassiveIncome;

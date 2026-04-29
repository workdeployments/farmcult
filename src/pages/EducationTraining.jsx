import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Shared/Footer';
import ContactSection from '../components/Shared/ContactSection';

import EtHero from '../components/EducationTraining/EtHero';
import EtWorkshops from '../components/EducationTraining/EtWorkshops';
import EtWebinars from '../components/EducationTraining/EtWebinars';
import EtTrainingDifferent from '../components/EducationTraining/EtTrainingDifferent';
import EtParticipantsSay from '../components/EducationTraining/EtParticipantsSay';
// import EtReviews from '../components/EducationTraining/EtReviews';
import EtCaseStudy from '../components/EducationTraining/EtCaseStudy';
import ExploreMore from '../components/Shared/ExploreMore';
//import EtTestimonialVideo from '../components/EducationTraining/EtTestimonialVideo';

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

const EducationTraining = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.et-hero-title, .et-hero-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
    );

    // Parallax on hero Background
    gsap.to('.et-hero-bg', {
      scrollTrigger: {
        trigger: '.et-hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none',
    });

    // Content Section Animations
    gsap.fromTo('.et-section-content',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-content-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    // Webinars Animations
    gsap.fromTo('.et-webinars-content',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-webinars-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    // Training Different Animations
    gsap.fromTo('.et-different-header',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-different-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );
    gsap.fromTo('.et-different-image',
      { autoAlpha: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.et-different-container', start: 'top 60%' },
        autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power3.out'
      }
    );
    gsap.fromTo('.et-different-card > div > div',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-different-card', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out'
      }
    );

    // Reviews Animations
    gsap.fromTo('.et-reviews-header',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-reviews-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );
    gsap.fromTo('.et-reviews-grid > div',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-reviews-grid', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
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
      className="bg-[#FAFAFA]"
    >
      <EtHero />
      <EtWorkshops />
      <EtWebinars />
      <EtTrainingDifferent />
      <EtParticipantsSay />
      <EtCaseStudy />
      <ExploreMore 
        title="Explore More Solutions"
        description="From hands-free investing to hands-on farming, we offer flexible ways to work with Farmcult based on your goals."
        cards={[
          {
            title: "Passive Income\nModel",
            desc: "Invest in a hydroponics farm while Farmcult manages operations end-to-end.",
            link: "/passive-income",
            image: "/Shared/piHeader.jpg"
          },
          {
            title: "Turnkey\nSolution",
            desc: "Farmcult will build and handover a fully operational hydroponics farm on your land.",
            link: "/turnkey-solution",
            image: "/Shared/piTurnkeyC1.jpg"
          }
        ]}
      />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default EducationTraining;

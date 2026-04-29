import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Shared/Footer';
import ContactSection from '../components/Shared/ContactSection';
import TsHero from '../components/TurnkeySolution/TsHero';
import TsWhatsIncluded from '../components/TurnkeySolution/TsWhatsIncluded';
import TsHowItWorks from '../components/TurnkeySolution/TsHowItWorks';
// import PiHowItWorks from '../components/PassiveIncome/PiHowItWorks'
import CaseStudies from '../components/Home/CaseStudy';
import TsIncentives from '../components/TurnkeySolution/TsIncentives';
import TsCaseStudy2 from '../components/TurnkeySolution/TsCaseStudy2';
import ExploreMore from '../components/Shared/ExploreMore';
import PiIncentives from '../components/PassiveIncome/PiIncentives';
import TsStatsGrid from '../components/TurnkeySolution/TsStatsGrid';

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

const TurnkeySolution = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.ts-hero-title, .ts-hero-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
    );

    // Parallax on hero Background
    gsap.to('.ts-hero-bg', {
      scrollTrigger: {
        trigger: '.ts-hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none',
    });

    // Content Section Animations
    gsap.fromTo('.ts-section-content',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-content-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    // How It Works Animations
    gsap.fromTo('.ts-hiw-header',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-howitworks-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );
    gsap.fromTo('.ts-hiw-step',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-howitworks-container', start: 'top 70%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      }
    );

    // Case Study Animation
    gsap.fromTo('.ts-casestudy-card',
      { y: 50, autoAlpha: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.ts-casestudy-container', start: 'top 75%' },
        y: 0, autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out'
      }
    );

    // Incentives Animations
    gsap.fromTo('.ts-incentives-text',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-incentives-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
      }
    );
    gsap.fromTo('.ts-incentives-img',
      { autoAlpha: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.ts-incentives-img', start: 'top 85%' },
        autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power3.out'
      }
    );
    gsap.fromTo('.ts-stat-item',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-stats-grid', start: 'top 85%' },
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
      className="bg-[#FAFAFA]"
    >
      <TsHero />
      <TsWhatsIncluded />
      <TsHowItWorks />
      {/* <TsCaseStudy /> */}
      <CaseStudies bgColor="bg-[#F7F7F7]" />
      {/* <TsIncentives /> */}
      <PiIncentives />
      
      <section className="px-4 md:px-[68px] mx-auto py-10 lg:py-16">
        <TsStatsGrid />
      </section>

      <TsCaseStudy2 />
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
            title: "Education &\nTraining",
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

export default TurnkeySolution;

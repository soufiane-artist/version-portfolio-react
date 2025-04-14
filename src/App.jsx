import React, { useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaTachometerAlt, FaProjectDiagram, FaEnvelope, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './styles.css';
import AboutSection from './compenents/AboutSection';
import HomeSection from './compenents/HomeSection';
import PortfolioScene from './compenents/PortfolioScene';
import SkillsSection from './compenents/SkillsSection';
import ProjectsSection from './compenents/ProjectsSection';
import Performance from './compenents/Performance';
import ContactSection from './compenents/ContactSection';
import Fotter from './compenents/Fotter';
import VideoEditing from './compenents/VideoEditing';
import VoiceOver from './compenents/VoiceOver';
import { FaVideo } from 'react-icons/fa';

function App() {

  useEffect(()=>{
    window.scrollTo(0, 0);

            // Scroll to Top functionality
        const scrollToTopBtn = document.getElementById('scroll-to-top');

        const toggleScrollToTopButton = () => {
            scrollToTopBtn.classList.toggle('visible', window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleScrollToTopButton);

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });


  },[])

  useEffect(() => {
    const performanceMetrics = {
      init() {
        this.trackFirstContentfulPaint();
        this.trackCumulativeLayoutShift();
      },

      trackFirstContentfulPaint() {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.logMetric('First Contentful Paint', entry.startTime + 'ms');
            }
          });
          observer.observe({ type: 'paint', buffered: true });
        }
      },

      trackCumulativeLayoutShift() {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.logMetric('Cumulative Layout Shift', entry.value.toFixed(4));
            }
          });
          observer.observe({ type: 'layout-shift', buffered: true });
        }
      },

      logMetric(name, value) {
        console.log(`🚀 Performance Metric - ${name}: ${value}`);
      }
    };

    performanceMetrics.init();
  }, []);


  useEffect(() => { 
    window.addEventListener('scroll', () => {
      if(window.scrollY > 4000){
        document.getElementById('video-edi-btn').style.display = 'block';
      }
      if(window.scrollY > 10000){
        document.getElementById('video-edi-btn').style.display = 'none';
      }
    });
  }, []);

 
  return (
    <div className="App">
      <PortfolioScene />
      <canvas className="webgl"></canvas>
      <header>
        <nav>
          <div className="logo">
            <span className="logo-text">SM</span>
            <div className="logo-dot"></div>
          </div>
          <ul>
            <li><a href="#home" className="active"><i><FaHome /></i> Home</a></li>
            <li><a href="#about"><i><FaUser /></i> About</a></li>
            <li><a href="#skills"><i><FaCode /></i> Skills</a></li>
            <li><a href="#performance-insights"><i><FaTachometerAlt /></i> Performance</a></li>
            <li><a href="#projects"><i><FaProjectDiagram /></i> Projects</a></li>
            <li><a href="#contact"><i><FaEnvelope /></i> Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Performance />
        <VoiceOver />
        <ContactSection />
        <Fotter />
      </main>
      <button id="scroll-to-top" className="scroll-to-top">
        <FaArrowUp />
      </button>

      <a href='#voice-over'  id='video-edi-btn'  className='video-editing-btn' ><FaVideo /> video-editing <span><FaArrowDown /></span></a>
    </div>
  );
}

export default App;

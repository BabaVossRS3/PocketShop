"use client"

import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ['#727D73', '#AAB99A', '#D0DDD0'] // New softer, happier colors
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#727D73' // Muted Olive Green
            }
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#AAB99A', // Light Olive
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.8
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="fixed inset-0 z-0 bg-[#D0DDD0]" // Lighter background color for better integration
      style={{ 
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default ParticlesBackground;

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to stroke-dashoffset for the circle
  const circumference = 2 * Math.PI * 20 // radius of 20
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  )

  // Show/hide button and detect background color based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset
      
      // Show/hide button based on scroll position
      if (scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Detect if we're over a dark section
      // Contact section has dark background
      const contactSection = document.querySelector('#contact') as HTMLElement
      
      if (contactSection) {
        const contactTop = contactSection.offsetTop
        const viewportHeight = window.innerHeight
        
        // Check if we're in contact section or footer area
        if (scrollY + viewportHeight > contactTop) {
          setIsDarkBackground(true)
        } else {
          setIsDarkBackground(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.3, 
        ease: 'easeInOut',
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
    >
      <button
        onClick={scrollToTop}
        className={`relative group w-14 h-14 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isDarkBackground 
            ? 'bg-white/10 border border-white/20 hover:bg-white/20' 
            : 'bg-white/10 border border-white/20 hover:bg-white/20'
        }`}
        aria-label="Back to top"
      >
        {/* Progress Circle Background */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 48 48"
        >
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke={isDarkBackground ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            strokeWidth="2"
            fill="none"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke={isDarkBackground ? "url(#gradientWhite)" : "url(#gradientPurple)"}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
          
          {/* Gradient definitions */}
          <defs>
            {/* Purple gradient for light backgrounds */}
            <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            {/* White gradient for dark backgrounds */}
            <linearGradient id="gradientWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon */}
        <ArrowUp 
          className={`w-5 h-5 transition-colors duration-300 ${
            isDarkBackground 
              ? 'text-white group-hover:text-gray-200' 
              : 'text-primary-600 group-hover:text-primary-500'
          }`}
        />

        {/* Hover Effect Glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
          style={{ 
            background: isDarkBackground
              ? 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)'
          }}
        />
      </button>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Back to top
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollProgress

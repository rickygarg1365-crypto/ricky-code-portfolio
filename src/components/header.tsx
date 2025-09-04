'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Get Started', href: '#contact', isContact: true },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu when navigation occurs
  }

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className={cn(
          'hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white border-b border-gray-200'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className={cn(
                "text-xl sm:text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-gray-800" : "text-white"
              )}>
                Ricky <span className={cn(
                  "transition-colors duration-300",
                  isScrolled ? "text-primary-600" : "text-primary-400"
                )}>&</span> Code
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative transition-all duration-200',
                    item.isContact
                      ? 'px-6 py-3 text-sm font-bold bg-primary-500 hover:bg-primary-600 text-white rounded-lg'
                      : 'px-4 py-2 text-sm font-bold transition-colors duration-300 ' + cn(
                          isScrolled 
                            ? 'text-gray-700 hover:text-primary-600' 
                            : 'text-gray-300 hover:text-white'
                        )
                  )}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={!item.isContact ? { y: -2 } : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {!item.isContact && (
                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-1/2 w-0 h-0.5 rounded-full transition-colors duration-300",
                        isScrolled 
                          ? "bg-primary-500" 
                          : "bg-white"
                      )}
                      whileHover={{ width: '100%', x: '-50%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {item.isContact && (
                    <ChevronRight className="inline-block ml-1 w-4 h-4" />
                  )}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Hamburger Button Only */}
      <motion.button
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col justify-center items-center h-full px-8 space-y-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'w-full text-center py-4 px-6 rounded-lg transition-all duration-200 text-xl font-bold',
                    item.isContact
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{item.name}</span>
                    {item.isContact && (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

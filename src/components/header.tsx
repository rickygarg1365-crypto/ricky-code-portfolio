'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
    setIsOpen(false)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
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
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-200',
                  item.isContact
                    ? 'bg-primary-500 hover:bg-primary-600 text-white rounded-lg'
                    : cn(
                        'transition-colors duration-300',
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

          {/* Mobile menu button */}
          <motion.button
            className={cn(
              "md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
              isScrolled 
                ? "bg-gray-100 hover:bg-gray-200" 
                : "bg-white/20 hover:bg-white/30"
            )}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={cn(
                    "w-5 h-5 transition-colors duration-300",
                    isScrolled ? "text-gray-700" : "text-white"
                  )} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={cn(
                    "w-5 h-5 transition-colors duration-300",
                    isScrolled ? "text-gray-700" : "text-white"
                  )} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                    item.isContact
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

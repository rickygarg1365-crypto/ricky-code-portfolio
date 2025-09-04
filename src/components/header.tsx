'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className={cn(
                "text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300",
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

            {/* Mobile Menu Button */}
            <motion.button
              className={cn(
                "md:hidden mobile-menu-button p-2 rounded-lg transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              )}
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden mobile-menu overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-20">
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 180 }}
                  aria-label="Close menu"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="pt-16 px-6 pb-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        'w-full text-left group transition-all duration-300',
                        item.isContact
                          ? 'bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl mt-4'
                          : 'text-gray-700 hover:text-primary-600 py-4 px-4 text-lg font-medium rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200'
                      )}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="relative flex items-center justify-between">
                        <span>{item.name}</span>
                        
                        {item.isContact && (
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        )}
                      </div>

                      {/* Animated underline for non-contact items */}
                      {!item.isContact && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

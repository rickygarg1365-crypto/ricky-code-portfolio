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
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl z-50 md:hidden mobile-menu overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'><circle cx='25' cy='25' r='1' fill='white' opacity='0.3'/><circle cx='75' cy='75' r='1' fill='white' opacity='0.3'/><circle cx='50' cy='10' r='1' fill='white' opacity='0.3'/><circle cx='10' cy='60' r='1' fill='white' opacity='0.3'/><circle cx='90' cy='40' r='1' fill='white' opacity='0.3'/></pattern></defs><rect width='100' height='100' fill='url(%23grain)'/></svg>")`
                }}
              />

              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm"
                  style={{ top: '15%', left: '10%' }}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    delay: 0
                  }}
                />
                <motion.div
                  className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-accent-400/15 to-primary-400/15 backdrop-blur-sm"
                  style={{ top: '60%', right: '15%' }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -120, -240]
                  }}
                  transition={{ 
                    duration: 6, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    delay: 2
                  }}
                />
                <motion.div
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400/20 to-white/10 backdrop-blur-sm"
                  style={{ bottom: '20%', left: '20%' }}
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 8, 0],
                    rotate: [0, 90, 180]
                  }}
                  transition={{ 
                    duration: 10, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    delay: 4
                  }}
                />
              </div>

              {/* Mobile Menu Header */}
              <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-700/50">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-xl font-bold text-white">Navigation</h2>
                  <p className="text-sm text-gray-400 mt-1">Explore our services</p>
                </motion.div>
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 180 }}
                  aria-label="Close menu"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="relative z-10 px-6 py-8">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        'w-full text-left group relative overflow-hidden transition-all duration-300',
                        item.isContact
                          ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl'
                          : 'text-gray-300 hover:text-white py-4 px-4 text-lg font-medium rounded-lg hover:bg-gray-700/30 border border-transparent hover:border-gray-600/50'
                      )}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Background glow effect for non-contact items */}
                      {!item.isContact && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      )}

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                          {/* Icon indicator */}
                          <motion.div
                            className={cn(
                              "w-2 h-2 rounded-full mr-4 transition-all duration-300",
                              item.isContact 
                                ? "bg-white" 
                                : "bg-primary-400 group-hover:bg-primary-300 group-hover:shadow-lg group-hover:shadow-primary-400/50"
                            )}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span>{item.name}</span>
                        </div>
                        
                        {item.isContact ? (
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <ChevronRight className="w-4 h-4 text-primary-400" />
                          </motion.div>
                        )}
                      </div>

                      {/* Animated underline for non-contact items */}
                      {!item.isContact && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Enhanced Mobile Menu Footer */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {/* Stats Section */}
                  <motion.div
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    {[
                      { number: "50+", label: "Projects" },
                      { number: "100%", label: "Satisfaction" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-primary-400">{stat.number}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Section */}
                  <div className="text-center">
                    <motion.p 
                      className="text-sm text-gray-400 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    >
                      Ready to transform your vision?
                    </motion.p>
                    <motion.div
                      className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      Let&apos;s Build Together
                    </motion.div>
                    
                    {/* Social/Contact hints */}
                    <motion.div
                      className="mt-6 flex justify-center space-x-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      {['💻', '🚀', '✨'].map((emoji, index) => (
                        <motion.div
                          key={emoji}
                          className="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-lg"
                          animate={{ 
                            y: [0, -5, 0],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

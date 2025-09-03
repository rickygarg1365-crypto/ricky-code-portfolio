'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Code2 as Code } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  // Remove opacity fade to prevent blending with next section



  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      style={{ y }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'><circle cx='25' cy='25' r='1' fill='white' opacity='0.1'/><circle cx='75' cy='75' r='1' fill='white' opacity='0.1'/><circle cx='50' cy='10' r='1' fill='white' opacity='0.1'/><circle cx='10' cy='60' r='1' fill='white' opacity='0.1'/><circle cx='90' cy='40' r='1' fill='white' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23grain)'/></svg>")`
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md"
          style={{ top: '20%', left: '20%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 backdrop-blur-md"
          style={{ top: '50%', right: '20%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        />
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-accent-400/20 to-white/10 backdrop-blur-md"
          style={{ bottom: '20%', left: '50%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 270, 540]
          }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 4
          }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-secondary-400/15 to-white/5 backdrop-blur-sm"
          style={{ top: '10%', right: '10%' }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 120, 240]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary-300/15 to-accent-300/10 backdrop-blur-sm"
          style={{ bottom: '10%', right: '40%' }}
          animate={{ 
            y: [0, -10, 0],
            x: [0, -15, 0],
            rotate: [0, -90, -180]
          }}
          transition={{ 
            duration: 7, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 3
          }}
        />
        <motion.div
          className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-white/10 to-primary-500/10 backdrop-blur-md"
          style={{ top: '60%', left: '10%' }}
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 45, 90]
          }}
          transition={{ 
            duration: 9, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1.5
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">
                Premium Web Development
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Create{' '}
              <span className="text-primary-400">Premium</span>
              <br />
              Digital Experiences
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Partner with Ricky & Code to transform your vision into stunning,
              high-performance websites that captivate your audience and drive results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToPortfolio}
                className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="group border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>


          </div>

          {/* Revolutionary 3D Data Visualization */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            
            {/* Orbiting Stats Ring */}
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Central Core Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full border-4 border-primary-500/40 shadow-2xl overflow-hidden">
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary-400"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Core Content */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="mb-2"
                    >
                      <Code className="w-8 h-8 lg:w-10 lg:h-10 text-primary-400" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-lg lg:text-xl font-bold text-white">R&C</div>
                      <div className="text-xs text-gray-400">CORE</div>
                    </div>
                  </div>
                  
                  {/* Energy Waves */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-pulse" />
                </div>
              </motion.div>

              {/* Orbiting Stat Nodes */}
              {[
                { stat: "100%", label: "Client Satisfaction", angle: 0, color: "primary", delay: 0.6 },
                { stat: "50+", label: "Projects Delivered", angle: 72, color: "secondary", delay: 0.8 },
                { stat: "24/7", label: "Support Available", angle: 144, color: "accent", delay: 1.0 },
                { stat: "5★", label: "Average Rating", angle: 216, color: "primary", delay: 1.2 },
                { stat: "99%", label: "Uptime Guarantee", angle: 288, color: "secondary", delay: 1.4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute w-20 h-20 lg:w-24 lg:h-24"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-130px) rotate(-${item.angle}deg)`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 0.6, delay: item.delay },
                    opacity: { duration: 0.6, delay: item.delay },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                >
                  <div className={`relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-${item.color}-500/50 shadow-lg overflow-hidden group cursor-pointer`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-${item.color}-500/10 rounded-2xl group-hover:bg-${item.color}-500/20 transition-colors duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
                      <motion.div 
                        className={`text-lg lg:text-xl font-bold text-${item.color}-400 mb-1`}
                        animate={{ 
                          textShadow: [
                            "0 0 5px currentColor",
                            "0 0 20px currentColor",
                            "0 0 5px currentColor"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.stat}
                      </motion.div>
                      <div className="text-xs text-gray-400 text-center leading-tight">
                        {item.label}
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    <motion.div
                      className={`absolute top-1/2 left-1/2 w-20 lg:w-24 h-[2px] bg-gradient-to-r from-${item.color}-500/50 to-transparent origin-left -z-10`}
                      style={{ transform: 'translate(-50%, -50%) rotate(180deg)' }}
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3],
                        scaleX: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: item.delay 
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Orbital Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-primary-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Data Stream Lines */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-transparent via-primary-400/60 to-transparent"
                  style={{
                    height: '140px',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    transformOrigin: 'center bottom'
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleY: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Performance Metrics Overlay */}
              <motion.div
                className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-primary-500/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="text-xs text-gray-400 mb-1">Live Metrics</div>
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-xs text-white">All Systems Optimal</span>
                </div>
                <div className="text-xs text-green-400 font-mono">99.9% Uptime</div>
              </motion.div>

              {/* Technology Stack Indicator */}
              <motion.div
                className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-secondary-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="text-xs text-gray-400 mb-2">Tech Stack</div>
                <div className="flex space-x-1">
                  {['React', 'Next.js', 'TypeScript'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="px-2 py-1 bg-secondary-500/20 rounded text-xs text-secondary-300 border border-secondary-500/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero

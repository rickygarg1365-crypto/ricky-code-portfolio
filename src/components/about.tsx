'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Code2, Palette, Database, Globe, Layers, Target, Users, Award, Zap, ChevronRight } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const getColorValue = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      primary: '#6366f1',
      secondary: '#ec4899',
      accent: '#f59e0b',
      green: '#10b981'
    }
    return colorMap[colorName] || '#6b7280'
  }

  const stats = [
    { value: '100%', label: 'Client Satisfaction', icon: Award, color: 'primary' },
    { value: '50+', label: 'Projects Delivered', icon: Target, color: 'secondary' },
    { value: '24/7', label: 'Support Available', icon: Zap, color: 'accent' },
    { value: '5★', label: 'Average Rating', icon: Users, color: 'green' },
  ]

  const skills = [
    { name: 'React', icon: Globe, progress: 95 },
    { name: 'Next.js', icon: Code2, progress: 90 },
    { name: 'TypeScript', icon: Layers, progress: 88 },
    { name: 'Node.js', icon: Database, progress: 85 },
    { name: 'UI/UX', icon: Palette, progress: 92 },
    { name: 'Cloud', icon: Database, progress: 80 },
  ]

  return (
    <section id="about" className="relative min-h-screen bg-white overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'><rect x='0' y='0' width='20' height='20' fill='none' stroke='currentColor' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
          backgroundSize: '20vw 20vw'
        }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full"
          style={{ top: '20%', right: '10%', y }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg"
          style={{ top: '60%', left: '5%', y }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl"
          style={{ bottom: '20%', right: '20%', y }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-900 text-white rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">About Ricky & Code</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting Digital{' '}
            <span className="text-primary-600">Excellence</span>
            <br />
            Through Innovation
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We&apos;re a dynamic duo passionate about transforming ideas into stunning digital experiences. 
            Our fusion of creative vision and technical expertise delivers solutions that don&apos;t just meet expectations—they exceed them.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/0 to-${stat.color}-500/0 group-hover:from-${stat.color}-500/5 group-hover:to-${stat.color}-500/10 rounded-2xl transition-all duration-300`} />
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: getColorValue(stat.color) }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-${stat.color}-500/0 group-hover:border-${stat.color}-500/20 transition-all duration-300`}
                  whileHover={{ 
                    boxShadow: `0 0 30px rgba(99, 102, 241, 0.15)`
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Philosophy
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                At Ricky & Code, we believe that exceptional web development is an art form. 
                Every line of code, every design decision, and every user interaction is carefully 
                crafted to create experiences that resonate and inspire.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Our collaborative approach ensures that your vision becomes reality through 
                cutting-edge technology, innovative design, and meticulous attention to detail.
              </p>
            </div>

            <motion.button
              className="group mt-8 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More About Us</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Technical Expertise</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 1.5 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Floating Accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-6 left-6 w-full h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl -z-10"></div>
            <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-secondary-50 to-accent-50 rounded-3xl -z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

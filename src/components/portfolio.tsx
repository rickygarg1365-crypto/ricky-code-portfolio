'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Code, Smartphone, Globe, ChevronRight, Sparkles, Star, Target, TrendingUp, Eye } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const projects = [
    {
      id: 1,
      title: 'Malaking Hot Pot',
      subtitle: 'Complete Restaurant Website & PWA',
      description: 'A comprehensive hot pot restaurant website built with Next.js 14, featuring interactive menu navigation, location finder, career portal, and PWA capabilities. Converted from static HTML to a modern React application with full responsive design and SEO optimization.',
      category: 'Restaurant Website',
      status: 'Live',
      url: 'https://malakinghotpot.ca',
      github: 'https://github.com/rickygarg1365-crypto/Project-Malaking',
      technologies: ['Next.js 14', 'React 18', 'CSS3', 'JavaScript ES6+', 'PWA', 'Google Maps'],
      features: ['Interactive Menu', 'Location Finder', 'Career Portal', 'PWA Support', 'Mobile-First Design', 'Google Maps Integration'],
      metrics: {
        performance: 90,
        accessibility: 95,
        seo: 94,
        users: '5K+',
        rating: '4.8★'
      },
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    }
  ]

  const currentProject = projects[activeProject]

  return (
    <section id="portfolio" className="relative min-h-screen bg-white overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'><rect x='0' y='0' width='20' height='20' fill='none' stroke='currentColor' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
          backgroundSize: '20vw 20vw'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl"
          style={{ top: '15%', left: '5%', y }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-28 h-28 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full"
          style={{ top: '70%', right: '8%', y }}
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl"
          style={{ bottom: '10%', left: '15%', y }}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
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
            <span className="text-sm font-medium">Featured Projects</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Showcasing Our{' '}
            <span className="text-primary-600">Latest Work</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover the innovative solutions we&apos;ve crafted for our clients. Each project represents our commitment to excellence, creativity, and cutting-edge technology.
          </motion.p>
        </motion.div>


        {/* Main Project Display */}
        <motion.div
          key={currentProject.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Main Project Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentProject.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    <div className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      currentProject.status === 'Live' ? 'bg-green-500' : 'bg-orange-500'
                    } animate-pulse`}></div>
                    {currentProject.status}
                  </div>
                </div>

                {/* Project Preview */}
                <div className="relative h-64 bg-gray-100 rounded-2xl mb-6 overflow-hidden shadow-lg">
                  {/* Browser Frame */}
                  <div className="absolute top-2 left-2 right-2 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600 font-mono">{currentProject.url}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actual Website Screenshot */}
                  <div className="absolute inset-0 pt-12">
                    <div className="w-full h-full relative overflow-hidden">
                      {/* Actual Screenshot Image */}
                      <Image
                        src="/images/malaking-homepage.png"
                        alt="Malaking Hot Pot Website Homepage"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      
                      {/* Optional overlay for better text readability on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{currentProject.title}</h3>
                    <p className="text-sm text-gray-600">{currentProject.category}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${currentProject.gradient} text-white rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                    {currentProject.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{currentProject.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Action Button */}
              <motion.a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${currentProject.gradient} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer`}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
                whileHover={{ scale: 1.2 }}
              >
                <ExternalLink className="w-8 h-8 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm border border-gray-100">
                <Star className={`w-4 h-4 text-${currentProject.color}-500`} />
                <span className="text-sm font-medium text-gray-700">{currentProject.category}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-3">{currentProject.title}</h3>
              <h4 className={`text-xl font-semibold text-${currentProject.color}-600 mb-6`}>{currentProject.subtitle}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{currentProject.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Key Features</h5>
              <div className="grid grid-cols-2 gap-3">
                {currentProject.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`w-2 h-2 bg-${currentProject.color}-500 rounded-full`}></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Performance Metrics</h5>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">{currentProject.metrics.performance}%</div>
                  <div className="text-xs text-gray-600">Performance</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">{currentProject.metrics.accessibility}%</div>
                  <div className="text-xs text-gray-600">Accessibility</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className={`text-2xl font-bold text-${currentProject.color}-600`}>
                    {currentProject.metrics.users || currentProject.metrics.downloads || currentProject.metrics.revenue}
                  </div>
                  <div className="text-xs text-gray-600">
                    {currentProject.metrics.users ? 'Users' : currentProject.metrics.downloads ? 'Downloads' : 'Revenue Growth'}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center bg-gradient-to-r ${currentProject.gradient} text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="mr-2 w-5 h-5" />
                View Project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {currentProject.github && (
                <motion.a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code className="mr-2 w-5 h-5" />
                  View Code
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-900 text-white rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Target className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Ready to Start?</span>
          </motion.div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Create Something Amazing Together
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Ready to bring your vision to life? Let&apos;s discuss your project and create a digital solution that exceeds your expectations.
          </p>
          
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="group bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Search, 
  Rocket,
  CheckCircle,
  Sparkles,
  Settings,
  Clock
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  // Helper function to get color values
  const getColorValue = (colorName: string, shade: string) => {
    const colorMap: { [key: string]: { [key: string]: string } } = {
      primary: {
        '500': '#6366f1',
        '600': '#4f46e5'
      },
      secondary: {
        '500': '#ec4899',
        '600': '#db2777'
      },
      accent: {
        '500': '#f59e0b',
        '600': '#d97706'
      },
      green: {
        '500': '#10b981',
        '600': '#059669'
      }
    }
    return colorMap[colorName]?.[shade] || '#6b7280'
  }

  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      subtitle: 'End-to-End Web Solutions',
      description: 'Custom web applications built with cutting-edge technologies. From frontend interfaces to backend APIs, we create scalable, secure, and high-performance solutions.',
      features: ['React & Next.js', 'Node.js & APIs', 'Database Design', 'Cloud Deployment'],
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-primary-100',
      metrics: { projects: '50+', satisfaction: '100%', uptime: '99.9%' }
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers. We focus on user experience, accessibility, and modern design principles.',
      features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping'],
      color: 'secondary',
      gradient: 'from-secondary-500 to-secondary-600',
      bgGradient: 'from-secondary-50 to-secondary-100',
      metrics: { conversions: '+40%', engagement: '+60%', bounce: '-30%' }
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      subtitle: 'Mobile-First Approach',
      description: 'Responsive designs that work flawlessly across all devices. Progressive web apps and mobile optimization for maximum reach.',
      features: ['Responsive Design', 'PWA Development', 'Touch Optimization', 'Performance'],
      color: 'accent',
      gradient: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-50 to-accent-100',
      metrics: { mobile: '95%', speed: '2.1s', compatibility: '100%' }
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      subtitle: 'Growth & Optimization',
      description: 'Comprehensive digital strategy including SEO, performance optimization, and growth hacking to maximize your online presence.',
      features: ['SEO Optimization', 'Performance Tuning', 'Analytics Setup', 'Growth Strategy'],
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100',
      metrics: { traffic: '+180%', rankings: 'Top 3', leads: '+250%' }
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      icon: Search,
      color: 'primary',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create stunning wireframes, mockups, and interactive prototypes that align perfectly with your brand vision.',
      icon: Palette,
      color: 'secondary',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution with clean, scalable code, comprehensive testing, and performance optimization.',
      icon: Code2,
      color: 'accent',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Deploy your project and provide ongoing support, monitoring, and optimization for continuous growth.',
      icon: Rocket,
      color: 'primary',
      duration: 'Ongoing'
    }
  ]



  return (
    <section id="services" className="relative min-h-screen bg-white overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='diamond' width='20' height='20' patternUnits='userSpaceOnUse'><path d='M10,0 L20,10 L10,20 L0,10 Z' fill='none' stroke='currentColor' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23diamond)'/></svg>")`,
          backgroundSize: '20vw 20vw',
          backgroundPosition: '200% 0'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl"
          style={{ top: '10%', right: '5%', y }}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl"
          style={{ top: '60%', left: '3%', y }}
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 3
          }}
        />
        <motion.div
          className="absolute w-28 h-28 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full"
          style={{ bottom: '15%', right: '10%', y }}
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 270, 540]
          }}
          transition={{ 
            duration: 18, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 6
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
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive{' '}
            <span className="text-primary-600">Digital Solutions</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From concept to launch, we provide end-to-end digital solutions that drive growth, 
            enhance user experience, and deliver measurable results for your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Service</div>
                      <div className="text-sm font-semibold text-gray-700">0{index + 1}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <h4 
                      className="text-lg font-semibold mb-4"
                      style={{ color: getColorValue(service.color, '600') }}
                    >
                      {service.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <CheckCircle 
                            className="w-4 h-4 flex-shrink-0" 
                            style={{ color: getColorValue(service.color, '500') }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div 
                          className="text-lg font-bold"
                          style={{ color: getColorValue(service.color, '600') }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-${service.color}-500/0 group-hover:border-${service.color}-500/20 transition-all duration-300`}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-900 text-white rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Settings className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium">Our Process</span>
            </motion.div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process ensures project success from discovery to launch and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                    />
                  )}

                  {/* Step Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.description}</p>
                  
                  <div className="inline-flex items-center space-x-1 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    <Clock className="w-3 h-3" />
                    <span>{step.duration}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services

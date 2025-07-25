import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Shield, 
  Globe, 
  FileText, 
  Bell, 
  MapPin, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('realTimeTracking'),
      description: t('trackingDesc'),
      color: 'text-blue-600'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('multilingualSupport'),
      description: t('multilingualDesc'),
      color: 'text-green-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('agencyDirectory'),
      description: t('agencyDirectoryDesc'),
      color: 'text-purple-600'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t('documentManagement'),
      description: t('documentDesc'),
      color: 'text-orange-600'
    }
  ]

  const stats = [
    { label: 'Certified Farmers', value: '2,500+', icon: <Users className="h-5 w-5" /> },
    { label: 'Partner Agencies', value: '45+', icon: <Shield className="h-5 w-5" /> },
    { label: 'Districts Covered', value: '32', icon: <MapPin className="h-5 w-5" /> },
    { label: 'Success Rate', value: '94%', icon: <TrendingUp className="h-5 w-5" /> }
  ]

  const benefits = [
    'Simplified certification process',
    'Expert guidance and support',
    'Real-time status updates',
    'Secure document management',
    'Multilingual interface',
    'Direct agency communication'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                {t('ORGANIC CERTIFICATION PORTAL')}
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 leading-relaxed">
                {t('welcome to home')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                  {t('getStarted')}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link to="/agencies" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  {t('learnMore')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 rounded-full p-2">
                      <Leaf className="h-6 w-6 text-green-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Organic Certification</h3>
                      <p className="text-primary-100 text-sm">Track your progress</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-sm text-primary-100">75% Complete - Documentation Review</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('features')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a smooth organic certification journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`${feature.color} mb-4 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We make organic certification accessible, transparent, and efficient for farmers across Tamil Nadu.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/agencies" className="btn-primary inline-flex items-center">
                Explore Agencies
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Certified?</h3>
                <p className="mb-6 text-primary-100">
                  Join thousands of farmers who have successfully obtained their organic certification through our platform.
                </p>
                <Link to="/register" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                  Start Your Journey
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step towards organic certification and join our community of sustainable farmers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register" className="btn-primary">
                Create Account
              </Link>
              <Link to="/tracking" className="btn-secondary">
                Track Application
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
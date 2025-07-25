import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Leaf, Users, Target, Award, CheckCircle } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Promoting sustainable farming practices for a better future'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building a strong community of organic farmers'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Transparency',
      description: 'Ensuring complete transparency in the certification process'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Maintaining the highest standards of organic certification'
    }
  ]

  const achievements = [
    '2,500+ farmers certified',
    '45+ partner agencies',
    '32 districts covered',
    '94% success rate',
    'Multi-language support',
    'Real-time tracking'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              About OrganicCert Portal
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to simplifying organic certification for farmers across Tamil Nadu,
              connecting them with trusted certification agencies through our innovative platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize organic farming certification by providing farmers with easy access
                to certification agencies, real-time tracking, and comprehensive support throughout
                their certification journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every farmer deserves access to organic certification, regardless
                of their location or technical expertise. Our platform bridges the gap between
                farmers and certification agencies, making the process transparent and efficient.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to the farming community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by Team tecker_z with passion for sustainable agriculture and technology innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Team tecker_z</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              A dedicated team of developers, designers, and agricultural experts working together
              to revolutionize organic farming certification in India.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-primary-100 text-sm">Founded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-primary-100 text-sm">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-primary-100 text-sm">Commitment</div>
              </div>
            </div>
          </motion.div>
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
              Ready to Start Your Organic Journey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of farmers who have successfully obtained their organic certification through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary">
                Get Certified Today
              </button>
              <button className="btn-secondary">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
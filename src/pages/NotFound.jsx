import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="text-7xl font-bold text-primary-600 mb-4">WELCOME TO ORGANIC WEB PORTAL</div>
          <h1 className="text-2xl font-display font-bold text-red-900 mb-4">
            Click the "Go Home" below
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
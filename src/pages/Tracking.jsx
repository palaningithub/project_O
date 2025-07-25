import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, MapPin, Clock, CheckCircle, AlertCircle, FileText, Calendar } from 'lucide-react'

const Tracking = () => {
  const { t } = useTranslation()
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const mockTrackingData = {
    'ORG-2024-001': {
      id: 'ORG-2024-001',
      type: 'Organic Farming Certificate',
      farmer: 'Raman Kumar',
      agency: 'TamilNadu Organic Certification',
      status: 'inProgress',
      progress: 65,
      submittedDate: '2024-01-15',
      expectedCompletion: '2024-04-15',
      timeline: [
        {
          step: 'Application Submitted',
          status: 'completed',
          date: '2024-01-15',
          description: 'Application received and initial review started'
        },
        {
          step: 'Document Verification',
          status: 'completed',
          date: '2024-01-20',
          description: 'All required documents verified successfully'
        },
        {
          step: 'Field Inspection',
          status: 'inProgress',
          date: '2024-02-01',
          description: 'Inspection scheduled for Feb 5th, 2024'
        },
        {
          step: 'Report Review',
          status: 'pending',
          date: null,
          description: 'Awaiting inspection report review'
        },
        {
          step: 'Certificate Issuance',
          status: 'pending',
          date: null,
          description: 'Final certificate preparation and issuance'
        }
      ]
    },
    'ORG-2024-002': {
      id: 'ORG-2024-002',
      type: 'Soil Health Certificate',
      farmer: 'Priya Sharma',
      agency: 'Green Earth Certifiers',
      status: 'approved',
      progress: 100,
      submittedDate: '2024-01-10',
      expectedCompletion: '2024-03-10',
      timeline: [
        {
          step: 'Application Submitted',
          status: 'completed',
          date: '2024-01-10',
          description: 'Application received and processed'
        },
        {
          step: 'Document Verification',
          status: 'completed',
          date: '2024-01-15',
          description: 'All documents verified'
        },
        {
          step: 'Field Inspection',
          status: 'completed',
          date: '2024-01-25',
          description: 'Field inspection completed successfully'
        },
        {
          step: 'Report Review',
          status: 'completed',
          date: '2024-02-05',
          description: 'Inspection report reviewed and approved'
        },
        {
          step: 'Certificate Issuance',
          status: 'completed',
          date: '2024-02-10',
          description: 'Certificate issued and ready for download'
        }
      ]
    }
  }

  const handleTrack = () => {
    if (!trackingId.trim()) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingId.toUpperCase()]
      setTrackingData(data || null)
      setIsLoading(false)
    }, 1500)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'inProgress':
        return <Clock className="h-5 w-5 text-blue-500" />
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-gray-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-200'
      case 'inProgress':
        return 'bg-blue-100 border-blue-200'
      case 'pending':
        return 'bg-gray-100 border-gray-200'
      default:
        return 'bg-gray-100 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen gradient-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('trackCertification')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('enterTrackingId')}
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 mb-8"
        >
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter tracking ID (e.g., ORG-2024-001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="input-field"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
            </div>
            <button
              onClick={handleTrack}
              disabled={isLoading || !trackingId.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="ml-2">Track</span>
            </button>
          </div>
        </motion.div>

        {/* Results */}
        {trackingData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Application Info */}
            <div className="card p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{trackingData.type}</h2>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>ID: {trackingData.id}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{trackingData.agency}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {trackingData.submittedDate}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  trackingData.status === 'approved' ? 'bg-green-100 text-green-800' :
                  trackingData.status === 'inProgress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {t(trackingData.status)}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Overall Progress</span>
                  <span>{trackingData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${trackingData.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Expected Completion */}
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="font-medium text-primary-900">
                    Expected Completion: {trackingData.expectedCompletion}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Application Timeline</h3>
              <div className="space-y-6">
                {trackingData.timeline.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getStatusIcon(step.status)}
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border-2 ${getStatusColor(step.status)}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{step.step}</h4>
                        {step.date && (
                          <span className="text-sm text-gray-500">{step.date}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {trackingId && !trackingData && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 text-center"
          >
            <AlertCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No application found
            </h3>
            <p className="text-gray-600">
              Please check your tracking ID and try again.
            </p>
          </motion.div>
        )}

        {/* Sample IDs for demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 bg-blue-50 border-blue-200"
        >
          <h3 className="font-semibold text-blue-900 mb-2">Demo Tracking IDs</h3>
          <p className="text-blue-700 text-sm mb-3">Try these sample tracking IDs:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTrackingId('ORG-2024-001')}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              ORG-2024-001
            </button>
            <button
              onClick={() => setTrackingId('ORG-2024-002')}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              ORG-2024-002
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tracking
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Download,
  Upload,
  Bell,
  Calendar,
  TrendingUp
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('applications')

  const applications = [
    {
      id: 'ORG-2024-001',
      type: 'Organic Farming Certificate',
      status: 'inProgress',
      agency: 'TamilNadu Organic Certification',
      submittedDate: '2024-01-15',
      progress: 65,
      lastUpdate: 'Document verification completed'
    },
    {
      id: 'ORG-2024-002',
      type: 'Soil Health Certificate',
      status: 'approved',
      agency: 'Green Earth Certifiers',
      submittedDate: '2024-01-10',
      progress: 100,
      lastUpdate: 'Certificate issued'
    },
    {
      id: 'ORG-2024-003',
      type: 'Crop Quality Assessment',
      status: 'pending',
      agency: 'Organic Standards Board',
      submittedDate: '2024-01-20',
      progress: 25,
      lastUpdate: 'Application received'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'status_update',
      message: 'Application ORG-2024-001 moved to inspection phase',
      timestamp: '2 hours ago',
      icon: <Clock className="h-4 w-4" />
    },
    {
      id: 2,
      type: 'document_uploaded',
      message: 'Soil test report uploaded successfully',
      timestamp: '1 day ago',
      icon: <Upload className="h-4 w-4" />
    },
    {
      id: 3,
      type: 'certificate_ready',
      message: 'Certificate ORG-2024-002 is ready for download',
      timestamp: '3 days ago',
      icon: <Download className="h-4 w-4" />
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'inProgress':
        return <AlertCircle className="h-4 w-4 text-blue-500" />
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'inProgress':
        return 'bg-blue-100 text-blue-800'
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen gradient-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            {t('welcome')}, {user.name}!
          </h1>
          <p className="text-gray-600">
            Manage your organic certification applications and track your progress.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Applications</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">95%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('applications')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === 'applications'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('myApplications')}
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === 'documents'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Documents
                </button>
              </div>
            </div>

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {applications.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        {getStatusIcon(app.status)}
                        <div>
                          <h3 className="font-semibold text-gray-900">{app.type}</h3>
                          <p className="text-sm text-gray-600">{app.agency}</p>
                          <p className="text-xs text-gray-500">ID: {app.id}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                        {t(app.status)}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{app.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Last update: {app.lastUpdate}</span>
                      <span>Submitted: {app.submittedDate}</span>
                    </div>
                  </motion.div>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200"
                >
                  <Plus className="h-6 w-6 mx-auto mb-2" />
                  Start New Application
                </motion.button>
              </motion.div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="card p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-4">Document Management</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">Soil Test Report</p>
                          <p className="text-sm text-gray-500">Uploaded 2 days ago</p>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-primary-600 cursor-pointer" />
                    </div>
                  </div>
                  
                  <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200">
                    <Upload className="h-5 w-5 mx-auto mb-2" />
                    Upload New Document
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                {t('recentActivity')}
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
                  >
                    <div className="text-primary-600 mt-0.5">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">{t('quickActions')}</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Plus className="h-4 w-4 text-primary-600" />
                    <span className="text-sm text-gray-700">New Application</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Upload className="h-4 w-4 text-primary-600" />
                    <span className="text-sm text-gray-700">Upload Documents</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span className="text-sm text-gray-700">Schedule Inspection</span>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
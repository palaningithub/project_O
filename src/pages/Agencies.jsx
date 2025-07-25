import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Star, 
  Phone, 
  Mail, 
  Globe, 
  Filter,
  Search,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react'

const Agencies = () => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const agencies = [
    {
      id: 1,
      name: 'TamilNadu Organic Certification',
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      reviews: 245,
      certified: 1200,
      avgTime: '3-4 months',
      services: ['Crop Certification', 'Soil Testing', 'Processing Certification'],
      contact: {
        phone: '+91 9876543210',
        email: 'info@tnorganic.com',
        website: 'www.tnorganic.com'
      },
      pricing: {
        basic: '₹15,000 - ₹25,000',
        premium: '₹30,000 - ₹45,000'
      },
      accreditation: 'NPOP, NOP, EU Organic',
      established: 2015
    },
    {
      id: 2,
      name: 'Green Earth Certifiers',
      location: 'Coimbatore, Tamil Nadu',
      rating: 4.6,
      reviews: 189,
      certified: 980,
      avgTime: '4-5 months',
      services: ['Organic Farming', 'Input Certification', 'Export Certification'],
      contact: {
        phone: '+91 8765432109',
        email: 'contact@greenearth.org',
        website: 'www.greenearth.org'
      },
      pricing: {
        basic: '₹18,000 - ₹28,000',
        premium: '₹35,000 - ₹50,000'
      },
      accreditation: 'NPOP, JAS Organic',
      established: 2012
    },
    {
      id: 3,
      name: 'Organic Standards Board',
      location: 'Madurai, Tamil Nadu',
      rating: 4.7,
      reviews: 167,
      certified: 750,
      avgTime: '3-4 months',
      services: ['Crop Certification', 'Livestock Certification', 'Wild Harvest'],
      contact: {
        phone: '+91 7654321098',
        email: 'info@orgstandards.in',
        website: 'www.orgstandards.in'
      },
      pricing: {
        basic: '₹16,000 - ₹24,000',
        premium: '₹28,000 - ₹42,000'
      },
      accreditation: 'NPOP, USDA Organic',
      established: 2018
    },
    {
      id: 4,
      name: 'South India Organic Council',
      location: 'Trichy, Tamil Nadu',
      rating: 4.5,
      reviews: 134,
      certified: 620,
      avgTime: '4-6 months',
      services: ['Processing Certification', 'Handling Certification', 'Group Certification'],
      contact: {
        phone: '+91 6543210987',
        email: 'support@sioc.org',
        website: 'www.sioc.org'
      },
      pricing: {
        basic: '₹20,000 - ₹30,000',
        premium: '₹40,000 - ₹55,000'
      },
      accreditation: 'NPOP, EU Organic, COR',
      established: 2010
    }
  ]

  const filteredAgencies = agencies.filter(agency => {
    const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedFilter === 'all') return matchesSearch
    if (selectedFilter === 'high-rated') return matchesSearch && agency.rating >= 4.7
    if (selectedFilter === 'experienced') return matchesSearch && agency.established <= 2015
    return matchesSearch
  })

  return (
    <div className="min-h-screen gradient-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('certificationAgencies')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('findAgencies')}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search agencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Agencies</option>
            <option value="high-rated">High Rated (4.7+)</option>
            <option value="experienced">Experienced (10+ years)</option>
          </select>
        </motion.div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAgencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{agency.name}</h3>
                  <div className="flex items-center space-x-1 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{agency.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900">{agency.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({agency.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                    Est. {agency.established}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Users className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{agency.certified}</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
                <div className="text-center">
                  <Clock className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{agency.avgTime}</div>
                  <div className="text-xs text-gray-600">Avg Time</div>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{agency.rating}</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('services')}</h4>
                <div className="flex flex-wrap gap-2">
                  {agency.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pricing')}</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Basic Package:</span>
                    <span className="font-medium text-gray-900">{agency.pricing.basic}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Premium Package:</span>
                    <span className="font-medium text-gray-900">{agency.pricing.premium}</span>
                  </div>
                </div>
              </div>

              {/* Accreditation */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Accreditation</h4>
                <p className="text-sm text-gray-600">{agency.accreditation}</p>
              </div>

              {/* Contact */}
              <div className="border-t pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${agency.contact.phone}`} className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                  <a href={`mailto:${agency.contact.email}`} className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                  <a href={`https://${agency.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                    <Globe className="h-4 w-4" />
                    <span>Website</span>
                  </a>
                </div>
                
                <button className="w-full mt-4 btn-primary">
                  {t('apply')} Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAgencies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No agencies found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Agencies
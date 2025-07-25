import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()

  const quickLinks = [
    { name: t('home'), href: '/' },
    { name: t('agencies'), href: '/agencies' },
    { name: t('tracking'), href: '/tracking' },
    { name: t('about'), href: '/about' },
  ]

  const resources = [
    { name: 'Certification Guide', href: '/guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
  ]

  const support = [
    { name: t('contact'), href: '/contact' },
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-400" />
              <span className="font-display font-bold text-xl">
                OrganicCert
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering farmers with seamless organic certification processes 
              and connecting them with trusted certification agencies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@organiccert.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OrganicCert Portal. {t('allRightsReserved')}.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Made with ❤️ by Team tecker_z
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
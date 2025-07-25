import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      dashboard: 'Dashboard',
      agencies: 'Agencies',
      tracking: 'Tracking',
      profile: 'Profile',
      login: 'Login',
      register: 'Register',
      about: 'About',
      contact: 'Contact',
      logout: 'Logout',
      
      // Common
      welcome: 'Welcome',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      apply: 'Apply',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      loading: 'Loading...',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      
      // Home page
      heroTitle: 'Connect with Organic Certification Agencies',
      heroSubtitle: 'Streamline your organic farming certification process with our comprehensive platform',
      
      // Features
      features: 'Features',
      realTimeTracking: 'Real-time Tracking',
      trackingDesc: 'Monitor your certification status in real-time with instant updates',
      multilingualSupport: 'Multilingual Support',
      multilingualDesc: 'Available in multiple languages including Tamil and English',
      agencyDirectory: 'Agency Directory',
      agencyDirectoryDesc: 'Find and connect with certified organic certification agencies',
      documentManagement: 'Document Management',
      documentDesc: 'Upload documents and download certificates securely',
      
      // Dashboard
      myApplications: 'My Applications',
      recentActivity: 'Recent Activity',
      quickActions: 'Quick Actions',
      certificationStatus: 'Certification Status',
      
      // Agencies
      certificationAgencies: 'Certification Agencies',
      findAgencies: 'Find Agencies Near You',
      agencyDetails: 'Agency Details',
      services: 'Services',
      pricing: 'Pricing',
      
      // Tracking
      trackCertification: 'Track Certification',
      enterTrackingId: 'Enter your tracking ID',
      trackingId: 'Tracking ID',
      status: 'Status',
      lastUpdated: 'Last Updated',
      
      // Status types
      pending: 'Pending',
      inProgress: 'In Progress',
      underReview: 'Under Review',
      approved: 'Approved',
      rejected: 'Rejected',
      completed: 'Completed',
      
      // Forms
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      phoneNumber: 'Phone Number',
      farmLocation: 'Farm Location',
      farmSize: 'Farm Size',
      cropType: 'Crop Type',
      
      // Chatbot
      chatWithBot: 'Chat with AI Assistant',
      typeMessage: 'Type your message...',
      botGreeting: 'Hello! I\'m here to help you with organic certification. How can I assist you today?',
      
      // Footer
      quickLinks: 'Quick Links',
      resources: 'Resources',
      support: 'Support',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
    }
  },
  ta: {
    translation: {
      // Navigation
      home: 'முகப்பு',
      dashboard: 'டாஷ்போர்டு',
      agencies: 'ஏஜென்சிகள்',
      tracking: 'கண்காணிப்பு',
      profile: 'சுயவிவரம்',
      login: 'உள்நுழைய',
      register: 'பதிவு செய்ய',
      about: 'எங்களைப் பற்றி',
      contact: 'தொடர்பு',
      logout: 'வெளியேறு',
      
      // Common
      welcome: 'வரவேற்கிறோம்',
      getStarted: 'தொடங்குங்கள்',
      learnMore: 'மேலும் அறிய',
      viewDetails: 'விவரங்களைப் பார்க்க',
      apply: 'விண்ணப்பிக்க',
      submit: 'சமர்பிக்க',
      cancel: 'ரத்து செய்',
      save: 'சேமிக்க',
      loading: 'ஏற்றுகிறது...',
      search: 'தேடல்',
      filter: 'வடிகட்டி',
      all: 'அனைத்தும்',
      
      // Home page
      heroTitle: 'இயற்கை சான்றிதழ் ஏஜென்சிகளுடன் இணைந்திருங்கள்',
      heroSubtitle: 'எங்கள் விரிவான தளத்துடன் உங்கள் இயற்கை விவசாய சான்றிதழ் செயல்முறையை சீரமைக்கவும்',
      
      // Features
      features: 'அம்சங்கள்',
      realTimeTracking: 'நேரடி கண்காணிப்பு',
      trackingDesc: 'உடனடி புதுப்பிப்புகளுடன் உங்கள் சான்றிதழ் நிலையை நேரடியாக கண்காணிக்கவும்',
      multilingualSupport: 'பன்மொழி ஆதரவு',
      multilingualDesc: 'தமிழ் மற்றும் ஆங்கிலம் உட்பட பல மொழிகளில் கிடைக்கிறது',
      agencyDirectory: 'ஏஜென்சி அடைவு',
      agencyDirectoryDesc: 'சான்றளிக்கப்பட்ட இயற்கை சான்றிதழ் ஏஜென்சிகளைக் கண்டுபிடித்து இணைக்கவும்',
      documentManagement: 'ஆவண மேலாண்மை',
      documentDesc: 'ஆவணங்களைப் பதிவேற்றவும் மற்றும் சான்றிதழ்களை பாதுகாப்பாக பதிவிறக்கவும்',
      
      // Dashboard
      myApplications: 'எனது விண்ணப்பங்கள்',
      recentActivity: 'சமீபத்திய செயல்பாடு',
      quickActions: 'விரைவு நடவடிக்கைகள்',
      certificationStatus: 'சான்றிதழ் நிலை',
      
      // Agencies
      certificationAgencies: 'சான்றிதழ் ஏஜென்சிகள்',
      findAgencies: 'உங்கள் அருகில் ஏஜென்சிகளைக் கண்டுபிடிக்கவும்',
      agencyDetails: 'ஏஜென்சி விவரங்கள்',
      services: 'சேவைகள்',
      pricing: 'விலை நிர்ணயம்',
      
      // Tracking
      trackCertification: 'சான்றிதழ் கண்காணிப்பு',
      enterTrackingId: 'உங்கள் கண்காணிப்பு ஐடியை உள்ளிடவும்',
      trackingId: 'கண்காணிப்பு ஐடி',
      status: 'நிலை',
      lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது',
      
      // Status types
      pending: 'நிலுவையில்',
      inProgress: 'செயல்பாட்டில்',
      underReview: 'மதிப்பாய்வில்',
      approved: 'அங்கீகரிக்கப்பட்டது',
      rejected: 'நிராகரிக்கப்பட்டது',
      completed: 'நிறைவு',
      
      // Forms
      firstName: 'முதல் பெயர்',
      lastName: 'கடைசி பெயர்',
      email: 'மின்னஞ்சல்',
      password: 'கடவுச்சொல்',
      confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      phoneNumber: 'தொலைபேசி எண்',
      farmLocation: 'பண்ணை இடம்',
      farmSize: 'பண்ணை அளவு',
      cropType: 'பயிர் வகை',
      
      // Chatbot
      chatWithBot: 'AI உதவியாளருடன் அரட்டை',
      typeMessage: 'உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...',
      botGreeting: 'வணக்கம்! இயற்கை சான்றிதழ் பற்றி உதவ நான் இங்கே இருக்கிறேன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
      
      // Footer
      quickLinks: 'விரைவு இணைப்புகள்',
      resources: 'வளங்கள்',
      support: 'ஆதரவு',
      followUs: 'எங்களைப் பின்பற்றுங்கள்',
      allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
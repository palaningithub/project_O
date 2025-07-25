import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const { t } = useTranslation()

  const botResponses = {
    en: {
      greeting: "Hello! I'm here to help you with organic certification. How can I assist you today?",
      certification: "Organic certification is a process that verifies your farming practices meet organic standards. I can help you find agencies and track your application.",
      agencies: "We have partnered with certified agencies across Tamil Nadu. You can browse them in the Agencies section and apply directly through our portal.",
      tracking: "You can track your certification status using your unique tracking ID. Just go to the Tracking page and enter your ID.",
      documents: "You'll need soil test reports, farm maps, seed purchase records, and production records. Our agencies will guide you through the specific requirements.",
      cost: "Certification costs vary by farm size and agency. Typically ranges from ₹15,000 to ₹50,000. You can get quotes from multiple agencies through our platform.",
      time: "The certification process usually takes 3-6 months, depending on your documentation and inspection scheduling.",
      default: "I understand you're asking about organic certification. Could you be more specific? I can help with agencies, tracking, documents, costs, or the certification process."
    },
    ta: {
      greeting: "வணக்கம்! இயற்கை சான்றிதழ் பற்றி உதவ நான் இங்கே இருக்கிறேன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      certification: "இயற்கை சான்றிதழ் என்பது உங்கள் விவசாய நடைமுறைகள் இயற்கை தரநிலைகளைப் பூர்த்தி செய்கின்றன என்பதை சரிபார்க்கும் செயல்முறையாகும்.",
      agencies: "தமிழ்நாடு முழுவதும் சான்றளிக்கப்பட்ட ஏஜென்சிகளுடன் நாங்கள் கூட்டாண்மை கொண்டுள்ளோம்.",
      tracking: "உங்கள் தனிப்பட்ட கண்காணிப்பு ஐடியைப் பயன்படுத்தி உங்கள் சான்றிதழ் நிலையைக் கண்காணிக்கலாம்.",
      documents: "உங்களுக்கு மண் சோதனை அறிக்கைகள், பண்ணை வரைபடங்கள், விதை வாங்கும் பதிவுகள் மற்றும் உற்பத்தி பதிவுகள் தேவைப்படும்.",
      cost: "சான்றிதழ் செலவுகள் பண்ணை அளவு மற்றும் ஏஜென்சியைப் பொறுத்து மாறுபடும். பொதுவாக ₹15,000 முதல் ₹50,000 வரை.",
      time: "சான்றிதழ் செயல்முறை பொதுவாக 3-6 மாதங்கள் ஆகும்.",
      default: "இயற்கை சான்றிதழ் பற்றி நீங்கள் கேட்கிறீர்கள் என்பதை நான் புரிந்துகொள்கிறேன். இன்னும் குறிப்பிட்டதாக இருக்க முடியுமா?"
    }
  }

  const getBotResponse = (message) => {
    const lang = t('home') === 'Home' ? 'en' : 'ta'
    const responses = botResponses[lang]
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('certification') || lowerMessage.includes('organic')) {
      return responses.certification
    }
    if (lowerMessage.includes('agency') || lowerMessage.includes('agencies')) {
      return responses.agencies
    }
    if (lowerMessage.includes('track') || lowerMessage.includes('status')) {
      return responses.tracking
    }
    if (lowerMessage.includes('document') || lowerMessage.includes('paper')) {
      return responses.documents
    }
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee')) {
      return responses.cost
    }
    if (lowerMessage.includes('time') || lowerMessage.includes('duration')) {
      return responses.time
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('வணக்கம்')) {
      return responses.greeting
    }
    
    return responses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: 'user', content: inputValue, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const initializeChat = () => {
    if (messages.length === 0) {
      const lang = t('home') === 'Home' ? 'en' : 'ta'
      const greeting = {
        type: 'bot',
        content: botResponses[lang].greeting,
        timestamp: new Date()
      }
      setMessages([greeting])
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) initializeChat()
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">{t('chatWithBot')}</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('typeMessage')}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
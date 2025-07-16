import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useWallet } from '../contexts/WalletContext'
import Navbar from '../components/Navbar'
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle,
  Star
} from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  const { isConnected } = useWallet()

  React.useEffect(() => {
    if (isConnected) {
      navigate('/dashboard')
    }
  }, [isConnected, navigate])

  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Smart contract-based escrow system ensures secure transactions'
    },
    {
      icon: Zap,
      title: 'Instant Matching',
      description: 'AI-powered matching connects you with the right freelancers'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access talent from around the world with decentralized platform'
    },
    {
      icon: Users,
      title: 'Verified Profiles',
      description: 'Blockchain-verified identities and reputation system'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Startup Founder',
      content: 'OrbitUs helped me find amazing developers for my project. The smart contract payment system gave me peace of mind.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Developer',
      content: 'Finally, a platform that protects freelancers with transparent payments and fair dispute resolution.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Digital Agency Owner',
      content: 'The quality of talent and the security of payments make OrbitUs our go-to platform for all projects.',
      rating: 5
    }
  ]

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              The Future of
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                {' '}Freelancing
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Connect with top talent worldwide on a secure, decentralized platform. 
              Smart contracts ensure fair payments and transparent transactions.
            </motion.p>
             
             
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent transition-all duration-200 border border-border">
                <span>Learn More</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose OrbitUs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on blockchain technology for transparency, security, and global accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied clients and freelancers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the decentralized freelancing revolution today
            </p>
            <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl mx-auto">
              <span>Connect Wallet to Begin</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>    
  )
}

export default LandingPage
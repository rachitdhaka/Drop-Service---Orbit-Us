import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star, 
  Award,
  Briefcase,
  DollarSign,
  Edit3,
  Save,
  X,
  Plus,
  ExternalLink
} from 'lucide-react';

const Profile = () => {
  const { account, formatAddress, formatBalance, balance } = useWallet();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and blockchain development. Passionate about creating innovative solutions.',
    skills: ['React', 'Node.js', 'Solidity', 'Web3', 'TypeScript', 'Python'],
    hourlyRate: '75',
    availability: 'Full-time'
  });

  const stats = [
    {
      label: 'Jobs Completed',
      value: '127',
      icon: Briefcase,
      color: 'text-blue-600'
    },
    {
      label: 'Total Earned',
      value: '$45,230',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      label: 'Average Rating',
      value: '4.9',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      label: 'Success Rate',
      value: '98%',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const recentWork = [
    {
      title: 'E-commerce Platform',
      client: 'TechCorp',
      completedDate: '2024-01-15',
      rating: 5,
      earnings: '$3,200'
    },
    {
      title: 'Smart Contract Audit',
      client: 'DeFi Protocol',
      completedDate: '2024-01-10',
      rating: 5,
      earnings: '$2,800'
    },
    {
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      completedDate: '2024-01-05',
      rating: 4.8,
      earnings: '$4,500'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form or handle cancel logic
    setIsEditing(false);
  };

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                My Profile
              </h1>
              <p className="text-muted-foreground">
                Wallet: <span className="font-mono text-primary">{formatAddress(account)}</span>
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {isEditing ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Basic Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  ) : (
                    <p className="text-foreground">{profileData.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  ) : (
                    <p className="text-foreground">{profileData.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  ) : (
                    <p className="text-foreground">{profileData.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  ) : (
                    <p className="text-foreground">{profileData.location}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">About Me</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell clients about yourself..."
                />
              ) : (
                <p className="text-foreground">{profileData.bio}</p>
              )}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <button className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:bg-accent transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Recent Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Recent Work</h2>
              <div className="space-y-4">
                {recentWork.map((work, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">{work.title}</h3>
                      <p className="text-sm text-muted-foreground">{work.client}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-foreground">{work.rating}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{work.completedDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{work.earnings}</p>
                      <button className="text-xs text-primary hover:text-primary/80 flex items-center space-x-1">
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {isEditing && (
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent transition-colors border border-border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Stats & Wallet */}
          <div className="space-y-6">
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Statistics</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-medium text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Wallet Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Wallet</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Address</span>
                  <span className="font-mono text-sm text-foreground">{formatAddress(account)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Balance</span>
                  <span className="font-medium text-foreground">{formatBalance(balance)} ETH</span>
                </div>
              </div>
            </motion.div>

            {/* Rate & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Rate & Availability</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Hourly Rate</label>
                  {isEditing ? (
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                      <input
                        type="number"
                        name="hourlyRate"
                        value={profileData.hourlyRate}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  ) : (
                    <p className="text-foreground">${profileData.hourlyRate}/hour</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Availability</label>
                  {isEditing ? (
                    <select
                      name="availability"
                      value={profileData.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                  ) : (
                    <p className="text-foreground">{profileData.availability}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import { 
  Briefcase, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const { account, formatAddress } = useWallet();

  // Mock data - replace with actual data later
  const stats = [
    {
      title: "Active Jobs",
      value: "24",
      change: "+12%",
      icon: Briefcase,
      color: "text-blue-600"
    },
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+8%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Clients",
      value: "156",
      change: "+18%",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Success Rate",
      value: "98%",
      change: "+2%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Build a React Dashboard",
      client: "TechCorp Inc.",
      budget: "$2,500",
      deadline: "5 days",
      location: "Remote",
      rating: 4.8,
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Smart Contract Development",
      client: "BlockChain Solutions",
      budget: "$5,000",
      deadline: "2 weeks",
      location: "Remote",
      rating: 4.9,
      skills: ["Solidity", "Web3", "JavaScript"]
    },
    {
      id: 3,
      title: "UI/UX Design for Mobile App",
      client: "StartupXYZ",
      budget: "$1,800",
      deadline: "1 week",
      location: "New York",
      rating: 4.7,
      skills: ["Figma", "UI Design", "Mobile"]
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back!
          </h1>
          <p className="text-muted-foreground">
            Connected as: <span className="font-mono text-primary">{formatAddress(account)}</span>
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Post New Job</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors border border-border">
            <Search className="w-5 h-5" />
            <span>Browse Jobs</span>
          </button>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-lg shadow-sm"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Recent Job Listings</h2>
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-border">
            {recentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{job.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{job.client}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.budget}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      Apply Now
                    </button>
                    <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors border border-border">
                      Save Job
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

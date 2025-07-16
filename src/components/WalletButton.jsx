import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import { 
  Wallet, 
  ChevronDown, 
  Copy, 
  ExternalLink, 
  LogOut, 
  CheckCircle,
  User
} from 'lucide-react';

const WalletButton = () => {
  const { 
    account, 
    isConnected, 
    isConnecting, 
    connectWallet, 
    disconnect, 
    formatAddress, 
    formatBalance, 
    balance, 
    chainId, 
    getNetworkName 
  } = useWallet();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const copyAddress = async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const viewOnExplorer = () => {
    if (account && chainId) {
      const explorers = {
        1: `https://etherscan.io/address/${account}`,
        5: `https://goerli.etherscan.io/address/${account}`,
        137: `https://polygonscan.com/address/${account}`,
        80001: `https://mumbai.polygonscan.com/address/${account}`,
      };
      const url = explorers[chainId];
      if (url) window.open(url, '_blank');
    }
  };

  if (!isConnected) {
    return (
      <motion.button
        onClick={handleConnect}
        disabled={isConnecting}
        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg border border-primary/20 disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isConnecting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Wallet className="w-4 h-4" />
            </motion.div>
            <span>Connecting...</span>
          </>
        ) : (
          <>
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </>
        )}
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg border border-border"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-3 h-3 text-white" />
        </div>
        <span>{formatAddress(account)}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg z-50 p-1"
          >
            {/* Status */}
            <div className="px-3 py-2 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Connected</span>
              </div>
            </div>

            {/* Account Info */}
            <div className="px-3 py-3 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Account</span>
                <button
                  onClick={copyAddress}
                  className="text-xs text-primary hover:text-primary/80 flex items-center space-x-1"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-sm text-foreground break-all">
                {account}
              </div>
            </div>

            {/* Balance */}
            <div className="px-3 py-3 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Balance</span>
                <span className="text-sm font-medium text-foreground">
                  {formatBalance(balance)} ETH
                </span>
              </div>
            </div>

            {/* Network */}
            <div className="px-3 py-3 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Network</span>
                <span className="text-sm font-medium text-foreground">
                  {getNetworkName(chainId)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-1">
              <button
                onClick={viewOnExplorer}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on Explorer</span>
              </button>
              
              <button
                onClick={() => {
                  disconnect();
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Disconnect</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default WalletButton;

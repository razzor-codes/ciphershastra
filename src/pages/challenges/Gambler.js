import ContractViewer from "../../components/ContractViewer";
import { FaDice, FaEthereum, FaLock, FaCode, FaShieldAlt, FaTrophy, FaUsers, FaBookOpen } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from '../../contexts/ThemeContext';

export default function Gambler() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full text-sm font-semibold text-red-700 dark:text-red-300 mb-6 border border-red-200 dark:border-red-800">
              <FaDice className="text-red-500 dark:text-red-400" />
              Medium Difficulty Challenge
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
              The Gambler
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Life is a gamble! Wanna bet? Double or nothing! Find the vulnerability in this high-stakes smart contract.
            </p>
            
            {/* Challenge Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-2xl font-black text-red-600 dark:text-red-400 mb-1">127</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Attempts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-orange-600 dark:text-orange-400 mb-1">23</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-yellow-600 dark:text-yellow-400 mb-1">18%</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-green-600 dark:text-green-400 mb-1">500</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Info Card */}
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-12`}>
          <div className={`backdrop-blur-xl rounded-3xl shadow-2xl border p-8 ${
            isDarkMode 
              ? 'bg-gray-800/90 border-gray-700/50' 
              : 'bg-white/90 border-gray-200/50'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg">
                <FaEthereum className="text-2xl text-white" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Contract Details</h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Deployed on Goerli Testnet</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-blue-500" />
                  <div>
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Network: </span>
                    <span className="text-blue-600 font-mono">Goerli Testnet</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLock className="text-green-500" />
                  <div>
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Security Level: </span>
                    <span className="text-orange-600 font-semibold">Vulnerable</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCode className="text-purple-500" />
                  <div>
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Language: </span>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Solidity ^0.8.0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEthereum className="text-blue-500 mt-1" />
                  <div className="flex-1">
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Address: </span>
                    <a
                      href="https://goerli.etherscan.io/address/0x23cb5a2d4d08ebf6b9c893d76ef2fbfe3588efaf"
                      className={`font-mono text-sm break-all underline transition-colors duration-200 ${
                        isDarkMode 
                          ? 'text-blue-400 hover:text-blue-300' 
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0x23cb5a2d4d08ebf6b9c893d76ef2fbfe3588efaf
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-12`}>
          <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg border p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl w-fit mb-4">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Randomness Vulnerabilities</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Understand how predictable randomness can be exploited in gambling contracts.</p>
            </div>
            
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg border p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl w-fit mb-4">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Game Theory Attacks</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Learn about economic incentives and how they can be manipulated.</p>
            </div>
            
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg border p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl w-fit mb-4">
                <FaBookOpen className="text-2xl text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Secure RNG Patterns</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Discover best practices for implementing secure random number generation.</p>
            </div>
          </div>
        </div>

        {/* Contract Code Section */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Vulnerable Contract</h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Analyze this smart contract and identify the vulnerability. Can you figure out how to always win?
            </p>
          </div>
          
          <div className={`backdrop-blur-xl rounded-3xl shadow-2xl border overflow-hidden ${
            isDarkMode 
              ? 'bg-gray-800/90 border-gray-700/50' 
              : 'bg-white/90 border-gray-200/50'
          }`}>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-mono text-sm">gambler.sol</span>
              </div>
            </div>
            <div className="p-1">
              <ContractViewer contractFile="gambler.sol" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-16`}>
          <div className={`text-center rounded-3xl p-12 border ${
            isDarkMode
              ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-800/50'
              : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200/50'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Ready to Take the Challenge?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Deploy your exploit contract and drain the Gambler! Remember, fortune favors the prepared mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Start Hacking
              </button>
              <button className={`px-8 py-4 rounded-2xl font-bold border-2 transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600 hover:border-red-400 hover:text-red-400'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600'
              }`}>
                View Hints
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
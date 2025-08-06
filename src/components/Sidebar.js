import { NavLink, Link } from "react-router-dom";
import { FaCode, FaShieldAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import { useTheme } from '../contexts/ThemeContext';

export default function Sidebar() {
  const { isDarkMode } = useTheme();
  const challenges = [
    { name: "Gambler", path: "/challenges/gambler", icon: <FaCode />, difficulty: "Medium" }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white flex-shrink-0 border-r border-gray-700/50 dark:border-gray-800/50 backdrop-blur-xl transition-colors duration-300">
      <div className="p-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity duration-200 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-200">
            <FaShieldAlt className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cipher Shastra
            </h1>
            <p className="text-xs text-gray-400 dark:text-gray-500">Security Platform</p>
          </div>
        </Link>

        {/* Challenges Section */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-4 px-3">
            Challenges
          </div>
          <div className="space-y-2">
            {challenges.map((challenge) => (
              <NavLink
                key={challenge.path}
                to={challenge.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                      : "text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  {challenge.icon}
                  <span>{challenge.name}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  challenge.difficulty === 'Easy' 
                    ? (isDarkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800')
                    : challenge.difficulty === 'Medium' 
                      ? (isDarkMode ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800')
                      : (isDarkMode ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-800')
                }`}>
                  {challenge.difficulty}
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/20">
          <div className="flex items-center space-x-2 mb-2">
            <FaUsers className="text-blue-400" />
            <span className="text-sm font-bold">Community</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            Join our Discord to connect with other security researchers.
          </p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200">
            Join Discord
          </button>
        </div>

        {/* Creator Credit */}
        <div className="mt-6">
          <a 
            href="https://razzor.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md transform group-hover:scale-105 transition-all duration-300">
              <FaCode className="text-white text-sm" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-gray-300">Made with</span>
                <span className="text-red-400 animate-pulse">♥</span>
                <span className="text-gray-300">by</span>
              </div>
              <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                @razzor
              </div>
            </div>
            
            <FaArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

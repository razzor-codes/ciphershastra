import { Link, useLocation } from "react-router-dom";
import { FaShieldAlt, FaTrophy, FaBook, FaMap, FaDiscord, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import LoginWidget from "./LoginWidget";

export default function Navbar() {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  // Helper function to get link styles based on active state and theme
  const getLinkStyles = (path, baseColor, hoverColor) => {
    if (isActive(path)) {
      return `flex items-center space-x-2 px-4 py-2 rounded-xl text-${baseColor}-600 dark:text-${baseColor}-400 bg-${baseColor}-50 dark:bg-${baseColor}-900/30 border border-${baseColor}-200 dark:border-${baseColor}-700 font-medium transition-all duration-200 shadow-sm`;
    }
    return `flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-${hoverColor}-600 dark:hover:text-${hoverColor}-400 hover:bg-${hoverColor}-50 dark:hover:bg-${hoverColor}-900/30 transition-all duration-200 font-medium`;
  };
  return (
    <nav className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm relative z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <FaShieldAlt className="text-xl text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cipher Shastra
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Security Platform</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/leaderboard"
              className={getLinkStyles("/leaderboard", "purple", "purple")}
            >
              <FaTrophy className="text-sm" />
              <span>Leaderboard</span>
            </Link>
            <Link
              to="/resources"
              className={getLinkStyles("/resources", "green", "green")}
            >
              <FaBook className="text-sm" />
              <span>Resources</span>
            </Link>
            <Link
              to="/roadmap"
              className={getLinkStyles("/roadmap", "orange", "orange")}
            >
              <FaMap className="text-sm" />
              <span>Roadmap</span>
            </Link>
          </div>

          {/* Right side - Theme Toggle, Community & Login */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200 group"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <div className="relative">
                {isDarkMode ? (
                  <FaSun className="text-lg group-hover:rotate-12 transition-transform duration-200" />
                ) : (
                  <FaMoon className="text-lg group-hover:-rotate-12 transition-transform duration-200" />
                )}
              </div>
            </button>

            {/* Community Links */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="https://discord.gg/ciphershastra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200"
                title="Join Discord"
              >
                <FaDiscord className="text-lg" />
              </a>
              <a
                href="https://github.com/razzor-codes/cipher-shastra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                title="View on GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>

            {/* Login Widget */}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <LoginWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
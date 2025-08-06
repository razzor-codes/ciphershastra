import { FaBook, FaVideo, FaCode, FaShieldAlt, FaGraduationCap, FaExternalLinkAlt, FaUsers, FaDownload, FaClock, FaStar, FaBug, FaHammer, FaLightbulb } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from '../contexts/ThemeContext';

const resourceCategories = [
  {
    title: "Getting Started",
    icon: FaGraduationCap,
    color: "from-blue-500 to-cyan-600",
    resources: [
      {
        title: "Smart Contract Security 101",
        type: "Guide",
        description: "Complete beginner's guide to understanding smart contract vulnerabilities and security best practices.",
        link: "#",
        duration: "2 hours",
        level: "Beginner",
        rating: 4.9
      },
      {
        title: "Solidity Security Patterns",
        type: "Documentation",
        description: "Essential security patterns every Solidity developer should know and implement.",
        link: "#",
        duration: "1.5 hours",
        level: "Intermediate",
        rating: 4.8
      },
      {
        title: "Web3 Security Fundamentals",
        type: "Course",
        description: "Comprehensive course covering blockchain security from basics to advanced concepts.",
        link: "#",
        duration: "8 hours",
        level: "Beginner",
        rating: 4.7
      }
    ]
  },
  {
    title: "Vulnerability Research",
    icon: FaBug,
    color: "from-red-500 to-pink-600",
    resources: [
      {
        title: "Common Smart Contract Vulnerabilities",
        type: "Research",
        description: "Deep dive into the most common vulnerabilities found in smart contracts with real examples.",
        link: "#",
        duration: "3 hours",
        level: "Advanced",
        rating: 4.9
      },
      {
        title: "DeFi Attack Vectors",
        type: "Analysis",
        description: "Comprehensive analysis of DeFi protocols attacks and how to prevent them.",
        link: "#",
        duration: "4 hours",
        level: "Expert",
        rating: 4.8
      },
      {
        title: "Zero-Day Vulnerability Discovery",
        type: "Workshop",
        description: "Learn advanced techniques for discovering zero-day vulnerabilities in smart contracts.",
        link: "#",
        duration: "6 hours",
        level: "Expert",
        rating: 4.6
      }
    ]
  },
  {
    title: "Security Tools",
    icon: FaHammer,
    color: "from-purple-500 to-indigo-600",
    resources: [
      {
        title: "Static Analysis Tools Guide",
        type: "Tutorial",
        description: "Master tools like Slither, MythX, and Securify for automated vulnerability detection.",
        link: "#",
        duration: "2.5 hours",
        level: "Intermediate",
        rating: 4.7
      },
      {
        title: "Fuzzing Smart Contracts",
        type: "Workshop",
        description: "Learn how to use Echidna and other fuzzing tools to find edge cases and vulnerabilities.",
        link: "#",
        duration: "3 hours",
        level: "Advanced",
        rating: 4.5
      },
      {
        title: "Manual Code Review Techniques",
        type: "Guide",
        description: "Best practices for conducting thorough manual security reviews of smart contracts.",
        link: "#",
        duration: "2 hours",
        level: "Intermediate",
        rating: 4.8
      }
    ]
  },
  {
    title: "Community & Practice",
    icon: FaUsers,
    color: "from-green-500 to-emerald-600",
    resources: [
      {
        title: "Security CTF Archive",
        type: "Practice",
        description: "Collection of past CTF challenges to sharpen your security skills.",
        link: "#",
        duration: "Ongoing",
        level: "All Levels",
        rating: 4.9
      },
      {
        title: "Bug Bounty Programs",
        type: "Directory",
        description: "Curated list of active bug bounty programs for smart contract security.",
        link: "#",
        duration: "Updated Weekly",
        level: "Intermediate",
        rating: 4.6
      },
      {
        title: "Security Research Papers",
        type: "Research",
        description: "Latest academic research on blockchain and smart contract security.",
        link: "#",
        duration: "Various",
        level: "Advanced",
        rating: 4.4
      }
    ]
  }
];

const getLevelColor = (level, isDarkMode) => {
  if (isDarkMode) {
    switch (level) {
      case "Beginner": return "bg-green-800 text-green-200";
      case "Intermediate": return "bg-yellow-800 text-yellow-200";
      case "Advanced": return "bg-orange-800 text-orange-200";
      case "Expert": return "bg-red-800 text-red-200";
      default: return "bg-gray-700 text-gray-300";
    }
  } else {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  }
};

const getTypeIcon = (type) => {
  switch (type) {
    case "Guide": return FaBook;
    case "Video": return FaVideo;
    case "Course": return FaGraduationCap;
    case "Tutorial": return FaCode;
    case "Workshop": return FaHammer;
    case "Research": return FaLightbulb;
    case "Documentation": return FaBook;
    case "Analysis": return FaBug;
    case "Practice": return FaShieldAlt;
    case "Directory": return FaUsers;
    default: return FaBook;
  }
};

export default function Resources() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800">
              <FaBook className="text-blue-600 dark:text-blue-400" />
              <span>Learning Resources</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Resources
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Master Web3 security with our curated collection of guides, tools, and educational content.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>150+</div>
                <div className={`text-sm font-medium uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Resources</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>50+</div>
                <div className={`text-sm font-medium uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hours Content</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>12</div>
                <div className={`text-sm font-medium uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Categories</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>4.8</div>
                <div className={`text-sm font-medium uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-12`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    selectedCategory === index
                      ? isDarkMode
                        ? "bg-gray-800 shadow-2xl scale-105 border-2 border-blue-600"
                        : "bg-white shadow-2xl scale-105 border-2 border-blue-200"
                      : isDarkMode
                        ? "bg-gray-800/80 shadow-lg hover:shadow-xl hover:scale-102 border border-gray-700/50"
                        : "bg-white/80 shadow-lg hover:shadow-xl hover:scale-102 border border-gray-200/50"
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <IconComponent className="text-white text-xl" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{category.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{category.resources.length} resources</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resource Cards */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{resourceCategories[selectedCategory].title}</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Explore our curated collection of {resourceCategories[selectedCategory].title.toLowerCase()} resources</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories[selectedCategory].resources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <div key={index} className={`backdrop-blur-xl rounded-3xl shadow-xl border p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-gray-800/90 border-gray-700/50' 
                    : 'bg-white/90 border-gray-200/50'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 bg-gradient-to-r ${resourceCategories[selectedCategory].color} rounded-xl shadow-lg`}>
                      <TypeIcon className="text-white text-lg" />
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar className="text-sm" />
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{resource.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resource.type}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(resource.level, isDarkMode)}`}>
                        {resource.level}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-blue-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                      {resource.title}
                    </h3>
                    <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{resource.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <FaClock className="text-sm" />
                      <span className="text-sm">{resource.duration}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
                    Access Resource
                    <FaExternalLinkAlt className="text-sm" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Resources */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-16`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <FaStar className="text-yellow-300" />
                  Featured Collection
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Security Toolkit</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Get exclusive access to our premium collection of advanced security tools, research papers, and expert-led workshops.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaShieldAlt className="text-2xl" />
                  </div>
                  <h3 className="font-bold mb-1">Advanced Tools</h3>
                  <p className="text-sm opacity-80">Professional security analysis tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <h3 className="font-bold mb-1">Expert Training</h3>
                  <p className="text-sm opacity-80">Direct access to security experts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaUsers className="text-2xl" />
                  </div>
                  <h3 className="font-bold mb-1">Community</h3>
                  <p className="text-sm opacity-80">Private community of security pros</p>
                </div>
              </div>
              
              <div className="text-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2">
                  <FaDownload />
                  Access Premium Resources
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-16`}>
          <div className={`text-center rounded-3xl p-12 border ${
            isDarkMode
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600/50'
              : 'bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200/50'
          }`}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
                <FaLightbulb className="text-3xl text-white" />
              </div>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Contribute to Our Resources
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a great resource to share? Help the community grow by contributing your knowledge and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Submit Resource
              </button>
              <button className={`px-8 py-4 rounded-2xl font-bold border-2 transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600 hover:border-blue-400 hover:text-blue-400'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}>
                <span className="flex items-center gap-2">
                  <FaUsers />
                  Join Community
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
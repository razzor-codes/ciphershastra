import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar, FaUsers, FaFire, FaChartLine, FaCrown, FaShieldAlt, FaBolt, FaGem, FaRocket, FaEye, FaCalendarAlt, FaCheckCircle, FaClock } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

// Enhanced leaderboard data with more details
const leaderboardData = [
  {
    id: 1,
    rank: 1,
    username: "CryptoHunter",
    title: "Security Master",
    score: 2450,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoHunter&backgroundColor=b6e3f4",
    country: "🇺🇸",
    badges: [
      { icon: "🏆", name: "Champion", color: "text-yellow-500" },
      { icon: "💎", name: "Diamond", color: "text-blue-400" },
      { icon: "🔥", name: "Streak Master", color: "text-orange-500" }
    ],
    challengesCompleted: 28,
    streakDays: 15,
    totalEarnings: "$4,500",
    level: "Expert",
    joinedDate: "2023-01-15",
    recentActivity: "2 hours ago",
    specialties: ["DeFi Security", "Smart Contract Auditing"],
    monthlyRank: 1,
    weeklyRank: 1
  },
  {
    id: 2,
    rank: 2,
    username: "SmartContractNinja",
    title: "Vulnerability Hunter",
    score: 2380,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SmartContractNinja&backgroundColor=c0aede",
    country: "🇯🇵",
    badges: [
      { icon: "🏆", name: "Champion", color: "text-yellow-500" },
      { icon: "💎", name: "Diamond", color: "text-blue-400" },
      { icon: "⚡", name: "Speed Demon", color: "text-purple-500" }
    ],
    challengesCompleted: 26,
    streakDays: 12,
    totalEarnings: "$3,800",
    level: "Expert",
    joinedDate: "2023-02-01",
    recentActivity: "1 hour ago",
    specialties: ["Zero-day Discovery", "Protocol Analysis"],
    monthlyRank: 2,
    weeklyRank: 1
  },
  {
    id: 3,
    rank: 3,
    username: "Web3Warrior",
    title: "Bug Bounty Pro",
    score: 2150,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Warrior&backgroundColor=ffd93d",
    country: "🇩🇪",
    badges: [
      { icon: "🏆", name: "Champion", color: "text-yellow-500" },
      { icon: "⚡", name: "Speed Demon", color: "text-purple-500" },
      { icon: "🎯", name: "Precision", color: "text-green-500" }
    ],
    challengesCompleted: 24,
    streakDays: 8,
    totalEarnings: "$2,900",
    level: "Advanced",
    joinedDate: "2023-03-10",
    recentActivity: "30 minutes ago",
    specialties: ["MEV Protection", "Cross-chain Security"],
    monthlyRank: 3,
    weeklyRank: 2
  },
  {
    id: 4,
    rank: 4,
    username: "BlockchainExplorer",
    title: "Security Researcher",
    score: 1980,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainExplorer&backgroundColor=ffb3ba",
    country: "🇨🇦",
    badges: [
      { icon: "🏆", name: "Champion", color: "text-yellow-500" },
      { icon: "🔬", name: "Researcher", color: "text-indigo-500" }
    ],
    challengesCompleted: 22,
    streakDays: 6,
    totalEarnings: "$2,400",
    level: "Advanced",
    joinedDate: "2023-04-05",
    recentActivity: "5 hours ago",
    specialties: ["Consensus Security", "Layer 2 Analysis"],
    monthlyRank: 4,
    weeklyRank: 5
  },
  {
    id: 5,
    rank: 5,
    username: "DeFiDetective",
    title: "Protocol Auditor",
    score: 1850,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiDetective&backgroundColor=bae1ff",
    country: "🇬🇧",
    badges: [
      { icon: "⚡", name: "Speed Demon", color: "text-purple-500" },
      { icon: "🔍", name: "Detail Hunter", color: "text-blue-500" }
    ],
    challengesCompleted: 20,
    streakDays: 5,
    totalEarnings: "$2,100",
    level: "Advanced",
    joinedDate: "2023-04-20",
    recentActivity: "1 day ago",
    specialties: ["Liquidity Attacks", "Flash Loan Security"],
    monthlyRank: 6,
    weeklyRank: 3
  },
  {
    id: 6,
    rank: 6,
    username: "SolidityMaster",
    title: "Code Auditor",
    score: 1720,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SolidityMaster&backgroundColor=a8e6cf",
    country: "🇫🇷",
    badges: [
      { icon: "🔥", name: "Streak Master", color: "text-orange-500" },
      { icon: "💻", name: "Code Master", color: "text-green-500" }
    ],
    challengesCompleted: 18,
    streakDays: 4,
    totalEarnings: "$1,800",
    level: "Intermediate",
    joinedDate: "2023-05-10",
    recentActivity: "3 hours ago",
    specialties: ["Gas Optimization", "Contract Patterns"],
    monthlyRank: 7,
    weeklyRank: 4
  }
];

function Leaderboard() {
  const { isDarkMode } = useTheme();
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly');
  const [displayData, setDisplayData] = useState(leaderboardData);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
    
    setTimeout(() => {
      setDisplayData(leaderboardData);
    }, 300);
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <FaTrophy className="text-yellow-500 text-2xl drop-shadow-lg" />;
      case 2: return <FaMedal className="text-gray-400 text-2xl drop-shadow-lg" />;
      case 3: return <FaAward className="text-amber-600 text-2xl drop-shadow-lg" />;
      default: return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
        }`}>
          #{rank}
        </div>
      );
    }
  };

  const getLevelColor = (level) => {
    if (isDarkMode) {
      switch (level) {
        case "Expert": return "bg-red-800/80 text-red-200 border-red-700";
        case "Advanced": return "bg-orange-800/80 text-orange-200 border-orange-700";
        case "Intermediate": return "bg-yellow-800/80 text-yellow-200 border-yellow-700";
        default: return "bg-gray-700 text-gray-300 border-gray-600";
      }
    } else {
      switch (level) {
        case "Expert": return "bg-red-100 text-red-800 border-red-300";
        case "Advanced": return "bg-orange-100 text-orange-800 border-orange-300";
        case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
        default: return "bg-gray-100 text-gray-800 border-gray-300";
      }
    }
  };

  const PlayerModal = ({ player, onClose }) => {
    if (!player) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className={`max-w-2xl w-full rounded-3xl p-8 border shadow-2xl ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <img
                src={player.avatar}
                alt={player.username}
                className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-500"
              />
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  {player.username}
                </h2>
                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {player.title}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:bg-opacity-50 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Performance Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Score</span>
                  <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {player.score.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Challenges</span>
                  <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {player.challengesCompleted}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Streak</span>
                  <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {player.streakDays} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Earnings</span>
                  <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {player.totalEarnings}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {player.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-blue-800/50 text-blue-200 border border-blue-700' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {player.badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-gray-100 border-gray-200'
                    }`}
                  >
                    <span className={badge.color}>{badge.icon}</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen pt-20 pb-12 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl">
                <FaTrophy className="text-3xl text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <FaBolt className="text-white text-xs" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Compete with the world's top security researchers and climb the ranks in our global security challenges!
          </p>

          {/* Live Stats */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                1,247 active players
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaFire className="text-orange-500" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Updated live
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Timeframe Selector */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-2xl p-2 shadow-xl border ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            {[
              { id: 'daily', label: 'Daily', icon: <FaFire />, desc: '24h' },
              { id: 'weekly', label: 'Weekly', icon: <FaChartLine />, desc: '7d' },
              { id: 'monthly', label: 'Monthly', icon: <FaTrophy />, desc: '30d' },
              { id: 'alltime', label: 'All Time', icon: <FaCrown />, desc: 'Total' }
            ].map((timeframe) => (
              <button
                key={timeframe.id}
                onClick={() => handleTimeframeChange(timeframe.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedTimeframe === timeframe.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700 hover:shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className="text-xl">{timeframe.icon}</div>
                <div className="text-left">
                  <div className="text-sm font-bold">{timeframe.label}</div>
                  <div className="text-xs opacity-75">{timeframe.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayData.slice(0, 3).map((user, index) => (
            <div
              key={user.id}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl cursor-pointer group ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 hover:border-blue-500/50' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              } ${index === 0 ? 'md:order-2 transform hover:scale-110 z-10' : 
                   index === 1 ? 'md:order-1 transform hover:scale-105' : 
                   'md:order-3 transform hover:scale-105'}`}
              onClick={() => setSelectedPlayer(user)}
            >
              {/* Rank Badge */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold ${
                user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800' : 
                'bg-gradient-to-r from-amber-600 to-yellow-500 text-white'
              }`}>
                #{user.rank} {selectedTimeframe.toUpperCase()}
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r shadow-xl"
                    style={{
                      borderColor: user.rank === 1 ? '#fbbf24' : user.rank === 2 ? '#9ca3af' : '#d97706'
                    }}
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl">{user.country}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {user.username}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {user.title}
                  </p>
                </div>
                
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${getLevelColor(user.level)}`}>
                  {user.level}
                </div>
                
                <div className={`text-3xl font-black mb-4 ${
                  user.rank === 1 ? 'text-yellow-500' :
                  user.rank === 2 ? 'text-gray-400' : 'text-amber-600'
                }`}>
                  {user.score.toLocaleString()}
                </div>

                {/* Enhanced Badges */}
                <div className="flex justify-center gap-2 mb-4">
                  {user.badges.slice(0, 3).map((badge, badgeIndex) => (
                    <div
                      key={badgeIndex}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'
                      }`}
                      title={badge.name}
                    >
                      <span className={badge.color}>{badge.icon}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <FaFire className="text-orange-500" />
                    <span>{user.streakDays} day streak</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span>{user.challengesCompleted} challenges</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaClock className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                    <span>{user.recentActivity}</span>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-t from-blue-500/10 to-transparent transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Full Leaderboard Table */}
        <div className={`rounded-3xl overflow-hidden border shadow-2xl ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className={`px-8 py-6 border-b ${isDarkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50/50'}`}>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Complete Rankings
            </h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              All players ranked by {selectedTimeframe} performance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-4 text-left text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Rank
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Player
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Score
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Challenges
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Streak
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Level
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wide ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Earnings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {displayData.map((user) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-opacity-50 transition-all duration-200 cursor-pointer group ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedPlayer(user)}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={user.avatar}
                          alt={user.username}
                          className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:scale-110 transition-transform duration-200"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{user.country}</span>
                            <span className={`font-bold text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                              {user.username}
                            </span>
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {user.title}
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            Active {user.recentActivity}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {user.score.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {user.challengesCompleted}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <FaFire className="text-orange-500 text-sm" />
                        <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {user.streakDays}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(user.level)}`}>
                        {user.level}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        {user.totalEarnings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className={`p-8 rounded-3xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUsers className="text-2xl text-white" />
            </div>
            <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              1,247
            </div>
            <div className={`text-sm uppercase tracking-wide font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Players
            </div>
          </div>
          
          <div className={`p-8 rounded-3xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaFire className="text-2xl text-white" />
            </div>
            <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              15.6
            </div>
            <div className={`text-sm uppercase tracking-wide font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Avg. Streak Days
            </div>
          </div>
          
          <div className={`p-8 rounded-3xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaStar className="text-2xl text-white" />
            </div>
            <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              2,450
            </div>
            <div className={`text-sm uppercase tracking-wide font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Top Score
            </div>
          </div>

          <div className={`p-8 rounded-3xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
            <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              $127K
            </div>
            <div className={`text-sm uppercase tracking-wide font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Rewards
            </div>
          </div>
        </div>
      </div>

      {/* Player Detail Modal */}
      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </div>
  );
}

export default Leaderboard;

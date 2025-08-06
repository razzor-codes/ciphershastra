import { FaCode, FaTrophy, FaBookOpen, FaRocket, FaUsers, FaShieldAlt, FaArrowRight, FaGithub, FaDiscord, FaBolt, FaStar, FaPlay, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

// Animated Stats Component with enhanced animations
function StatCard({ number, label, delay = 0 }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (number > 0 && isVisible) {
      const timer = setTimeout(() => {
        const increment = number / 30;
        let current = 0;
        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setDisplayNumber(number);
            clearInterval(counter);
          } else {
            setDisplayNumber(Math.floor(current));
          }
        }, 40);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [number, isVisible]);

  return (
    <div className={`text-center transform transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="relative">
        <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {displayNumber.toLocaleString()}+
        </div>
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

// Enhanced Feature Card with hover effects
function ModernFeatureCard({ icon, title, description, color, delay, badge }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            {badge}
          </span>
        </div>
      )}
      
      {/* Icon with enhanced animation */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} text-white mb-6 transition-all duration-300 ${
        isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
      }`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {description}
      </p>
      
      {/* Call to Action */}
      <div className={`flex items-center text-sm font-semibold transition-all duration-300 ${
        isHovered ? 'text-blue-600 dark:text-blue-400 translate-x-2' : 'text-gray-500 dark:text-gray-400'
      }`}>
        <span>Learn More</span>
        <FaChevronRight className={`ml-2 transition-transform duration-300 ${
          isHovered ? 'translate-x-1' : ''
        }`} />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${color} blur-2xl`}></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [stats, setStats] = useState({ users: 0, challenges: 0, solutions: 0 });
  
  // Enhanced counter effect with better timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ users: 1500, challenges: 25, solutions: 3750 });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[96vw] xl:max-w-[1400px] mx-auto py-12 px-4 md:px-8 min-h-screen">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-96 right-20 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 dark:from-pink-400/10 dark:to-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 dark:from-green-400/10 dark:to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px] mb-20 shadow-2xl">
        <div className="relative bg-gradient-to-br from-white via-white/95 to-white/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 backdrop-blur-xl rounded-[2rem] p-12 md:p-20 transition-colors duration-300">
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-purple-400/30 animate-pulse"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 px-6 py-3 rounded-full text-sm font-bold text-blue-700 dark:text-blue-300 mb-8 shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <FaShieldAlt className="text-blue-500 dark:text-blue-400" />
              <span>Smart Contract Security Platform</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with better gradients */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight animate-fade-in">
              Master Web3 Security
            </h1>
            
            {/* Enhanced subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Join thousands of developers mastering smart contract security through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> hands-on challenges</span>, 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> real-world scenarios</span>, and 
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> community learning</span>.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <FaPlay className="text-lg" />
                  Start Learning
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group px-10 py-5 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl">
                <span className="flex items-center gap-3">
                  <FaGithub className="text-lg" />
                  View on GitHub
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </span>
              </button>
            </div>
            
            {/* Enhanced Live Stats with staggered animation */}
            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto">
              <StatCard number={stats.users} label="Active Users" delay={0} />
              <StatCard number={stats.challenges} label="Challenges" delay={200} />
              <StatCard number={stats.solutions} label="Solutions" delay={400} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-gray-100 mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Cipher Shastra</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most comprehensive and engaging platform for mastering blockchain security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModernFeatureCard
            icon={<FaCode className="text-3xl" />}
            title="Interactive Challenges"
            description="Solve real smart contract vulnerabilities with our advanced code editor, instant feedback, and step-by-step guidance."
            color="from-blue-500 to-cyan-400"
            delay="0"
            badge="Popular"
          />
          <ModernFeatureCard
            icon={<FaTrophy className="text-3xl" />}
            title="Global Leaderboard"
            description="Compete with developers worldwide, track your progress, and earn recognition for your security expertise."
            color="from-purple-500 to-pink-400"
            delay="100"
            badge="Competitive"
          />
          <ModernFeatureCard
            icon={<FaBookOpen className="text-3xl" />}
            title="Learning Paths"
            description="Follow structured learning journeys from beginner to advanced smart contract security with personalized recommendations."
            color="from-green-500 to-emerald-400"
            delay="200"
            badge="Guided"
          />
          <ModernFeatureCard
            icon={<FaUsers className="text-3xl" />}
            title="Community Driven"
            description="Join our vibrant Discord community to discuss vulnerabilities, share knowledge, and collaborate on security research."
            color="from-orange-500 to-red-400"
            delay="300"
            badge="Active"
          />
          <ModernFeatureCard
            icon={<FaShieldAlt className="text-3xl" />}
            title="Real-World Scenarios"
            description="Learn from actual DeFi hacks, analyze production vulnerabilities, and understand attack vectors used in the wild."
            color="from-indigo-500 to-purple-400"
            delay="400"
            badge="Practical"
          />
          <ModernFeatureCard
            icon={<FaBolt className="text-3xl" />}
            title="Career Ready"
            description="Build a comprehensive portfolio of security audits, earn certifications, and get ready for Web3 security roles."
            color="from-pink-500 to-rose-400"
            delay="500"
            badge="Professional"
          />
        </div>
      </div>

      {/* Enhanced Call to Action Section */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 border border-gray-200/50 dark:border-gray-700/50 p-12 md:p-16 shadow-2xl transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200/30 dark:border-blue-700/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-200/30 dark:border-purple-700/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-pink-200/20 dark:border-pink-700/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Social Proof */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-4">
              {[1,2,3,4,5].map((i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 font-medium">Trusted by 1000+ developers</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
            Ready to become a 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> security expert</span>?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our community and start your journey in smart contract security today. 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Get instant access</span> to all challenges and resources.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                <FaRocket className="text-lg" />
                Get Started Now
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
            </button>
            
            <button className="group px-10 py-5 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 rounded-2xl font-bold border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-xl">
              <span className="flex items-center gap-3">
                <FaDiscord className="text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                Join Discord Community
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Join 1000+ developers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
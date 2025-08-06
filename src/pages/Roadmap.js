import React, { useState, useEffect } from "react";
import { FaRoad, FaGraduationCap, FaCode, FaShieldAlt, FaTrophy, FaUsers, FaBook, FaLightbulb, FaRocket, FaCertificate, FaCheck, FaTools, FaHeart, FaGem, FaBug, FaDatabase, FaArrowRight, FaExternalLinkAlt, FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTheme } from '../contexts/ThemeContext';

const getIcon = (iconName) => {
  const icons = {
    FaRoad, FaGraduationCap, FaCode, FaShieldAlt, FaTrophy, FaUsers, FaBook, FaLightbulb, FaRocket, FaCertificate, FaCheck, FaTools, FaHeart, FaGem, FaBug, FaDatabase, FaArrowRight, FaExternalLinkAlt, FaPlay, FaChevronDown, FaChevronUp
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent /> : <FaCode />;
};

const roadmapSteps = [
  {
    id: 1,
    title: "Blockchain Fundamentals",
    description: "Master the basics of blockchain technology and distributed systems",
    icon: "FaBook",
    color: "from-blue-500 to-cyan-400",
    duration: "2-4 weeks",
    difficulty: "Beginner",
    progress: 0,
    topics: [
      "Hash Functions & Cryptography",
      "Digital Signatures",
      "Proof of Work vs Proof of Stake",
      "Blockchain Architecture",
      "Consensus Mechanisms"
    ],
    resources: [
      { title: "Mastering Ethereum", url: "https://github.com/ethereumbook/ethereumbook", type: "Book" },
      { title: "The Eth2 Book", url: "https://eth2book.info/", type: "Book" }
    ]
  },
  {
    id: 2,
    title: "Solidity Fundamentals",
    description: "Learn Solidity syntax and smart contract development basics",
    icon: "FaCode",
    color: "from-green-500 to-emerald-400",
    duration: "4-6 weeks",
    difficulty: "Beginner",
    progress: 0,
    topics: [
      "Variables & Data Types",
      "Functions & Modifiers",
      "Contract Structure",
      "Inheritance & Libraries",
      "Events & Error Handling"
    ],
    resources: [
      { title: "Smart Contract Programmer - Solidity 0.8", url: "https://www.youtube.com/playlist?list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p", type: "Video" },
      { title: "Solidity Documentation", url: "https://docs.soliditylang.org/en/latest/", type: "Docs" },
      { title: "Secureum Solidity 101", url: "https://secureum.substack.com/p/solidity-101?s=r", type: "Article" },
      { title: "Secureum Solidity 201", url: "https://secureum.substack.com/p/solidity-201?s=r", type: "Article" }
    ]
  },
  {
    id: 3,
    title: "Gas Optimizations",
    description: "Learn to write efficient, gas-optimized smart contracts",
    icon: "FaRocket",
    color: "from-purple-500 to-indigo-400",
    duration: "2-3 weeks",
    difficulty: "Intermediate",
    progress: 0,
    topics: [
      "Gas Mechanics & EVM",
      "Storage vs Memory optimization",
      "Loop & Function optimizations",
      "Assembly & Yul basics",
      "Advanced optimization tricks"
    ],
    resources: [
      { title: "Advanced Gas Optimizations by Juan", url: "https://dev.to/juanxavier/advanced-gas-optimizations-tips-for-solidity-1j2f", type: "Article" },
      { title: "Gas Optimization Tips by Kaden", url: "https://betterprogramming.pub/how-to-write-smart-contracts-that-optimize-gas-spent-on-ethereum-30b5e9c5db85", type: "Article" },
      { title: "Aggregated Gas Tricks by pcaversaccio and Harikrishnan Mulackal", url: "https://forum.openzeppelin.com/t/a-collection-of-gas-optimisation-tricks/19966/6", type: "Forum" }
    ]
  },
  {
    id: 4,
    title: "Smart Contract Testing/Debugging",
    description: "Master testing frameworks and debugging techniques",
    icon: "FaTools",
    color: "from-orange-500 to-red-400",
    duration: "3-4 weeks",
    difficulty: "Intermediate",
    progress: 0,
    topics: [
      "Hardhat/Foundry Framework",
      "Unit & Integration Testing",
      "Mocking & Forking",
      "Gas Testing & Coverage",
      "Debugging Techniques"
    ],
    resources: [
      { title: "Better Programming Hub", url: "https://betterprogramming.pub/the-complete-hands-on-hardhat-tutorial-9e23728fc8a4", type: "Tutorial" },
      { title: "Hardhat Documentation", url: "https://hardhat.org/guides/waffle-testing.html", type: "Docs" },
      { title: "Foundry Book", url: "https://book.getfoundry.sh/", type: "Book" },
      { title: "Code Eater - Hindi", url: "https://www.youtube.com/watch?v=vuqhHOx6188&list=PLgPmWS2dQHW9mucRpDVe16j9Qn74ZXqcD&index=5", type: "Video" },
      { title: "Tenderly", url: "https://tenderly.co/", type: "Platform" }
    ]
  },
  {
    id: 5,
    title: "ERC Standards",
    description: "Understand token standards and common interfaces",
    icon: "FaCertificate",
    color: "from-pink-500 to-rose-400",
    duration: "2-3 weeks",
    difficulty: "Intermediate",
    progress: 0,
    topics: [
      "ERC-20 (Fungible Tokens)",
      "ERC-721 (NFTs)",
      "ERC-1155 (Multi-Token)",
      "ERC-4626 (Tokenized Vaults)",
      "ERC-2981 (Royalty Standard)"
    ],
    resources: [
      { title: "Token Standards - ERC 20, 721, 777, 1155, 4626", url: "https://ethereum.org/en/developers/docs/standards/tokens/", type: "Docs" },
      { title: "ERC-2981 Royalty Standard", url: "https://eips.ethereum.org/EIPS/eip-2981", type: "EIP" }
    ]
  },
  {
    id: 6,
    title: "OpenZeppelin Libraries",
    description: "Learn secure, battle-tested contract libraries",
    icon: "FaShieldAlt",
    color: "from-teal-500 to-cyan-400",
    duration: "2-3 weeks",
    difficulty: "Intermediate", 
    progress: 0,
    topics: [
      "Access Control Patterns",
      "Security Libraries",
      "Utility Contracts",
      "Upgradeability Patterns",
      "Governance Frameworks"
    ],
    resources: [
      { title: "OpenZeppelin Helper Libraries/Contracts", url: "https://github.com/OpenZeppelin/openzeppelin-contracts", type: "Code" },
      { title: "OpenZeppelin Learn", url: "https://docs.openzeppelin.com/learn/", type: "Tutorial" }
    ]
  },
  {
    id: 7,
    title: "Upgradeable Contracts",
    description: "Master proxy patterns and contract upgradeability",
    icon: "FaRocket",
    color: "from-indigo-500 to-purple-400",
    duration: "3-4 weeks",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Proxy Patterns (EIP-897, 1822, 1967)",
      "Diamond Standard (EIP-2535)",
      "Storage Collisions",
      "Initialization Patterns",
      "Upgrade Safety"
    ],
    resources: [
      { title: "Smart Contract Programmer - Upgradeable Contracts", url: "https://www.youtube.com/watch?v=JgSj7IiE4jA&t=157s", type: "Video" },
      { title: "Smart Contract Programmer - Risks of Upgradeable Contracts", url: "https://www.youtube.com/watch?v=XmxfB5JOt1Q&t=3s", type: "Video" },
      { title: "Different Proxy Patterns - EIPs 897, 1822, 1967, 1538, 2535", url: "https://ethereum-blockchain-developer.com/110-upgrade-smart-contracts/00-project/", type: "Tutorial" }
    ]
  },
  {
    id: 8,
    title: "Smart Contract Attack Vectors",
    description: "Deep dive into vulnerabilities and attack patterns",
    icon: "FaBug",
    color: "from-red-500 to-pink-400",
    duration: "4-6 weeks",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Reentrancy Attacks",
      "Integer Over/Underflows",
      "Access Control Issues",
      "Front-running & MEV",
      "Logic Bugs & Edge Cases"
    ],
    resources: [
      { title: "SWC Registry", url: "https://swcregistry.io/", type: "Database" },
      { title: "Smart Contract Programmer - Hack Solidity", url: "https://www.youtube.com/watch?v=4Mm3BCyHtDY&list=PLO5VPQH6OWdWsCgXJT9UuzgbC8SPvTRi5", type: "Video" },
      { title: "Secureum Security Pitfalls 101", url: "https://secureum.substack.com/p/security-pitfalls-and-best-practices-101?s=r", type: "Article" },
      { title: "Secureum Security Pitfalls 201", url: "https://secureum.substack.com/p/security-pitfalls-and-best-practices-201?s=r", type: "Article" },
      { title: "Smart Contract Attack Vectors by Kaden", url: "https://github.com/KadenZipfel/smart-contract-attack-vectors", type: "Database" }
    ]
  },
  {
    id: 9,
    title: "Yul & Assembly",
    description: "Master low-level EVM programming and assembly",
    icon: "FaCode",
    color: "from-gray-600 to-gray-400",
    duration: "3-5 weeks",
    difficulty: "Expert",
    progress: 0,
    topics: [
      "Inline Assembly Basics",
      "EVM Opcodes",
      "Memory & Storage Management",
      "Gas Cost Analysis",
      "Precompiles"
    ],
    resources: [
      { title: "Inline Assembly", url: "https://docs.soliditylang.org/en/latest/assembly.html", type: "Docs" },
      { title: "EVM Opcodes", url: "https://www.evm.codes/", type: "Reference" },
      { title: "Dynamic Gas Costs & Memory Expansion", url: "https://github.com/wolflo/evm-opcodes/blob/main/gas.md", type: "Guide" },
      { title: "Precompiles", url: "https://www.evm.codes/precompiled", type: "Reference" }
    ]
  },
  {
    id: 10,
    title: "DeFi Deep Dive",
    description: "Understand decentralized finance protocols and mechanisms",
    icon: "FaGem",
    color: "from-emerald-500 to-teal-400",
    duration: "6-8 weeks",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "AMM Mechanics (Uniswap v2/v3/v4)",
      "Lending Protocols (Aave, Compound)",
      "Yield Farming & Vaults",
      "Stablecoins & Algorithmic Stable",
      "Protocol Deep Dives: Curve, Balancer, Gearbox"
    ],
    resources: [
      { title: "Smart Contract Programmer - DeFi", url: "https://www.youtube.com/watch?v=qB2Ulx201wY&list=PLO5VPQH6OWdX-Rh7RonjZhOd9pb9zOnHW", type: "Video" },
      { title: "Finematics - DeFi", url: "https://www.youtube.com/watch?v=pWGLtjG-F5c&list=PLjrTIwaNiTwn39tg3sR_bPBWGHoznv47D", type: "Video" },
      { title: "DeFi MOOC", url: "https://www.youtube.com/playlist?list=PLS01nW3RtgopJOtsMVOK3N7n7qyNMPbJ_", type: "Course" },
      { title: "Stablecoins", url: "https://blog.chain.link/what-are-stablecoins/", type: "Article" },
      { title: "Algorithmic Stablecoins", url: "https://cointelegraph.com/altcoins-for-beginners/a-beginner-s-guide-on-algorithmic-stablecoins", type: "Article" }
    ]
  },
  {
    id: 11,
    title: "CTFs & Practice",
    description: "Hands-on practice with security challenges",
    icon: "FaTrophy",
    color: "from-yellow-500 to-orange-400",
    duration: "Ongoing",
    difficulty: "All Levels",
    progress: 0,
    topics: [
      "Ethernaut Challenges",
      "Capture The Ether",
      "CTF Writeups Analysis",
      "Custom Challenge Creation",
      "Community Competitions"
    ],
    resources: [
      { title: "CipherShastra", url: "https://ciphershastra.com/", type: "Platform" },
      { title: "Ethernaut", url: "https://ethernaut.openzeppelin.com/", type: "CTF" },
      { title: "Capture The Ether", url: "https://capturetheether.com/", type: "CTF" },
      { title: "CTFs & WriteUps - A curated list", url: "https://github.com/blockthreat/blocksec-ctfs", type: "Collection" }
    ]
  },
  {
    id: 12,
    title: "DeFi Attack Vectors",
    description: "Advanced DeFi-specific vulnerabilities and exploits",
    icon: "FaBug",
    color: "from-red-600 to-rose-500",
    duration: "4-6 weeks",
    difficulty: "Expert",
    progress: 0,
    topics: [
      "Flash Loan Attacks",
      "Price Oracle Manipulation",
      "Front-Running & Sandwich Attacks",
      "Rug Pulls & Unlimited Token Allowance",
      "Governance Attacks"
    ],
    resources: [
      { title: "Damn Vulnerable DeFi", url: "https://www.damnvulnerabledefi.xyz/", type: "CTF" }
    ]
  },
  {
    id: 13,
    title: "Postmortems & Analysis",
    description: "Learn from real-world exploits and incident reports",
    icon: "FaDatabase",
    color: "from-slate-500 to-gray-400",
    duration: "Ongoing",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Exploit Analysis",
      "Root Cause Investigation",
      "Mitigation Strategies",
      "Incident Response",
      "Staking Rewards & Vaults Security"
    ],
    resources: [
      { title: "BlockSec", url: "https://blocksecteam.medium.com/", type: "Blog" },
      { title: "Immunefi", url: "https://medium.com/@immunefi", type: "Blog" },
      { title: "SlowMist", url: "https://slowmist.medium.com/", type: "Blog" },
      { title: "Rekt News", url: "https://rekt.news/", type: "News" },
      { title: "PeckShield", url: "https://twitter.com/peckshield", type: "Twitter" }
    ]
  },
  {
    id: 14,
    title: "Audit Report Reading",
    description: "Analyze professional audit reports and findings",
    icon: "FaGraduationCap",
    color: "from-blue-600 to-indigo-500",
    duration: "3-4 weeks",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Report Structure Analysis",
      "Finding Classification",
      "Risk Assessment",
      "Remediation Strategies",
      "Quality Evaluation"
    ],
    resources: [
      { title: "Solodit", url: "https://solodit.xyz/", type: "Database" },
      { title: "Secureum Audit Findings 101", url: "https://secureum.substack.com/p/audit-findings-101?s=r", type: "Article" },
      { title: "Secureum Audit Findings 201", url: "https://secureum.substack.com/p/audit-findings-201?s=r", type: "Article" },
      { title: "Consensys Diligence", url: "https://consensys.io/diligence/audits/", type: "Reports" },
      { title: "Trail of Bits Publications", url: "https://github.com/trailofbits/publications#ethereumevm", type: "Reports" },
      { title: "OpenZeppelin Audits", url: "https://blog.openzeppelin.com/tag/security-audits", type: "Reports" },
      { title: "Code4rena Reports", url: "https://code4rena.com/reports", type: "Reports" },
      { title: "Sherlock Audits", url: "https://audits.sherlock.xyz/contests", type: "Reports" }
    ]
  },
  {
    id: 15,
    title: "Security Standards & Checklists",
    description: "Master industry standards and best practices",
    icon: "FaCertificate",
    color: "from-green-600 to-emerald-500",
    duration: "2-3 weeks",
    difficulty: "Intermediate",
    progress: 0,
    topics: [
      "SCSVS Framework",
      "Solcurity Checklist",
      "Attack Vector Database",
      "Best Practice Guidelines",
      "Compliance Standards"
    ],
    resources: [
      { title: "Rari-Capital Solcurity", url: "https://github.com/Rari-Capital/solcurity", type: "Checklist" },
      { title: "SCSVS", url: "https://github.com/securing/SCSVS", type: "Standard" }
    ]
  },
  {
    id: 16,
    title: "Ethereum Improvement Proposals",
    description: "Stay updated with latest Ethereum developments",
    icon: "FaRocket",
    color: "from-purple-600 to-pink-500",
    duration: "Ongoing",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Core EIPs: 150, 1559, 2929, 2930, 3198, 3529, 3675, 4399, 1153, 4758",
      "ERC Standards: 165, 1167, 1271, 2535, 2612, 2771, 2981, 4337, 4626",
      "Interface Standards: 712",
      "Meta EIPs"
    ],
    resources: [
      { title: "Important Ethereum Improvement Proposals (EIPs)", url: "https://eips.ethereum.org/", type: "Specs" },
      { title: "Core EIPs", url: "https://eips.ethereum.org/core", type: "Specs" },
      { title: "ERC Standards", url: "https://eips.ethereum.org/erc", type: "Specs" },
      { title: "Interface EIPs", url: "https://eips.ethereum.org/interface", type: "Specs" },
      { title: "Meta EIPs", url: "https://eips.ethereum.org/meta", type: "Specs" }
    ]
  },
  {
    id: 17,
    title: "Security Arsenal & Tools",
    description: "Master the complete toolkit for security analysis",
    icon: "FaTools",
    color: "from-orange-600 to-red-500",
    duration: "4-5 weeks",
    difficulty: "Advanced",
    progress: 0,
    topics: [
      "Static Analysis (Slither, Mythril)",
      "Fuzzing Tools (Echidna, Foundry)",
      "Symbolic Execution (Manticore)",
      "Transaction Analysis (Tenderly)",
      "IDE Setup & Workflows"
    ],
    resources: [
      { title: "Remix IDE", url: "https://remix.ethereum.org/", type: "Tool" },
      { title: "Foundry", url: "https://github.com/foundry-rs/foundry", type: "Framework" },
      { title: "Scribble", url: "https://consensys.net/diligence/scribble/", type: "Tool" },
      { title: "Slither", url: "https://github.com/crytic/slither", type: "Tool" },
      { title: "VS Code IDE", url: "https://code.visualstudio.com/", type: "Tool" },
      { title: "Mythril", url: "https://github.com/ConsenSys/mythril", type: "Tool" },
      { title: "Echidna", url: "https://github.com/crytic/echidna", type: "Tool" },
      { title: "Manticore", url: "https://github.com/trailofbits/manticore", type: "Tool" },
      { title: "Surya", url: "https://github.com/ConsenSys/surya", type: "Tool" },
      { title: "Tenderly", url: "https://tenderly.co/", type: "Platform" },
      { title: "BlockSec ETH/BSC Tx Analysis", url: "https://versatile.blocksecteam.com/tx", type: "Tool" },
      { title: "ethtx ETH Tx Analysis", url: "https://ethtx.info/", type: "Tool" }
    ]
  },
  {
    id: 18,
    title: "Continuous Learning & Research",
    description: "Stay current with the evolving security landscape",
    icon: "FaHeart",
    color: "from-pink-600 to-rose-500",
    duration: "Ongoing",
    difficulty: "All Levels",
    progress: 0,
    topics: [
      "Security Communities on Discord",
      "Research Papers & Arxiv",
      "Twitter & Social Networking",
      "Newsletter Subscriptions",
      "Conference Talks & Workshops"
    ],
    resources: [
      { title: "Blockchain Pentesting Discord", url: "https://discord.gg/JTkeNXX", type: "Community" },
      { title: "Blockthreat Newsletter", url: "https://newsletter.blockthreat.io/", type: "Newsletter" },
      { title: "Ethereum Magicians", url: "https://ethereum-magicians.org/", type: "Forum" },
      { title: "Eth Research", url: "https://ethresear.ch/", type: "Research" },
      { title: "Arxiv Deep Dive Research Papers", url: "https://arxiv.org/", type: "Research" },
      { title: "Ethereum Execution Specs", url: "https://github.com/ethereum/execution-specs", type: "Specs" },
      { title: "Ethereum Consensus Specs", url: "https://github.com/ethereum/consensus-specs", type: "Specs" }
    ]
  }
];

const getDifficultyColor = (difficulty, isDarkMode) => {
  if (isDarkMode) {
    switch (difficulty) {
      case "Beginner": return "bg-green-800 text-green-200";
      case "Intermediate": return "bg-yellow-800 text-yellow-200";
      case "Advanced": return "bg-orange-800 text-orange-200";
      case "Expert": return "bg-red-800 text-red-200";
      default: return "bg-gray-700 text-gray-300";
    }
  } else {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  }
};

const getResourceIcon = (type) => {
  switch (type) {
    case "Video": return "🎥";
    case "Book": return "📚";
    case "Article": return "📝";
    case "Tutorial": return "🎯";
    case "CTF": return "🏆";
    case "Tool": return "🔧";
    case "Code": return "💻";
    default: return "🔗";
  }
};

function Roadmap() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  // Load progress from localStorage on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Load saved progress from localStorage
    const savedProgress = localStorage.getItem('roadmapProgress');
    if (savedProgress) {
      try {
        const progressArray = JSON.parse(savedProgress);
        setCompletedSteps(new Set(progressArray));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever completedSteps changes
  useEffect(() => {
    if (completedSteps.size > 0) {
      const progressArray = Array.from(completedSteps);
      localStorage.setItem('roadmapProgress', JSON.stringify(progressArray));
    }
  }, [completedSteps]);

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const toggleComplete = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  // Function to clear all progress
  const clearProgress = () => {
    setCompletedSteps(new Set());
    localStorage.removeItem('roadmapProgress');
  };

  // Function to export progress
  const exportProgress = () => {
    const progressData = {
      completedSteps: Array.from(completedSteps),
      timestamp: new Date().toISOString(),
      totalSteps: roadmapSteps.length
    };
    
    const dataStr = JSON.stringify(progressData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'roadmap-progress.json';
    link.click();
  };

  const progressPercentage = (completedSteps.size / roadmapSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-300' 
                : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700'
            }`}>
              <FaRoad className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
              Smart Contract Auditor Path
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-tight">
              Security Roadmap
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Your complete journey to becoming a smart contract security expert. 
              From blockchain basics to advanced DeFi attack vectors - master every step of the auditor's path.
            </p>

            {/* Progress Overview */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-xl border p-8 mb-12 max-w-2xl mx-auto ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Progress</span>
                <span className={`text-2xl font-black ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{completedSteps.size}/{roadmapSteps.length}</span>
              </div>
              <div className={`w-full rounded-full h-3 mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {progressPercentage.toFixed(0)}% Complete • Keep going to master smart contract security!
              </p>
              
              {/* Progress Management Buttons */}
              {completedSteps.size > 0 && (
                <div className={`flex flex-wrap gap-2 justify-center pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={exportProgress}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode
                        ? 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    Export Progress
                  </button>
                  <button
                    onClick={clearProgress}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode
                        ? 'bg-red-800 text-red-200 hover:bg-red-700'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                  >
                    Reset Progress
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Roadmap */}
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Connection Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b rounded-full hidden md:block ${
              isDarkMode 
                ? 'from-blue-800 via-indigo-700 to-purple-800' 
                : 'from-blue-200 via-indigo-200 to-purple-200'
            }`}></div>
            
            {roadmapSteps.map((step, index) => {
              const isExpanded = expandedStep === step.id;
              const isCompleted = completedSteps.has(step.id);
              
              return (
                <div key={step.id} className="relative mb-8 md:ml-16">
                  {/* Step Number Circle */}
                  <div className={`absolute -left-20 top-6 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300 hidden md:flex ${
                    isCompleted 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 scale-110' 
                      : `bg-gradient-to-br ${step.color}`
                  }`}>
                    {isCompleted ? <FaCheck className="text-xl" /> : step.id}
                  </div>

                  {/* Step Card */}
                  <div className={`backdrop-blur-xl rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                    isDarkMode 
                      ? (isCompleted 
                          ? 'bg-green-900/40 border-green-600 backdrop-blur-xl' 
                          : 'bg-gray-800/90 border-gray-700/50 hover:border-indigo-500')
                      : (isCompleted 
                          ? 'bg-green-50/90 border-green-300' 
                          : 'bg-white/90 border-gray-200/50 hover:border-indigo-300')
                  } ${isExpanded ? 'scale-102' : ''}`}>
                    
                    {/* Header */}
                    <div 
                      className="p-8 cursor-pointer"
                      onClick={() => toggleStep(step.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-6 flex-1">
                          <div className={`p-4 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg`}>
                            <div className="text-white text-2xl">{getIcon(step.icon)}</div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{step.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(step.difficulty, isDarkMode)}`}>
                                {step.difficulty}
                              </span>
                            </div>
                            <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
                            
                            <div className={`flex items-center gap-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <span className="flex items-center gap-1">
                                <FaGraduationCap className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-400'}`} />
                                {step.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaBook className={`${isDarkMode ? 'text-blue-400' : 'text-blue-400'}`} />
                                {step.topics.length} topics
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleComplete(step.id);
                            }}
                            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                              isCompleted
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : isDarkMode
                                  ? 'bg-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white'
                                  : 'bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
                            }`}
                          >
                            {isCompleted ? <FaCheck /> : 'Mark Complete'}
                          </button>
                          <div className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-500'}`}>
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className={`px-8 pb-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                          {/* Topics */}
                          <div>
                            <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                              <FaLightbulb className="text-yellow-500" />
                              Key Topics
                            </h4>
                            <div className="space-y-2">
                              {step.topics.map((topic, idx) => (
                                <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl ${
                                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                                }`}>
                                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                              <FaExternalLinkAlt className="text-blue-500" />
                              Learning Resources
                            </h4>
                            <div className="space-y-3">
                              {step.resources.map((resource, idx) => (
                                <a
                                  key={idx}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 group ${
                                    isDarkMode
                                      ? 'bg-gray-700/50 border-gray-600 hover:border-indigo-500 hover:bg-gray-700/80'
                                      : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md'
                                  }`}
                                >
                                  <span className="text-xl">{getResourceIcon(resource.type)}</span>
                                  <div className="flex-1">
                                    <div className={`font-semibold transition-colors ${
                                      isDarkMode
                                        ? 'text-gray-200 group-hover:text-indigo-400'
                                        : 'text-gray-800 group-hover:text-indigo-600'
                                    }`}>
                                      {resource.title}
                                    </div>
                                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resource.type}</div>
                                  </div>
                                  <FaArrowRight className={`transition-colors ${
                                    isDarkMode
                                      ? 'text-gray-500 group-hover:text-indigo-400'
                                      : 'text-gray-400 group-hover:text-indigo-500'
                                  }`} />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-16`}>
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full shadow-lg">
                  <FaTrophy className="text-4xl text-yellow-300" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Start with Step 1 and work your way through this comprehensive roadmap. 
                Join thousands of security researchers mastering smart contract auditing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => toggleStep(1)}
                  className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <FaPlay />
                  Start Learning Now
                </button>
                <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-2xl font-bold hover:bg-white/10 transition-all duration-200">
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
    </div>
  );
}

export default Roadmap;
import { useState, useRef, useEffect } from "react";
import { useMetaMask } from "../hooks/useMetaMask";

export default function LoginWidget() {
  const {
    connect,
    logout,
    account,
    username,
    error,
    loading,
    isGoerli,
    setNewUsername,
    clearError,
  } = useMetaMask();

  const [editing, setEditing] = useState(false);
  const [newUsername, setUsernameInput] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isConnectButtonVisible, setIsConnectButtonVisible] = useState(true);
  const [isUserButtonVisible, setIsUserButtonVisible] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        handleCloseDropdown();
      }
    }
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  // Trigger animation when dropdown opens
  useEffect(() => {
    if (dropdown) {
      // Small delay to ensure DOM is updated
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [dropdown]);

  // Clear errors when successfully connected
  useEffect(() => {
    if (account && error) {
      clearError();
    }
  }, [account, error, clearError]);

  // Handle login/logout animations
  useEffect(() => {
    if (account) {
      // User just connected
      setIsConnectButtonVisible(false);
      setTimeout(() => {
        setIsUserButtonVisible(true);
      }, 200); // Delay to create smooth transition
    } else {
      // User just disconnected or initial state
      if (isDisconnecting) {
        setIsUserButtonVisible(false);
        setTimeout(() => {
          setIsConnectButtonVisible(true);
          setIsDisconnecting(false);
        }, 200);
      } else {
        // Initial state
        setIsConnectButtonVisible(true);
        setIsUserButtonVisible(false);
      }
    }
  }, [account, isDisconnecting]);

  // Handle dropdown animations
  const handleOpenDropdown = () => {
    setDropdown(true);
    setIsAnimating(true);
  };

  const handleCloseDropdown = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setDropdown(false);
      setEditing(false);
    }, 200); // Match the transition duration
  };

  // Enhanced logout with animation
  const handleLogout = () => {
    setIsDisconnecting(true);
    handleCloseDropdown();
    setTimeout(() => {
      logout();
    }, 100); // Small delay to start animation
  };

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    await setNewUsername(newUsername);
    setEditing(false);
    setUsernameInput("");
  };

  if (!account) {
    return (
      <div className="relative">
        {/* Connect Button with Animation */}
        <button
          onClick={connect}
          className={`px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform ${
            isConnectButtonVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95'
          }`}
          disabled={loading}
        >
          <span className="flex items-center gap-2">
            {loading && (
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {loading ? "Connecting..." : "Connect Wallet"}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-2 z-50">
      {/* User Button with Animation */}
      <button
        className={`flex items-center gap-3 px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transform ${
          isUserButtonVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-95'
        }`}
        onClick={() => dropdown ? handleCloseDropdown() : handleOpenDropdown()}
      >
        <img
          src={`https://ui-avatars.com/api/?background=6366f1&color=fff&rounded=true&size=32&name=${username || "User"}`}
          alt="avatar"
          className="rounded-full w-8 h-8 shadow-sm"
        />
        <div className="text-left hidden sm:block">
          <div className={`font-semibold text-gray-800 dark:text-gray-100 text-sm transition-all duration-300 ${
            isUserButtonVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {username || "User"}
          </div>
          <div className={`text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 delay-75 ${
            isUserButtonVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
        </div>
      </button>
      
      {dropdown && (
        <div
          ref={dropdownRef}
          className={`absolute right-0 top-14 min-w-[280px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-[9999] p-6 backdrop-blur-xl transition-all duration-200 ease-out transform ${
            isAnimating 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95'
          }`}
        >
          {/* Arrow */}
          <div className={`absolute -top-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200/50 dark:border-gray-700/50 rotate-45 z-[10000] transition-all duration-200 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={`https://ui-avatars.com/api/?background=6366f1&color=fff&rounded=true&size=64&name=${username || "User"}`}
              alt="avatar"
              className="rounded-full mb-3 shadow-lg ring-4 ring-blue-100"
              width={64}
              height={64}
            />
            <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{username || "User"}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-lg">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
              <div className={`w-2 h-2 rounded-full ${isGoerli ? 'bg-green-400' : 'bg-red-400'}`}></div>
            </div>
            {!isGoerli && (
              <div className="mt-2 px-3 py-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <span className="text-xs text-red-600 dark:text-red-400 font-medium">
                  Please switch to Goerli network
                </span>
              </div>
            )}
          </div>

          {/* Edit Username */}
          {editing ? (
            <form onSubmit={handleUsernameChange} className="mb-4">
              <input
                type="text"
                maxLength={15}
                value={newUsername}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-800 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter new username"
                required
              />
              <div className="flex gap-2 mt-3">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration-200"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
            >
              Edit Username
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Disconnect Wallet
          </button>
          
          {error && (
            <div 
              className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200"
              onClick={clearError}
              title="Click to dismiss error"
            >
              <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
              <p className="text-red-400 dark:text-red-500 text-xs text-center mt-1">Click to dismiss</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
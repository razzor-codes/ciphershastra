import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

const USERNAMES_CONTRACT = "0xeC3B1733fbF131058846764cD2beBAac47168b0c";
const ABI = [
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "usernames",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "_username", type: "string" }],
		name: "setUsername",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export function useMetaMask() {
	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);
	const [account, setAccount] = useState(null);
	const [username, setUsername] = useState("Anonymous");
	const [chainId, setChainId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// Connect to MetaMask
	const connect = useCallback(async () => {
		if (!window.ethereum) {
			setError("MetaMask not found");
			return;
		}
		setLoading(true);
		setError(""); // Clear any previous errors
		try {
			const _provider = new ethers.BrowserProvider(window.ethereum);
			const _signer = await _provider.getSigner();
			const _contract = new ethers.Contract(USERNAMES_CONTRACT, ABI, _signer);
			const _account = await _signer.getAddress();
			const _chainId = (await _provider.getNetwork()).chainId;
			
			setProvider(_provider);
			setSigner(_signer);
			setContract(_contract);
			setAccount(_account);
			setChainId(_chainId);
			
			// Fetch username - if this fails, don't show connection error
			try {
				let uname = await _contract.usernames(_account);
				setUsername(uname || "Anonymous");
			} catch (usernameErr) {
				console.warn("Could not fetch username from contract:", usernameErr);
				setUsername("Anonymous");
			}
			
			// Connection was successful, clear any errors
			setError("");
		} catch (err) {
			console.error("MetaMask connection error:", err);
			setError("MetaMask connection failed");
		}
		setLoading(false);
	}, []);

	// Listen for account/network changes
	useEffect(() => {
		if (!window.ethereum) return;
		const handleAccountsChanged = (accounts) => {
			if (accounts.length > 0) {
				setAccount(accounts[0]);
				setUsername("Anonymous");
				setError(""); // Clear errors when account changes successfully
			} else {
				// User disconnected
				setAccount(null);
				setUsername("Anonymous");
				setError("");
			}
		};
		const handleChainChanged = (_chainId) => {
			setChainId(Number(_chainId));
			setError(""); // Clear errors when chain changes
		};
		window.ethereum.on("accountsChanged", handleAccountsChanged);
		window.ethereum.on("chainChanged", handleChainChanged);
		return () => {
			window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
			window.ethereum.removeListener("chainChanged", handleChainChanged);
		};
	}, []);

	// Set username
	const setNewUsername = async (newUsername) => {
		if (!contract || !account) return;
		if (newUsername.length > 15) {
			setError("Username should be less than 16 characters");
			return;
		}
		setLoading(true);
		try {
			const tx = await contract.setUsername(newUsername);
			await tx.wait();
			setUsername(newUsername);
			setError("");
		} catch (err) {
			setError("Failed to set username");
		}
		setLoading(false);
	};

	// Logout function
	const logout = () => {
		// Clear account and user info
		setAccount(null);
		setUsername("Anonymous");
		setProvider(null);
		setSigner(null);
		setContract(null);
		setChainId(null);
		setError(""); // Clear any errors on logout
	};

	// Function to manually clear errors
	const clearError = () => {
		setError("");
	};

	return {
		connect,
		logout, // <-- export logout
		account,
		username,
		chainId,
		loading,
		error,
		setNewUsername,
		clearError, // Export clearError function
		isGoerli: chainId === 5,
	};
}
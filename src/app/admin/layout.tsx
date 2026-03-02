"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type AdminContextType = {
  secret: string;
  setSecret: (s: string) => void;
  logout: () => void;
};

const AdminContext = createContext<AdminContextType>({
  secret: "",
  setSecret: () => {},
  logout: () => {},
});

export const useAdmin = () => useContext(AdminContext);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secret, setSecretState] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("cms_secret");
    if (stored) setSecretState(stored);
  }, []);

  const setSecret = (s: string) => {
    sessionStorage.setItem("cms_secret", s);
    setSecretState(s);
  };

  const logout = () => {
    sessionStorage.removeItem("cms_secret");
    setSecretState("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Verify the secret by making a test API call
    const res = await fetch("/api/cms/posts", {
      headers: { "x-cms-secret": input },
    });

    if (res.ok) {
      setSecret(input);
    } else {
      setError("Invalid secret key");
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Not authenticated — show login
  if (!secret) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Blog CMS Login
          </h1>
          <form onSubmit={handleLogin}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CMS Secret Key
            </label>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter your secret key"
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated — render admin pages
  return (
    <AdminContext.Provider value={{ secret, setSecret, logout }}>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
}

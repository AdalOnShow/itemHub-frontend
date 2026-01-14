'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { validateCredentials, setAuthCookie } from '@/lib/auth';

/**
 * Login Page
 * Mock authentication with hardcoded credentials
 * Email: admin@example.com
 * Password: 123456
 */
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate credentials
    if (validateCredentials(email, password)) {
      // Set auth cookie
      setAuthCookie();
      
      // Redirect to books page
      router.push('/books');
    } else {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md border rounded p-8">
        <h1 className="text-2xl font-bold mb-6">Login to ItemHub</h1>
        
        {/* Hint for testing */}
        <div className="mb-4 p-3 bg-gray-100 rounded text-sm">
          <p className="font-semibold">Test Credentials:</p>
          <p>Email: admin@example.com</p>
          <p>Password: 123456</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="admin@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="123456"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

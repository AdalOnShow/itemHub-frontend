/**
 * Authentication utilities for cookie-based mock auth
 * Uses hardcoded credentials: admin@example.com / 123456
 */

// Mock credentials
const MOCK_CREDENTIALS = {
  email: 'admin@example.com',
  password: '123456'
};

const AUTH_COOKIE_NAME = 'auth-token';

/**
 * Validate login credentials
 * Returns true if credentials match mock data
 */
export function validateCredentials(email, password) {
  return email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password;
}

/**
 * Set authentication cookie
 * Called after successful login
 */
export function setAuthCookie() {
  // Create a simple auth token (in production, use JWT or session token)
  const token = 'mock-auth-token-' + Date.now();
  
  // Set cookie with 7 day expiry
  document.cookie = `${AUTH_COOKIE_NAME}=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
}

/**
 * Get authentication cookie value
 * Returns null if not authenticated
 */
export function getAuthCookie() {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => cookie.trim().startsWith(`${AUTH_COOKIE_NAME}=`));
  
  if (!authCookie) return null;
  
  return authCookie.split('=')[1];
}

/**
 * Delete authentication cookie
 * Called on logout
 */
export function deleteAuthCookie() {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
}

/**
 * Check if user is authenticated
 * Client-side check
 */
export function isAuthenticated() {
  return getAuthCookie() !== null;
}

/**
 * Unified API URL Resolution
 * 
 * In production (Vercel), we use relative paths (/api) so the browser automatically 
 * routes to the same domain. In development, we fallback to localhost:3001.
 */
const resolveApiUrl = () => {
  // SSR Handle (Server-side rendering)
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:3001';
  }

  // Frontend Override
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  const { hostname, protocol, port } = window.location;

  // If we are on the main production domain, use relative /api
  if (hostname.includes('vercel.app') || hostname.includes('teambuilderz.us')) {
     return `${protocol}//${hostname}/api`;
  }

  // Development fallback: If on port 3000, API is likely on 3001
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const apiPort = port === '3000' ? '3001' : port;
    return `${protocol}//${hostname}:${apiPort}`;
  }

  // Universal relative fallback
  return '/api';
};

export const API_URL = resolveApiUrl();

export default API_URL;


// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://backpro-bjzn.onrender.com',
  ENDPOINTS: {
    CONTACT: '/api/contact/',
    ACCOUNTS: '/api/accounts/',
  }
};

export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

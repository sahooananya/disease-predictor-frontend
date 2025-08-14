// API Configuration
export const API_BASE_URL = 'http://localhost:5000';

export const API_ENDPOINTS = {
  PREDICT: '/predict',
  PRECAUTIONS: '/precautions',
  HEALTH_CHECK: '/health'
};

// API utility functions
export const apiCall = async (endpoint: string, data?: any) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const options: RequestInit = {
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
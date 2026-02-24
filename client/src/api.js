import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 5000 // Add timeout to prevent hanging
});

// Add error handling for API calls
export const fetchEducation = () => 
  api.get('/education').catch(() => ({ data: [] }));

export const fetchExperience = () => 
  api.get('/experience').catch(() => ({ data: [] }));

export const fetchProjects = () => 
  api.get('/projects').catch(() => ({ data: [] }));

export const fetchSkills = () => 
  api.get('/skills').catch(() => ({ data: [] }));

export const fetchAchievements = () => 
  api.get('/achievements').catch(() => ({ data: [] }));

export const submitContact = (data) => 
  api.post('/contact', data).catch(() => ({ 
    data: { message: 'Contact form submission failed. Please try again later.' }
  }));

export default api;


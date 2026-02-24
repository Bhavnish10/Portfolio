import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api'
});

export const fetchEducation = () => api.get('/education');
export const fetchExperience = () => api.get('/experience');
export const fetchProjects = () => api.get('/projects');
export const fetchSkills = () => api.get('/skills');
export const fetchAchievements = () => api.get('/achievements');
export const submitContact = (data) => api.post('/contact', data);

export default api;


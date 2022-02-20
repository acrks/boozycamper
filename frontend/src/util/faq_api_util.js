import axios from 'axios';

export const getFAQs = () => {
  return axios.get('/api/faqs/')
};

export const writeFAQ = data => {
  return axios.post('/api/faqs/', data)
}
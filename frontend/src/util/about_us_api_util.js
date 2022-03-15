import axios from 'axios';

export const getAboutUs = () => {
  return axios.get('/api/aboutus/')
};

export const writeAboutUs = data => {
  return axios.post('/api/aboutus/', data)
}

export const updateFAQ = (data) => {
    return axios.patch(`/api/aboutus/${data.id}`, data)
}
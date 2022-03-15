import axios from 'axios';

export const getAboutUs = () => {
  return axios.get('/api/aboutus/')
};

export const updateAboutUs = (data) => {
    return axios.patch(`/api/aboutus/${data.id}`, data)
}
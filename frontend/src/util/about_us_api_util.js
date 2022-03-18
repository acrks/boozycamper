import axios from 'axios';

export const getAboutUs = () => {
  return axios.get('/api/aboutus/')
};

export const getAboutUsSingle = (id) => {
  return axios.get(`/api/aboutus/${id}`)
};

export const updateAboutUs = (data) => {
    return axios.patch(`/api/aboutus/${data.id}`, data)
}
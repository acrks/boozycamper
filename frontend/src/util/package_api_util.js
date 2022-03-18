import axios from 'axios';

export const getPackages = () => {
  return axios.get('/api/packages/')
};

export const writePackage = data => {
  return axios.post('/api/packages/', data)
}

export const updatePackage = (drinks_package) => {
  return axios.patch(`/api/packages/${drinks_package.id}`, drinks_package)
}

export const deletePackage = (packageId) => {
  return axios.delete(`/api/faqs/${packageId}`)
}
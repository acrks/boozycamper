import axios from 'axios';

export const getFAQs = () => {
  return axios.get('/api/faqs/')
};

export const writeFAQ = data => {
  return axios.post('/api/faqs/', data)
}

export const updateFAQ = (faq) => {
  return axios.patch(`/api/faqs/${faq.id}`, faq)
}

export const deleteAppointment = (faqId) => {
  return axios.delete(`/api/faqs/${faqId}`)
}
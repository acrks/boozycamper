import { getFAQs, writeFAQ } from '../util/faq_api_util';

export const RECEIVE_FAQS = "RECEIVE_FAQS";
export const RECEIVE_NEW_FAQ = "RECEIVE_NEW_FAQ";
export const REMOVE_FAQ = "REMOVE_FAQ";

export const receiveFAQs = faqs => ({
  type: RECEIVE_FAQS,
  faqs
});

export const receiveNewFAQ = faq => ({
  type: RECEIVE_NEW_FAQ,
  faq
})

export const fetchFAQs = () => dispatch => (
  getFAQs()
    .then(faqs => dispatch(receiveFAQs(faqs)))
    .catch(err => console.log(err))
);

export const composeFAQ = data => dispatch => (
  writeFAQ(data)
    .then(faq => dispatch(receiveNewFAQ(faq)))
    .catch(err => console.log(err))
);

export const removeFAQ = faqId => {
  return {
    type: REMOVE_FAQ,
    faqId
  }
}

export const deleteAppointment = appointmentId => dispatch => {
  return AppointmentApiUtil.deleteAppointment(appointmentId)
    .then(
      () => dispatch(removeAppointment(appointmentId)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}
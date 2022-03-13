import * as FAQAPIUtil from '../util/faq_api_util';

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
  FAQAPIUtil.getFAQs()
    .then(faqs => dispatch(receiveFAQs(faqs)))
    .catch(err => console.log(err))
);

export const composeFAQ = data => dispatch => (
  FAQAPIUtil.writeFAQ(data)
    .then(faq => dispatch(receiveNewFAQ(faq)))
    .catch(err => console.log(err))
);

export const updateFAQ = faq => dispatch => (
  FAQAPIUtil.writeFAQ(faq)
    .then(
      faq => dispatch(updateFAQ(faq)),
      err => console.log(err)
    )
)

export const removeFAQ = faqId => {
  return {
    type: REMOVE_FAQ,
    faqId
  }
}

export const deleteFAQ = faqId => dispatch => (
  FAQAPIUtil.deleteFAQ(faqId)
    .then(
      () => dispatch(removeFAQ(faqId)),
      err => console.log(err)
    )
);
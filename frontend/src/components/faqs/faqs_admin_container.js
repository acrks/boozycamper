import { connect } from 'react-redux';
import { fetchFAQs, composeFAQ, updateFAQ, deleteFAQ } from '../../actions/faq_actions';
import FAQs from './faqs';

const mapStateToProps = (state) => {
  return {
    faqs: Object.values(state.faqs.all)
  };
};

const mapDispatchToProps = dispatch => ({
    fetchFAQs: () => dispatch(fetchFAQs()),
    composeFAQ: (faq) => dispatch(composeFAQ(faq)),
    updateFAQ: (faq) => dispatch(updateFAQ(faq)),
    deleteFAQ: (faqId) => dispatch(deleteFAQ(faqId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FAQs);
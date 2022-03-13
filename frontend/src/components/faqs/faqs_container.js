import { connect } from 'react-redux';
import { fetchFAQs, composeFAQ, removeFAQ } from '../../actions/faq_actions';
import FAQs from './faqs';

const mapStateToProps = (state) => {
  return {
    faqs: Object.values(state.faqs.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFAQs: () => dispatch(fetchFAQs()),
    composeFAQ: (faq) => dispatch(composeFAQ(faq)),
    removeFAQ: (faqId) => dispatch(removeFAQ(faqId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FAQs);
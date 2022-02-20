import { connect } from 'react-redux';
import { fetchFAQs } from '../../actions/faq_actions';
import FAQs from './faqs';

const mapStateToProps = (state) => {
  return {
    faqs: Object.values(state.faqs.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFAQs: () => dispatch(fetchFAQs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FAQs);
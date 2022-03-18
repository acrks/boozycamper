import { connect } from 'react-redux';
import { fetchAboutUs, fetchAboutUsSingle } from '../../actions/aboutus_actions';
import AboutUs from './aboutus';

const mapStateToProps = (state) => {
  return {
    aboutus: state.aboutus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAboutUs: () => dispatch(fetchAboutUs()),
    fetchAboutUsSingle: (id) => dispatch(fetchAboutUsSingle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
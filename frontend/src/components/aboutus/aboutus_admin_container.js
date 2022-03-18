import { connect } from 'react-redux';
import { fetchAboutUs, updateAboutUs } from '../../actions/aboutus_actions';
import AboutUs from './aboutus_admin';

const mapStateToProps = (state) => {
  return {
    aboutus: state.aboutus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAboutUs: () => dispatch(fetchAboutUs()),
    updateAboutUs: (aboutus) => dispatch(updateAboutUs(aboutus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
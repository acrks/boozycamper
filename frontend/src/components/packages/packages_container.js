import { connect } from 'react-redux';
import { fetchPackages } from '../../actions/package_actions';
import Packages from './packages';

const mapStateToProps = (state) => {
  return {
    packages: Object.values(state.packages.all)
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPackages: () => dispatch(fetchPackages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);